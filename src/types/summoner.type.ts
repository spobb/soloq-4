export type Summoner = {
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
    // CUSTOM KEYS
    winRate: number,
    totalLP: number,
    adjustedLP: number,
    name: string,
    coefficient: number,
    tagLine?: string,
    position: number
}

type MiniSeriesDTO = {
    losses: number,
    progress: string,
    target: number,
    wins: number,
}