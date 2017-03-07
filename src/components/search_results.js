import React from 'react'

const SearchResults = (props) => {

  const iframeUrls = props.urls.map((url) => {
    return <iframe src={url} />
  })
    return(
        <div>
          {iframeUrls}
        </div>
    )
  }

export default SearchResults
