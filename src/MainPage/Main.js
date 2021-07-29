import React from "react";
import styled from "styled-components";
import { MainDiv } from "./SharedComponents";

const Header1 = styled.h1`
  font-size: 38px;
  text-align: center;
`;

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <MainDiv>
          <Header1>Main Page</Header1>
          {/*Instagram API*/}
        </MainDiv>
      </div>
    );
  }
}
