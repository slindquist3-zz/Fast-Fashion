export default function (state = [], action){

  switch (action.type) {
    case "ADD_PRODUCT":
      return [action.payload.product, ...state,]
    case 'DELETE_PRODUCT':
    debugger
      return [...action.payload]
    }
    return state
  }
