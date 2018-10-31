import React from "react";

class AddQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textareavalue: '',
      textValue: ''
    }
    this.textHandle = this.textHandle.bind(this)
    this.textareaHnadle = this.textareaHnadle.bind(this)
    this.saveQuote = this.saveQuote.bind(this)
  }

  textareaHnadle(e) {
    e.persist()
    this.setState({
      textareavalue: e.target.value
    })
    console.log(this.state.textareavalue)
  }

  textHandle(e) {
    e.persist()
    this.setState({
      textValue: e.target.value
    })
  }

  saveQuote() {
    let data = { 'author': this.state.textValue, 'quote': this.state.textareavalue }

    let local = JSON.parse(localStorage.getItem('quote'))
    local.push(data)
    localStorage.setItem('quote', JSON.stringify(local))
  }
  render() {
    return (
      <div className="form-group " >
        <div className="border border-secondary col-md-5" >
          <label >Quote</label>
          <textarea onChange={this.textareaHnadle} className="form-control col-md-6"></textarea>
          <label>Author</label>
          <input type="text" name="textField" onChange={this.textHandle} className="form-control col-md-4 col-mb-4" />
          <div className="mt-4">
            <button onClick={this.saveQuote} className="btn btn-primary mb-4">Save</button>
          </div>
        </div>
      </div>

    )
  }
}

export default AddQuote;