import React from "react";
import renderer from "react-test-renderer";
import {GameOverScreen} from "./game-over-screen";

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer.create(<GameOverScreen
    onReplayButtonClick={() => {}}
    resetGameAction={() => {}}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});