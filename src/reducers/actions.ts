import { Action, AnyAction } from 'redux';

// types
import { IBlock_Coords, NUMBERS } from 'typings';
import * as types from './types';

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const selectBlock = (coords: IBlock_Coords): AnyAction => ({
    coords,
    type: types.SELECT_BLOCK,
})

export const fillBlock = (value: NUMBERS, coords: IBlock_Coords): AnyAction => ({
    coords,
    type: types.FILL_BLOCK,
    value,
})