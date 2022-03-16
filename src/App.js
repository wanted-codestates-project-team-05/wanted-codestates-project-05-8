import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import List from './pages/List';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <List />
    </ThemeProvider>
  );
}

export default App;
