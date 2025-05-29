import { fetchService } from "./fetch.service"
import { type Summoner } from "types/summoner.type"
import { Division } from "enums/division.enum";
import { Rank } from "enums/rank.enum";

import { PLAYER_LIST } from "data/player.data";
import storageService from "services/storage.service";
import { sort } from 'services/sort.service';

const emptySummoner = {
    tier: 'UNRANKED',
    rank: '',
    leaguePoints: 0,
    wins: 0,
    losses: 0,
    winRate: 0,
    totalLP: 0,
    leagueId: '',
    summonerId: '',
    queueType: 'RANKED_SOLO_5x5',
    hotStreak: false,
    veteran: false,
    freshBlood: false,
    inactive: false,
    position: 0,
    miniSeries: {},
}

export async function getSummoners(): Promise<(Summoner)[]> {
    const storageValue = storageService.get<Summoner[]>('summoners');
    const localData = storageValue?.value;

    if (!localData || storageValue.ttl < Date.now()) {
        const data = await Promise.all(
            PLAYER_LIST.map(async (player) => {
                const incomingData: Summoner[] = await fetchService(`/lol/league/v4/entries/by-puuid/${player.puuid}`);
                const soloQueueData = incomingData.find(d => d.queueType === "RANKED_SOLO_5x5");

                // return empty summoner is API returns nothing
                if (!soloQueueData) return { ...emptySummoner, ...player } as Summoner;

                const { tier, rank, leaguePoints, wins, losses } = soloQueueData;

                const divNumber = Division[tier as keyof typeof Division];
                const rankNumber = Rank[rank as keyof typeof Rank];

                let totalLP = 0;

                if (divNumber >= 7) {
                    totalLP = (7 * 400) + (0 * 100) + leaguePoints;
                } else {
                    totalLP = (divNumber * 400) + (rankNumber * 100) + leaguePoints;
                }

                const adjustedLP = Math.round(totalLP * player.coefficient);
                const winRate = (wins / (wins + losses) * 100);

                return {
                    ...soloQueueData,
                    winRate,
                    totalLP,
                    adjustedLP,
                    ...player
                } as Summoner;
            })
        );
        const sortedData = sort(data, 'adjustedLP', 'desc');
        for (let i = 0; i < sortedData.length; i++) {
            sortedData[i].position = i + 1;
        }

        storageService.set<(Summoner)[]>('summoners', sortedData, (2 * 60 * 1000));
        return sortedData;
    }
    return localData;
}