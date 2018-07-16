import React, { Component } from 'react';
import 'tachyons';

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
      <form onSubmit={this.submitHandler} className='pa3'>
        <input
          className='pa3 bg-light-green tc'
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
