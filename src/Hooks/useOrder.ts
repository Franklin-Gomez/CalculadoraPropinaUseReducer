import { useState } from "react";

export default function useOrder() {

    const [ order , setOrder ] = useState<OrderItem[]>([])
  
    function addtoCart ( items : Items ) { 
        //console.log( 'desde agregar carrito ' , items);

        const findItem = order.findIndex( ( item ) =>  item.id == items.id )

        if( findItem >=  0 ){
            // sirve pero modificas el state directamente
            //order[findItem].quantity = order[findItem].quantity + 1 

            const updateQuantity = order.map( ( itemsOrder ) => (  itemsOrder.id == items.id ? { ...itemsOrder , quantity : itemsOrder.quantity + 1  } : itemsOrder))

            setOrder( updateQuantity )

        } else { 

            // primera vez que se agrega
            const newItem = { ...items , quantity : 1 }
            setOrder( [...order, newItem ])

        }
        
    }

    
  
    return {
        order,
        setOrder,
        addtoCart,
       

    }
  
}
