import GlobalStyle from "./style/global";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubCorner from "react-github-corner";
import GridLayout from "./components/GridLayout";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Charracters from "./components/Charracters";
import Comics from "./components/Comics";
import Page404 from "./components/Page404";

function App() {
  return (
    <>
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
            <Route path="*">{<Page404 />}</Route>
          </Switch>
          <Footer />
        </Router>
      </GridLayout>

      <GithubCorner
        href="https://github.com/carlossroliveira"
        target="_blank"
        bannerColor="#212121"
        octoColor="#fff"
        size={80}
        direction="right"
      />
    </>
  );
}

export default App;
