import React from "react";

class RandomLocal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: JSON.parse(localStorage.getItem('quote')),
      i: 0,
      quotes1: {}
    }
    this.getNewQuote = this.getNewQuote.bind(this)
    this.newQuote = this.newQuote.bind(this)
  }

  getNewQuote() {
    // let data = JSON.parse(localStorage.getItem("quote"));
    //    console.log(data);
    //  this.setState({
    //  quotes : data[Math.floor(Math.random() * data.length)]
    //  }) 
    if (this.state.i + 1 == this.state.quotes.length) {
      this.setState({
        i: 0
      })
    }
    this.setState(prevState => ({
      quotes1: prevState.quotes[this.state.i],
      i: prevState.i + 1
    }))
  }

  componentDidMount() {
    this.getNewQuote();
  }

  newQuote() {
    this.getNewQuote()
  }

  render() {
    return (
      <div>
        <h3 className="alert alert-danger" role="alert">{this.state.quotes1.quote}</h3>
        <h4 className="alert alert-secondary" role="alert">-{this.state.quotes1.author}</h4>
        <button onClick={this.newQuote} className="btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg><span>New quote</span></button>
      </div>

    )
  }
}

export default RandomLocal;