import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';
import Form from './components/form-create-user';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Form open={true} />
      </div>
    </ThemeProvider>
  );
}

export default App;
