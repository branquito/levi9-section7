import React from 'react'

const ImageList = props => {
  const images = props.images.map(({ image, id }) => {
    return <img src={image} alt='' key={id} />
  })
  return <div>{images}</div>
}

export default ImageList
