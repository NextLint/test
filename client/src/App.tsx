import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme/theme';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContentListContainer from './components/content-list';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ContentListContainer />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
