import React, { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerIDs: [] // ✅ matches what test expects
    };
    this.handleAddTimer = this.handleAddTimer.bind(this);
    this.handleRemoveTimer = this.handleRemoveTimer.bind(this);
  }

  handleAddTimer() {
    const newID = Math.floor(Math.random() * 10000);
    this.setState((prevState) => ({
      timerIDs: [...prevState.timerIDs, newID]
    }));
  }

  handleRemoveTimer(id) {
    this.setState((prevState) => ({
      timerIDs: prevState.timerIDs.filter((timerID) => timerID !== id)
    }));
  }

  // ✅ Add lifecycle method on the prototype (not an arrow function)
  componentDidMount() {
    this.handleAddTimer();
  }

  render() {
    return (
      <div>
        <h1>Timers</h1>
        <button onClick={this.handleAddTimer}>Add Timer</button>
        {/* ✅ Test expects .TimerGrid class */}
        <div className="TimerGrid">
          {this.state.timerIDs.map((id) => (
            <Timer key={id} id={id} removeTimer={this.handleRemoveTimer} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
