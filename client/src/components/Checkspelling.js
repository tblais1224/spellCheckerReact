import React, { Component } from 'react';

class SpellCheck extends Component {
    render(){
        return(
            <div className="container">
            <h3 className="center">Check Your Spelling</h3>
            <textarea rows="15" cols="80" id="user-input" placeholder="Input anything you want to spellcheck!"/>
            <button type="submit">Submit</button>
            <p>This Will Be the spell checked results</p>
            </div>
        )
    }
}

export default SpellCheck