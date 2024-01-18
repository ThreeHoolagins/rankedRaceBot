interface MetadataDTO {
    dataVersion : string,
    matchid : string,
    participants : Array<string>
}

interface ParticipantDto {
    // ... stub https://developer.riotgames.com/apis#match-v5/GET_getMatch
}

interface InfoDTO {
    gameCreation : number,
    gameDuration : number,
    gameEndTimestamp : number,
    gameId : number,
    gameMode : string,
    gameName : string,
    gameStartTimestamp : number,
    gameType : string,
    gameVersion : string,
    mapId : number,
    participants : Array<ParticipantDTO>,
    platformId : string,
    queueId : number,
    teams : Array<TeamDTO>,
    tournamentCode : string,
}

interface MatchDTO {
    metadata : MetadataDTO,
    info : InfoDTO
}