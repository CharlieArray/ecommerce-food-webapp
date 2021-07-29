import React from "react";
import styled from "styled-components";
import { MainDiv } from "./SharedComponents";

const Header1 = styled.h1`
  font-size: 38px;
  text-align: center;
`;

const Header2 = styled.h2`
  font-size: 24px;
  font-family: Bebas + Neue;
  color: #222222;
  text-align: center;
`;

const Header3 = styled.h3`
  font-size: 22px;
  text-align: center;
`;

const Header4 = styled.h4`
  font-size: 18px;
  text-align: center;
`;

const Para = styled.p`
  font-size: 15px;
  font-family: Roboto;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
  line-height: 1.5;
`;

export default class MainAbout extends React.Component {
  render() {
    return (
      <>
        <MainDiv>
          <Header2>ABOUT ME</Header2>
          <Para>
            Cooking for me has always been a form of expression and love. It
            fills my soul when I get to cook for someone. A few years ago I
            decided to start my own meal prep business and it was there when I
            really understood the meaning behind quality food, and how important
            it is to a successful day. I genuinely enjoy creating healthy
            recipes for people to make in their homes and for their families.
            I’ve recently enjoyed crafting easy to make cocktails too, so much
            fun!
          </Para>
          <Header2>MY MISSION</Header2>
          <Para>
            I enjoy creating healthy recipes that don't lack in flavor. A simple
            cocktail is my main goal, too! I believe in using quality
            ingredients that offer great taste. Along with creating simple
            recipes, I also enjoy the creative space of food and cocktail
            photography.
          </Para>
        </MainDiv>
      </>
    );
  }
}
