import MiniSeriesDTO from "./MiniSeriesDTO"

interface LeagueEntryDTO {
    leagueId : string,
    summonerId : string,
    summonerName : string,
    queueType : string,
    tier : string,
    rank : string,
    leaguePoints : number,
    wins : number,
    losses : number,
    hotStreak : boolean,
    veteran : boolean,
    freshBlood : boolean,
    inactive : boolean,
    miniSeries : MiniSeriesDTO
};

export default LeagueEntryDTO