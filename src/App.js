import Main from "./MainPage/Main";
import MainAbout from "./MainPage/MainAbout";
import MainPortfolio from "./MainPage/MainPortfolio";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Appheader = styled.div`
  display: block;
  margin: 2px;
  text-align: center;
  border: 2px solid black;
`;
const Header1 = styled.h1`
  font-size: 60px;
  text-align: center;
  font-family: Sacramento, Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <Appheader>
        <Header1>Sarah_licious_eats🧁</Header1>
      </Appheader>

      <Router>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio Page</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/about">
            <MainAbout />
          </Route>

          <Route path="/portfolio">
            <MainPortfolio />
          </Route>
        </Switch>
      </Router>

      {/*Main Instagram Feed*/}
      {/*MainAbout (bio on Sarah)*/}
      {/*MainPortfolio (portfolio work)*/}
    </div>
  );
}

// To Do List
//-Add React Router DOM/React Router (Complete)
//-Add page components to App.js root component (Complete)
//-import styled components dependencies (Complete)

//header
//div
//nav
//link - about me
//link portfolio projects
//link - instagram food api
//link - coaching lessons
//nav
//div

//main (use React router to different pages)
//about me page
//portfolio project page
//instagram api page (default MainPage)
//coaching lessons page
//main

//footer
//div
//top of page
//contact info
//possible contact form
//div

export default App;
