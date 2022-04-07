import React, { Component } from 'react';
import 'tachyons';
import '../Css/search-bar.css'

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: ''
    };
  }

  submitHandler(event){
    event.preventDefault()
    this.props.handlerFromParent(this.state.input)
  }

  handleChange(textInput){
    this.setState({
      input: textInput.target.value
    });
    textInput.preventDefault()
    textInput.persist()
  }

  render(){
    return(
      <form onSubmit={this.submitHandler} className='pa3 form mt-5 mb-5'>
        <input
          className='pa3 search-input tc'
          type='text'
          id='searchBox'
          placeholder='Enter Zip Code'
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBar;
