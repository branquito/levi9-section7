import React from 'react'
class ImageCard extends React.Component {
  render() {
    const { image } = this.props.image
    return (
      <div>
        <img src={image} alt='some description' />
      </div>
    )
  }
}

export default ImageCard
