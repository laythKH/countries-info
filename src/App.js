import React, { Component } from 'react';
import './App.css';

import Header from './component/Header/header.component.jsx';
import CardHolder from './component/body/cardHolder/cardHolder.component';
import { SearchBox } from './component/body/search-box/search-box.component';


class App extends Component {
  constructor() {
    super()

    this.state = {
      mainTitle: 'COUNTRIES',
      countries: [],
      searchField: ''
    }
  }


  componentDidMount() {
    let id = 0;
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => data.map(function (item) {
        id = id + 1;
        let name = item.name.official;
        let img = item.flags.png;
        let capital = item.capital;  //it's an array
        let lang = item.languages;
        let subregion = item.subregion;
        let tld = item.tld;
        let population = item.population;
        let region = item.region;
        let borders = item.borders;
        let currencies;
        for (let info in item.currencies) {
          currencies = item.currencies[info].name
        }
        return { id, name, img, capital, lang, subregion, tld, population, region, borders, currencies };
      }
      )).then(data => this.setState({ countries: data }, () => console.log(this.state.countries)));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() {
    const { countries, searchField } = this.state;
    const filterCountries = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className='mainHolder'>
        <Header title={this.state.mainTitle} />
        <SearchBox placeholder='Input Name' handleChange={this.handleChange} />
        <CardHolder info={filterCountries} />
      </div>
    )
  }
}

export default App;
