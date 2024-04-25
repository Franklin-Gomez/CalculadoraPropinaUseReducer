
type  FacturaPros = {
  order : OrderItem[]
  removeItem : (items: Items) =>  void
}

export default function Factura( { order , removeItem} : FacturaPros) {
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

            <button onClick={() => removeItem( items ) } className=" font-bold cursor-pointer h-8 w-8 rounded-full bg-red-500 text-white">
              X
            </button>

          </div>

        </div>
        
      )}
      
    </div>
  )
}
