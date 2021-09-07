import GithubCorner from "react-github-corner";
import GridLayout from "./components/GridLayout";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GridLayout>
        <Header />
        <Main />
        <Footer />
      </GridLayout>
      <GithubCorner
        href="https://github.com/carlossroliveira"
        target="_blank"
        bannerColor="#0a0a0a"
        octoColor="#fff"
        size={80}
        direction="right"
      />
    </>
  );
}

export default App;
