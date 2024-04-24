
type  FacturaPros = {
  order : OrderItem[]
}

export default function Factura( { order } : FacturaPros) {
  return (
    <div>
      <h1 className="text-center uppercase font-bold text-2xl mb-5"> factura </h1>

      { order.map( (items)  => 

        <div key={items.id} >

          <div className=" mb-5 border-b border-teal-400">
            
            <h3 className=" font-bold"> { items.name } </h3>

            <div className=" flex space-x-4 "> 
              <p>Precio : <span className=" font-bold"> $ { items.price }</span> </p>
              <p>Cantidad : <span className=" font-bold"> { items.quantity }</span></p>
            </div>

          </div>

        </div>
        
      )}
      
    </div>
  )
}
