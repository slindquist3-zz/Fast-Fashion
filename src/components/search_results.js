import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Product from './product'

export default class SearchResults extends Component {

  constructor(props) {
    super(props)

    this.state = {search: this.props.search}

  }

  render() {

    return(
        <div>
          <iframe src="http://shop.nordstrom.com/sr?contextualcategoryid=2375500&origin=keywordsearch&keyword=shoes"></iframe>
          <iframe src="http://us.topman.com/webapp/wcs/stores/servlet/CatalogNavigationSearchResultCmd?langId=-1&storeId=13051&catalogId=33059&Dy=1&Nty=1&beginIndex=1&pageNum=1&Ntt=shoes&x=0&y=0&dimSelected=%2FN-7ye%3FNo%3D0%26Nrpp%3D20%26Ntt%3Dshoes%26seo%3Dfalse%26siteId%3D%252F13051%26langId%3D-1%26storeId%3D13051%26catalogId%3D33059%26Dy%3D1%26Nty%3D1%26beginIndex%3D1%26pageNum%3D1%26x%3D0%26y%3D0%26dimSelected%3D%252FN-7ye%253FNo%253D0%2526Nrpp%253D20%2526Ntt%253Dpants%2526seo%253Dfalse%2526siteId%253D%25252F13051%2526langId%253D-1%2526storeId%253D13051%2526catalogId%253D33059%2526Dy%253D1%2526Nty%253D1%2526beginIndex%253D1%2526pageNum%253D1%2526x%253D0%2526y%253D0"></iframe>
          <iframe src="http://www.hm.com/us/products/search?q=shoes"></iframe>
        </div>
    )
  }
}
