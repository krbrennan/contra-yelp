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
    console.log(data)
    // console.log(typeof data)
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

  async handler(data) {
    this.setState({zipCode: data})
    const proxy = `https://lit-hamlet-77934.herokuapp.com/`
    const zipCode = data
    const url = `https://api.yelp.com/v3/businesses/search?location=${zipCode}&radius=4000`
    const proxyAndUrl = proxy + url
    // const response = await fetch(proxy + url)
    // const json = await response.json()
    // this.filterResults(json)

    fetch(proxyAndUrl, {
      headers: {
        'Authorization': 'Bearer g5PK0Bi3oydQ4umv1sjFrGO8O5u17OEIf_wnCQxXjULRxJ2KbA1KHehyU5g9DzjutX2TaWp4Hpdo-hDdX9HkECh_nBgMvynakUZdO1iTJlZ_cm-nRYond3rzHaI-YHYx',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization'
      }
    })
      .then(res => res.json())
      .then((result) => {
        this.filterResults(result)
      })
  }

  render() {
    // need to handle first-visit. if they haven't searched anything,
    // display a landing page like yelp does
    if(this.state.doneLoading === false){
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Find All the Lowest-Rated Businesses Near You</h1>
          </header>
          <SearchBar handlerFromParent={this.handler} />
        </div>
      );
    } else {
      return(
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Find All the Lowest-Rated Businesses Near You</h1>
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
