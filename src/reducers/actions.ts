import { Action, AnyAction } from 'redux'

import { IBlock_Coords } from 'typings'

import * as types from './types';

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const selectBlock = (coords: IBlock_Coords): AnyAction => ({
    coords,
    type: types.SELECT_BLOCK,
})
