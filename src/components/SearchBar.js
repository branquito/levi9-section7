import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <form action='' className='ui form'>
          <div className='field'>
            <label htmlFor='imageSearch'>Image Search</label>
            <input id='imageSearch' type='text' />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
