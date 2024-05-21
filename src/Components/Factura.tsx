import { OrderActions } from "../Reducers/order-reducer"

type  FacturaPros = {
  order : OrderItem[]
  dispatch : React.Dispatch<OrderActions>
}

export default function Factura( { order , dispatch } : FacturaPros) {
  return (
    <div>
      <h1 className="text-center uppercase font-bold text-2xl mb-5"> factura </h1>

      { order.map( (items)  => 

        <div key={items.id} >

          <div className=" mb-5 border-b border-teal-400 flex justify-between items-center">
            
            <div>

              <h3 className=" font-bold"> { items.name } </h3>

              <div className=" flex space-x-4 "> 
                <p>Precio : <span className=" font-bold"> $ { items.price }</span> </p>
                <p>Cantidad : <span className=" font-bold"> { items.quantity }</span></p>
              </div>

            </div>

            <button onClick={() => dispatch( { type : 'removeItem' , payload : { items : items.id } } ) } className=" font-bold cursor-pointer h-8 w-8 rounded-full bg-red-500 text-white">
              X
            </button>

          </div>

        </div>
        
      )}
      
    </div>
  )
}
