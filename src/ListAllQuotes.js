import React from "react";

class ListAllQuotes extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      textareavalue:'',
      textValue:'',
      local:JSON.parse(localStorage.getItem('quote'))
    }
  }

  render(){
      return (
          <div>
          {this.state.local.map((quote,index) => {
            return <SingleQuote EachQuote={quote} value={index} key={index} />
          })}
          </div> 
          
      )
  }
}

class SingleQuote extends React.Component {
constructor(props) {
  super(props); 
  this.state = {
      quotes:this.props.EachQuote.quote,
      author:this.props.EachQuote.author,
      local:JSON.parse(localStorage.getItem('quote')),
      editMode:false,
      textareavalue : '',
      textValue: ''
  }
  this.removeQuote = this.removeQuote.bind(this)
  this.editQuote = this.editQuote.bind(this)
  this.displayQuote = this.displayQuote.bind(this)
  this.editForm = this.editForm.bind(this)
  this.updateQuote = this.updateQuote.bind(this)
  this.updateTextArea = this.updateTextArea.bind(this)
  this.updateAuthorName = this.updateAuthorName.bind(this)
  this.cancelUpdate = this.cancelUpdate.bind(this)
}

cancelUpdate() {
  this.setState({
    editMode:false
  })
}

updateQuote(e) {
  let data = {
    quote:(this.state.textareavalue.length>0 ? this.state.textareavalue : this.state.quotes),
    author:(this.state.textValue.length>0 ? this.state.textValue : this.state.author)
  }
  let localData = JSON.parse(localStorage.getItem('quote'))
  localData[e.target.value] = data
  localStorage.setItem('quote',JSON.stringify(localData))
  this.setState({
    editMode:false,
    quotes:data.quote,
    author:data.author
  })
}

updateTextArea(e) {
  this.setState({
    textareavalue:e.target.value
  })
}

updateAuthorName(e) {
  this.setState({
    textValue:e.target.value
  })
}

editForm() {
  return (
    <div className="from-control">
    <label >Quote</label><br/>
     <textarea onChange={this.updateTextArea} name="text" className="form-group ">{this.state.quotes}</textarea><br/><br/>
     <label>Author</label><br/> 
     <textarea onChange={this.updateAuthorName} className="form-group">{this.state.author}</textarea><br/><br/>
     <button onClick={this.updateQuote} value = {this.props.value} className="btn btn-dark">Update</button>
     <button onClick={this.cancelUpdate} value = {this.props.value} className="btn btn-link">Cancel</button>
    </div>
  )
}

displayQuote() {
  return (
    <div className="mt-4">
        <h2 className="alert alert-danger" role="alert">{this.state.quotes}</h2>
        <h4 className="alert alert-secondary" role="alert">~{this.state.author}</h4>
        <button onClick={this.editQuote} value={this.props.value} class="btn btn-info">Edit</button>
        <button onClick={this.removeQuote}  value={this.props.value} class="btn btn-danger">Remove</button>
    </div>
  )
}

editQuote(e) {
  this.setState({
    editMode : true
  })
}

removeQuote(e) {
    // this.state.local.forEach((values,index) => {
      // if(e.target.value==index) {
        let targetValue = e.target.value
        this.state.local.splice(targetValue,1)
        console.log(this.state.local)
        this.setState( prevState => {
          localStorage.setItem('quote', JSON.stringify(prevState.local))
        })
        e.target.parentNode.remove()
      // }
    // })
  }

render(){
return (
  (this.state.editMode ? this.editForm() : this.displayQuote())
)
}
}

export default ListAllQuotes;