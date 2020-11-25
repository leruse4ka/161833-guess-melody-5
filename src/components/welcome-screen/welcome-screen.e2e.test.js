import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WelcomeScreen from "./welcome-screen";

configure({adapter: new Adapter()});

it(`Should play button be pressed`, () => {
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(
      <WelcomeScreen
        onPlayButtonClick={handlePlayButtonClick}
        errorsCount={3}
      />
  );

  const replayButton = wrapper.find(`button.welcome__button`);
  replayButton.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
