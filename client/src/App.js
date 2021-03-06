import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import SpellCheck from "./components/Checkspelling"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/spellcheck" component={SpellCheck} />
              <Route path="/about" component={About}/>
            </Switch>
        </div>
      </BrowserRouter>
    
    );
  }
}


export default App;
