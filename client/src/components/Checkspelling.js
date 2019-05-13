import React, { Component } from 'react';
import axios from "axios";


class SpellCheck extends Component {
    state = {
        userInput: '',
        results: [],
        addWords: []
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
                this.setState({ results: response.data.resultArr })
            })
            .catch(error => {
                throw error;
            });
    }

    handleWordClick = event => {
        if (event.target.className === "yellow") {
            event.target.className = "white"
            this.setState({ addWords: [...this.state.addWords, event.target.innerText] })
        }
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
                <br />
                <label>Results:
                <div className="resultsDiv container">
                        {this.state.results.map((word) => {
                            if (word[1] === true || this.state.addWords.includes(word[0])) {
                                return <span>{word[0]}</span>
                            } else {
                                return <span onClick={this.handleWordClick} className="yellow">{word[0]}</span>
                            }
                        })}
                    </div>
                </label><br /><br />
                <label>Your added dictionary words:
                    <div className="resultsDiv container">
                        {this.state.addWords.map((word) => { return <span>{word}<br /></span> })}
                    </div>
                </label>
            </div>
        )
    }
}

export default SpellCheck