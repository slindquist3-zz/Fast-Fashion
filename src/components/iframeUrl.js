import React from 'react'

const iframeUrl = (props) => {
  const url = props.url

  return <iframe src={url} />
}

export default iframeUrl
