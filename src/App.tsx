import Factura from "./Components/Factura"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import { menuItems }  from "./db/db"
import { useState } from "react"
import useOrder from "./Hooks/useOrder"
import Propinaform from "./Components/Propinaform"

function App() {

  const [ tip , setTip ] = useState(0) ;
  const [ total , setTotal] = useState(0) ; 

  const { order , addtoCart , setOrder } = useOrder()

  return (
    <>
      <Header /> 

      <div className=" grid grid-cols-2 gap-2">

        <div className="p-10">

          <Menu
            addtoCart={addtoCart}
            menuItems={menuItems}
          />

        </div>

        <div className="border border-dashed p-10">

          <Factura
            order={order}
          /> 

          <Propinaform 
          
          />


        </div>


      </div>

    </>

  )
}

export default App
