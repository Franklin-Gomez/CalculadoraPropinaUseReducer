
// actions
export type OrderActions = 
    { type : "addtoCart" , payload : { items : Items} } |
    { type : "removeItem" , payload : { items : Items }} |
    { type : "saveOrder"} |
    { type : "add-tip" , payload : { value : number }}

// types
type stateOrderTypes = { 
    order : OrderItem[],
    tip : number

}

// states
export const  initialState : stateOrderTypes  = { 
    order : [],
    tip : 0
}

// reducer + dispatch
export const orderReducer = (

    state: stateOrderTypes = initialState,
    action: OrderActions

) =>  {
    
    if( action.type == 'addtoCart') { 

        const findItem = state.order.find( ( item ) =>  item.id === action.payload.items.id)

        let updateQuantity  : OrderItem[] = []

        if( findItem){
            // sirve pero modificas el state directamente
            //order[findItem].quantity = order[findItem].quantity + 1 

            updateQuantity = state.order.map( ( itemsOrder ) => (  itemsOrder.id == action.payload.items.id ? { ...itemsOrder , quantity : itemsOrder.quantity + 1  } : itemsOrder))

        } else { 

            // primera vez que se agrega
            const newItem : OrderItem = { ...action.payload.items , quantity : 1 }
            updateQuantity = [...state.order, newItem ] 

        }

        return {
            ...state,
            order : updateQuantity
        }

    }

    if( action.type == 'removeItem') {

        return {
            ...state
        }

    }

    if( action.type == 'saveOrder'){

        return {
            ...state
        }

    }

    if(action.type == 'add-tip') {

        return {
            ...state
        }
    }

    return state
}