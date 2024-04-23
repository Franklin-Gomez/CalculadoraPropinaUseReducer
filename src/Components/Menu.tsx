
type MenuProps = { 
    menuItems : Items[]
}

export default function Menu( { menuItems } : MenuProps ) {
  return (
    <>
        <h1 className=" text-center uppercase font-bold text-2xl mb-5"> menu </h1>

        { menuItems.map( ( item  ) => ( 
            <div key={item.id} className="flex justify-between p-3 mb-1 border-2 border-solid border-teal-400 hover:bg-teal-300 cursor-pointer">

                <div>
                    <p> { item.name } </p>
                </div>

                <div>
                    <p className="font-bold"> ${ item.price} </p>

                </div>

            </div>
            
        ))}
    </>
  )
}
