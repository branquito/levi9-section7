import React from 'react'

import carsApi from '../api/cars'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async term => {
    const response = await carsApi.get('/cars', {
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
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }
}

export default App
