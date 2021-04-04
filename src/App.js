import React from 'react';
import './App.css';
import Layout from './layout';
import RouterApp from "./navigation/router"
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#000',
      main: '#000',
      dark: '#000',
    },
    secondary: {
      main: blue[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <RouterApp />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
