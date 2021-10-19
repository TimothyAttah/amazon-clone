export const initialState = {
  basket: [],
  user: [ {
    email: 'test@gmail.com',
    password: '23456'
  }]
};


export const getBasketTotal = ( basket ) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = ( state, action ) => {
  console.log(action);
  switch ( action.type ) {
    case "SIGN_IN":
      return {
        ...state,
        user: [...state.user, action.item]
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "SIGN_OUT":
      return {
        ...state,
        user: action.user
      }
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [ ...state.basket, action.item ]
      }
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      )
      let newBasket = [ ...state.basket ];
      if ( index >= 0 ) {
        newBasket.splice( index, 1 );
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as its not in basket!)`
        )
      }
      return {
        ...state,
        basket: newBasket
      }
    default:
      return state
  }
};

export default reducer;
