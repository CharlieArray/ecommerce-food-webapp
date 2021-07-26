import styled from "styled-components";

const Appheader = styled.div`
  display: block;
  margin: 2px;
  text-align: center;
  border: 2px solid black;
`
const Header1 = styled.h1`
  font-size: 38px;
`

function App() {
  return (
    <div className="App">
      <Appheader>
        <Header1>
          Welcome to Sarah-licious-eats 
        </Header1>
      </Appheader>

      {/*Main Instagram Feed*/}
      {/*MainAbout (bio on Sarah)*/}
      {/*MainPortfolio (portfolio work)*/}
      </div>
  );
}


// To Do List
  //-Add React Router DOM/React Router
  //-Add page components to App.js root component
  //-import styled components dependencies


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
