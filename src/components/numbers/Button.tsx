import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { Button } from 'components/styles/Button.styles';
import { fillBlock, IReducer } from 'reducers'
import { IBlock_Coords, N, NUMBERS } from 'typings'

interface IProps {
    value: NUMBERS
}

interface IState {
    selectedBlock?: IBlock_Coords
    selectedValue: N
}

const NumberButton: FC<IProps> = ({ value }) => {
    const dispatch = useDispatch<Dispatch<AnyAction>>()
    const state = useSelector<IReducer, IState>(
        ({ selectedBlock, workingGrid }) => ({
            selectedBlock,
            selectedValue:
                workingGrid && selectedBlock
                    ? workingGrid[selectedBlock[0]][selectedBlock[1]]
                    : 0,
        })
    )

    // fill the square
    const fill = useCallback(() => {
        if (state.selectedBlock && state.selectedValue === 0)
            dispatch(fillBlock(value, state.selectedBlock))
    }, [dispatch, state.selectedBlock, state.selectedValue, value])

    return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
