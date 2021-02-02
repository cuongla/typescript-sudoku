import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { Action, Dispatch } from 'redux'

// reducer
import { createGrid } from 'reducers';

// styles
import { Button } from '../styles/Button.styles';

const NewGame: FC = () => {
    const dispatch = useDispatch<Dispatch<Action>>()

    // create new grids if use wants to start a new game
    const createNewGrid = useCallback(() => {
        if (window.confirm('Are you sure you want to start a new game?'))
            dispatch(createGrid());
    }, [dispatch]);

    return <Button onClick={createNewGrid}>New Game</Button>
}

export default NewGame;
