import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  state = {
    data: "",
    userInput: ""
  }
  
  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then(data => data.json())
      .then(res => {
        console.log(res.data)
        this.setState({ data: res.data })
      });
  };

  setInput = event => {
    this.setState({
      userInput: event.target.value
    })

    const headers = new Headers()
    headers.append("Content-type", "application/json")

    const options ={
      method: 'POST',
      headers,
      body: JSON.stringify(event.target.value)
    }

    const request = new Request("http://localhost:3001/api/putData", options)
    fetch(request)
}

  putDataToDB = () => {
    axios.post("http://localhost:3001/api/putData", {
      userInput: this.state.userInput
    }).then(function(response){
       console.log(response);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });
  }


  render() {
    return (
      <div className="App center">
        <div className="center container">
          <h1>Spell Check!</h1>
          <textarea onChange={this.setInput}rows="15" cols="50" id="user-input"/>
          <button onClick={this.putDataToDB} className="red btn-center btn-floating btn-large scale-transition center">Submit</button>
        </div>
        <div className="center container">
          <p>{this.state.data}</p>
          <p>{this.state.data}</p>
        </div>
      </div>
    );
  }
}


export default App;
