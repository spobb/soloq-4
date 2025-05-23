import { fetchService } from "./fetch.service"
import { type Summoner } from "types/summoner.type"
import { Division } from "enums/division.enum";
import { Rank } from "enums/rank.enum";

import { PLAYER_LIST } from "data/player.data";
import storageService from "services/storage.service";

export async function getSummoners(): Promise<(Summoner | null)[]> {
    const storageValue = storageService.get<Summoner[]>('summoners');
    const localData = storageValue?.value;

    if (!localData || storageValue.ttl < Date.now()) {
        const data = await Promise.all(
            PLAYER_LIST.map(async (player) => {
                const incomingData: Summoner[] = await fetchService(`/lol/league/v4/entries/by-puuid/${player.puuid}`);
                const soloQueueData = incomingData.find(d => d.queueType === "RANKED_SOLO_5x5");

                if (!soloQueueData) return null;

                const { tier, rank, leaguePoints } = soloQueueData;

                const divNumber = Division[tier as keyof typeof Division];
                const rankNumber = Rank[rank as keyof typeof Rank];

                let totalLP = 0;

                if (divNumber >= 7) {
                    totalLP = (7 * 400) + (0 * 100) + leaguePoints;
                } else {
                    totalLP = (divNumber * 400) + (rankNumber * 100) + leaguePoints;
                }

                return { ...soloQueueData, totalLP: totalLP, ...player } as Summoner;
            })
        );
        storageService.set<(Summoner | null)[]>('summoners', data, (2 * 60 * 1000));
        return data;
    }
    return localData;
}