import React, { FC } from 'react';

// redux
import { AnyAction, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { IReducer } from 'reducers';
import { selectBlock } from '../../../reducers'

// types
import { INDEX, N } from 'typings';

// styles
import { Container } from './Block.styles';

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  isPuzzle: boolean
  value: N
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, selectedBlock, workingGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  )

  // clicking 
  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      puzzle={state.isPuzzle}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block;
