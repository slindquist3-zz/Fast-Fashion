
export const RENDER_IFRAMES = 'RENDER_IFRAMES'

export function renderIframes(search) {
  if (search.includes(" ")) {
    var query = search.split(" ").join("+")
  } else {
    var query = search;
  }
  var url = `http://www.hm.com/us/products/search?q=${query}`;

  return {type: RENDER_IFRAMES, payload: url};

}
