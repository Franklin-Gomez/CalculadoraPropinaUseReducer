import { OrderActions } from "../Reducers/order-reducer"

type MenuProps = { 
    menuItems : Items[],
    dispatch : React.Dispatch<OrderActions>
}

export default function Menu( { menuItems , dispatch } : MenuProps  ) {
  return (
    <>
        <h1 className="text-center uppercase font-bold text-2xl mb-5"> factura </h1>
        
        { menuItems.map( ( item  ) => ( 
            <button key={item.id} className="flex justify-between p-3 mb-1 border-2 border-solid border-teal-400 hover:bg-teal-300 cursor-pointer w-full" onClick={() => dispatch({ type : 'addtoCart' , payload  : { items : item } })}>

                <div>
                    <p> { item.name } </p>
                </div>

                <div>
                    <p className="font-bold"> ${ item.price} </p>
                </div>

            </button>
            
        ))} 
    </>
  )
}
