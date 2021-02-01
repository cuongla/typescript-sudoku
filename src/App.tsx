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



const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Content data-cy="content">
                <Title data-cy="title">Sudoku Game</Title>
                <small style={{ color: 'red', textAlign: 'center' }}>*Please use keys 1-9 to input number inside the block</small>
                <br />
                <br />
                <Card data-cy="card">
                    <Grid />
                    <Numbers />
                </Card>
            </Content>
        </ThemeProvider>
    )
}

export default App
