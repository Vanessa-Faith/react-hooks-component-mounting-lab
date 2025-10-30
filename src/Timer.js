import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.clockTick = this.clockTick.bind(this);
  }

  clockTick() {
    this.setState((prevState) => ({
      time: prevState.time + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { id, removeTimer } = this.props;
    const { time } = this.state;
    return (
      <div className="Timer">
        <h2>Timer ID: {id}</h2>
        <p>Time: {time}s</p>
        <button onClick={() => removeTimer(id)}>Remove</button>
      </div>
    );
  }
}

export default Timer;
