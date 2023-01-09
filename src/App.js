import { Hello } from "./Hello";
import React from "react";
import { Counter } from "./Counter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Counter
          initialValue={0}
          incrementAmount={2}
          incrementInterval={1000}
        />
        <ClickTracker />
        <InteractiveWelcome />
        <Login login="test" />
      </div>
    );
  }
}
