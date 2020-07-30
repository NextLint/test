import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';
import UserCard from './components/card-default';
import ButtonAdd from './components/button-default';

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
