import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';
import ButtonAdd from './components/button-default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ButtonAdd />
      </div>
    </ThemeProvider>
  );
}

export default App;
