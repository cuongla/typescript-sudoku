import React from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import GlobalStyles from 'styles/Global.styles';
import Theme from 'styles/Theme.styles';
import { Title } from 'components/styles/Title.styles';
import { Content } from 'components/styles/Content.styles';
import { Card } from 'components/styles/Card.styles';

// components
import Grid from 'components/grid/Grid';
import Numbers from 'components/numbers';
import NewGame from 'components/new-game/NewGame';
import Message from 'components/message/Message';



const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Content data-cy="content">
                <Title data-cy="title">Sudoku Game</Title>
                <small style={{ color: 'red', textAlign: 'center' }}>*Use keys 1-9 on keyboards or</small>
                <small style={{ color: 'red', textAlign: 'center', marginTop: '5px' }}>buttons below to input number inside the block.</small>
                <br />
                <br />
                <Card data-cy="card">
                    <NewGame />
                    <Message />
                    <Grid />
                    <Numbers />
                </Card>
            </Content>
        </ThemeProvider>
    )
}

export default App
