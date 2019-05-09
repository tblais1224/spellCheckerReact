import React, { Component } from 'react';


class App extends Component {
  state = {
    header: ""
  }
  getContent = () => {
    fetch("/")
    .then(res=> res.json())
  }
  render() {
    return (
      <div className="App center">
        <button className="red btn-center btn-floating btn-large scale-transition center">Submit</button>
      </div>
    );
  }
}


export default App;
