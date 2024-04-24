
type MenuProps = { 
    menuItems : Items[]
    addtoCart : ( items : Items ) =>  void
}

export default function Menu( { menuItems , addtoCart } : MenuProps  ) {
  return (
    <>
        <h1 className="text-center uppercase font-bold text-2xl mb-5"> factura </h1>
        
        { menuItems.map( ( item  ) => ( 
            <button key={item.id} className="flex justify-between p-3 mb-1 border-2 border-solid border-teal-400 hover:bg-teal-300 cursor-pointer w-full" onClick={() => addtoCart(item)}>

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
