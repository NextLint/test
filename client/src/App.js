import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';
import UserCard from './components/card-default';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserCard
          id={13}
          name={{ firstName: 'Ruslan', lastName: 'Zolotaryov' }}
          email="zolotaryov.rusik@yandex.ru"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
