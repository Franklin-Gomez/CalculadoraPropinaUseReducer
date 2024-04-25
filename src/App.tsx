import Factura from "./Components/Factura"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import { menuItems }  from "./db/db"
import useOrder from "./Hooks/useOrder"
import Propinaform from "./Components/Propinaform"
import Totales from "./Components/Totales"

function App() {

  const { order , tip , setTip,   addtoCart , setOrder , removeItem , saveOrder} = useOrder()

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
            removeItem={removeItem}
          /> 

          <Propinaform 
            setTip={setTip}
            tip={tip}
          />

          <Totales 
            tip={tip}
            order={order}
          
          />
          
          <button onClick={() => saveOrder()} className="w-full bg-black text-white uppercase mt-5 p-5 font-bold">
            Guardar Elecciones
          </button>
        </div>

      </div>

    </>

  )
}

export default App
