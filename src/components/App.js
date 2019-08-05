import React from 'react'

import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await axios.get('http://localhost:3001/cars', {
      params: { q: term },
    })
    this.setState({
      images: response.data,
    })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    )
  }
}

export default App
