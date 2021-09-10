import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GithubCorner from "react-github-corner";
import GridLayout from "./components/GridLayout";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Comics from "./components/Comics";
import Page404 from "./components/Page404";

import Teste02 from "./components/Teste02";

function App() {
  return (
    <>
      <GridLayout>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              {/* <Main /> */}
              <Teste02 />
              <Comics />
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
