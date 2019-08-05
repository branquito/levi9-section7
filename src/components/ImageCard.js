import React from 'react'
class ImageCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.image.image} alt='some description' />
      </div>
    )
  }
}

export default ImageCard
