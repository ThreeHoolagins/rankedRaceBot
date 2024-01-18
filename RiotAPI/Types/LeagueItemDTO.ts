import MiniSeriesDTO from "./MiniSeriesDTO"

interface LeagueItemDTO {
    freshBlood : boolean,
    wins : number,
    summonerName : string,
    miniSeries : MiniSeriesDTO,
    inactive : boolean,
    veteran : boolean,
    hotStreak : boolean,
    rank : string,
    leaguePoints : number,
    losses : number,
    summonerId : string
}

export default LeagueItemDTO;