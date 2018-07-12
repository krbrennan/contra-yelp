import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BusinessCard from './BusinessCard';

import './App.css';
import './card.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      zipCode: '',
      response: [],
      doneLoading: false
    }
  }

  filterResults(data){
    // Access business = array.businesses[x]
    // console.log(data.businesses)
    // console.log(data.businesses[0])

    data.businesses.filter((business) => {
      // console.log(business.rating)
      // return business.rating < 4;
      if(business.rating < 4){
        this.setState({
          response: [...this.state.response, business]
        })
      }
    });
    this.setState({doneLoading: true})
  }


  handler(data) {
    this.setState({zipCode: data})

    const zipCode = data
    const url = `https://api.yelp.com/v3/businesses/search?location=${zipCode}&radius=2000`

    fetch(url, {
      headers: {
        "Authorization": "Bearer amEZRBh5-R0uMNPdotmlE_FdSvaxE4NuyhNjdgiTjHGwVjEkBkJAHrf7H0h-hINH-vHVSikQwjJ5vHKRMRElGlAEk6BVPVNF9Z-pXCfhon0mD09i-rlwBzP2JWhGW3Yx"
      }
    })
      .then(res => res.json())
      .then((result) => {
        this.filterResults(result)
      })
  }

  render() {
    if(this.state.doneLoading === false){
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Find All the Worst-Rated Businesses Near You</h1>
            <h3>{this.state.zipCode}</h3>
          </header>
          <SearchBar handlerFromParent={this.handler} />
        </div>
      );
    } else {
      return(
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Find All the Worst-Rated Businesses Near You</h1>
            <h3>{this.state.zipCode}</h3>
          </header>
          <SearchBar handlerFromParent={this.handler} />
        <div className='businessCard'>
          <BusinessCard businesses={this.state.response}/>
        </div>
        </div>
      );
    }
  }
}

export default App;
