
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


}