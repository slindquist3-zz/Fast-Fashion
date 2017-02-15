export default function (state = [], action){
  switch (action.type) {
    case "ADD_PRODUCT":
    debugger
      return [action.payload.product, ...state,]
    }
    return state
  }
