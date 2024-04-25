import Factura from "./Components/Factura"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import { menuItems }  from "./db/db"
import useOrder from "./Hooks/useOrder"
import Propinaform from "./Components/Propinaform"
import Totales from "./Components/Totales"

function App() {



  const { order , tip , setTip,   addtoCart , setOrder } = useOrder()

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
            setTip={setTip}
          />

          <Totales 
            tip={tip}
            order={order}
          
          />
          
        </div>


      </div>

    </>

  )
}

export default App
