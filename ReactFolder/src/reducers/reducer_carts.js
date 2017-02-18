export default function (state = [], action){
  switch (action.type) {
    case "ADD_PRODUCT":
      return [action.payload.product, ...state,]
    case 'DELETE_PRODUCT':
      let index = state.indexOf(action.payload.product)
      state.splice(index, 1)
      return state
    }
    return state
  }
