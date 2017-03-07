import React from 'react'
import iframeUrl from './iframeUrl'

// import Product from './product'

const SearchResults = (props) => {

  const iframeUrls = props.urls.map((url) => {
    return <iframeUrl url={url} />
  })

    return(

        <div>
          {iframeUrls}
        </div>
    )
  }

export default SearchResults
