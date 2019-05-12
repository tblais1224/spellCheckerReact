import React, { Component } from 'react';
import axios from "axios";


class SpellCheck extends Component {
    state = {
        userInput: '',
        results: ""
    }

    handleChange = event => {
        this.setState({ userInput: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault()
        const user = {
            userInput: this.state.userInput
        }
        const URL = `http://localhost:3000/checked`
        return axios(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: user,
        })
            .then(response => {
                this.setState({results: response.data})})
            .catch(error => {
                throw error;
            });
    }

    render() {
        return (
            <div className="container">
                <h3 className="center">Check Your Spelling</h3>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Check Spelling:
                            <textarea onChange={this.handleChange} rows="15" cols="80" id="user-input" placeholder="Input anything you want to spellcheck!" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p>{this.state.results}</p>
            </div>
        )
    }
}

export default SpellCheck