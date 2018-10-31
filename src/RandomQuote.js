import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios"

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {},
      local: [],
      saveButton: false,
      saveButtonText: 'Save to Local'
    }
    this.getNewQuote = this.getNewQuote.bind(this)
    this.newQuote = this.newQuote.bind(this)
    this.saveToLocal = this.saveToLocal.bind(this)
  }

  getNewQuote() {
    axios.get('https://talaikis.com/api/quotes/random/').then((response) => {
      this.setState({
        quotes: response.data
      });
    });
    console.log(this.state.quotes)
  }

  componentDidMount() {
    this.getNewQuote();
  }

  newQuote() {
    this.setState({
      saveButton: false,
      saveButtonText: 'save To Local'
    })
    this.getNewQuote()
  }

  saveToLocal() {
    this.setState(prevState => {
      prevState.local.push(prevState.quotes)
      localStorage.setItem('quote', JSON.stringify(prevState.local))
    })
    this.setState({
      saveButton: true,
      saveButtonText: 'saved'
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="alert alert-danger" role="alert">{this.state.quotes.quote}</h2>
          <h3 className="alert alert-secondary" role="alert">~{this.state.quotes.author}</h3>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="First group">
        <button onClick={this.newQuote} className="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg><span>New quote</span></button>
        <button onClick={this.saveToLocal} disabled={this.state.saveButton} className="btn btn-primary">{this.state.saveButtonText}</button>
        </div>
      </div>
    )
  }
}

export default RandomQuote;