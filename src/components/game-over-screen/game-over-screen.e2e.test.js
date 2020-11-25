import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {GameOverScreen} from "./game-over-screen";

configure({adapter: new Adapter()});

it(`Should replay button be pressed`, () => {
  const handleReplayButtonClick = jest.fn();
  const handleResetGame = jest.fn();

  const wrapper = shallow(
      <GameOverScreen
        onReplayButtonClick={handleReplayButtonClick}
        resetGameAction={handleResetGame}
      />
  );

  const replayButton = wrapper.find(`button.replay`);
  replayButton.simulate(`click`);
  expect(handleReplayButtonClick).toHaveBeenCalledTimes(1);
  expect(handleResetGame).toHaveBeenCalledTimes(1);
});
