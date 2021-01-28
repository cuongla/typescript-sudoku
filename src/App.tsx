import React from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import { GlobalStyles, theme } from 'styles';

// components
import { Card, Content, Grid, Title } from 'components'


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Content data-cy="content">
                <Title data-cy="title">Sudoku</Title>
                <Card data-cy="card">
                    <Grid />
                </Card>
            </Content>
        </ThemeProvider>
    )
}

export default App
