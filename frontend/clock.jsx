import React from 'react';

export default class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval( this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {

    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    // console.log(minutes);
    if ( seconds < 10) {
      seconds = "0"+ seconds;
    }
    if ( minutes < 10) {
      minutes = "0"+ minutes;
    }
    if ( hours < 10) {
      hours = "0"+ hours;
    }

    return (
      <nav className="clock">
      <span className="time"><h2> {hours}:{minutes}:{seconds} </h2> </span>
      </nav>
    );
  }

}
