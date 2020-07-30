import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="content"></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
