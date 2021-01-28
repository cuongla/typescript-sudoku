import React from 'react';
import { ThemeProvider } from 'styled-components';

// styles
import { GlobalStyles, theme } from './styles';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <h1>App</h1>
        </ThemeProvider>
    )
}

export default App
