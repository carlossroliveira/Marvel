import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubCorner from 'react-github-corner';

import { ThemeProvider } from 'styled-components';
import { themeLight, themeDark } from './stylus/Themes';

import GlobalStyle from './style/GlobalStyle';
import GridLayout from './components/GridLayout';

import Header from './components/Header';
import Footer from './components/Footer';

import Charracters from './components/Charracters';
import Comics from './components/Comics';
import Page404 from './components/Page404';
import Button from './components/Button';
import Switcher from './components/Switcher';

function App() {
  const [themes, setThemes] = useState();
  const handleThemes = () => setThemes((theme) => !theme);

  return (
    <>
      <ThemeProvider theme={themes ? themeLight : themeDark}>
        <GlobalStyle />
        <GridLayout>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Charracters />
              </Route>
              <Route path="/Comics">
                <Comics />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </GridLayout>
      </ThemeProvider>

      <Button onClick={handleThemes}>
        <Switcher themess={themes} />
      </Button>

      <GithubCorner
        href="https://github.com/carlossroliveira"
        target="_blank"
        bannerColor="#212121"
        octoColor="#eee"
        size={80}
        direction="left"
      />
    </>
  );
}

export default App;
