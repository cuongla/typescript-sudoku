import { IBlock_Coords, IGrid } from 'typings'

export interface IReducer {
    challengeGrid?: IGrid
    selectedBlock?: IBlock_Coords
    solvedGrid?: IGrid
    workingGrid?: IGrid
    message?: string
}

