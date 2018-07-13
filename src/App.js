import React, { Component } from 'react';
import SearchBar from './SearchBar';
// import BusinessCard from './BusinessCard';
import CardList from './CardList';

import './App.css';
import './card.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)

    this.state = {
      zipCode: '',
      response: [],
      doneLoading: false,
      newSearch: false
    }
  }

  filterResults(data){
    // console.log(data.error.code === "LOCATION_NOT_FOUND")
    console.log(typeof data)
    if(data.businesses === undefined){
      alert('Invalid Address or Zip Code!')
      throw('Invalid Zip Code')
    } else {
      // this will filter all businesses that have < 4 stars
      // the array is then reverse-sorted so lowest rated businesses show up first
      // then state is set
      let filtered = data.businesses.filter((business) =>{
        if(business.rating < 4){
          return business
        }
      })
      let reversed = filtered.sort((a,b)=> a.rating - b.rating)
      this.setState({response: reversed})
      this.setState({doneLoading: true})
    }
  }

  handler(data) {
    this.setState({zipCode: data})

    const zipCode = data
    const url = `https://api.yelp.com/v3/businesses/search?location=${zipCode}&radius=4000`

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
          <CardList businesses={this.state.response} />
        </div>
      </div>
      );
    }
  }
}

export default App;
