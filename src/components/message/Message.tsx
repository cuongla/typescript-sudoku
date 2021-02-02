import React, { FC } from 'react';
import { useSelector } from 'react-redux'
import { IReducer } from 'reducers'

interface IState {
    warningMessage?: string
}

const Message: FC = () => {
    const state = useSelector<IReducer, IState>(({ message }) => ({ warningMessage: message }));

    return (
        <React.Fragment>
            <h4 style={{ textAlign: 'center', margin: '1rem 0', color: 'red', textDecoration: 'underline' }}>{state.warningMessage}</h4>
        </React.Fragment>
    )
}

export default Message
