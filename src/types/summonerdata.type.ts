export type SummonerData = {
    leagueId: string,
    summonerId: string,
    puuid: string,
    queueType: string,
    tier: string,
    rank: string,
    leaguePoints: number,
    wins: number,
    losses: number,
    hotStreak: boolean,
    veteran: boolean,
    freshBlood: boolean,
    inactive: boolean,
    miniSeries: MiniSeriesDTO,
    winRate: number,
    totalLP?: number,
    name: string
}

type MiniSeriesDTO = {
    losses: number,
    progress: string,
    target: number,
    wins: number,
}