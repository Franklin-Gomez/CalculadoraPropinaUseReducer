import Factura from "./Components/Factura"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import { menuItems }  from "./db/db"
import useOrder from "./Hooks/useOrder"
import Propinaform from "./Components/Propinaform"
import Totales from "./Components/Totales"
import { initialState , orderReducer } from "./Reducers/order-reducer"
import { useReducer } from "react"

function App() {

  const { order , tip , setTip  , removeItem , saveOrder} = useOrder()

  const [ state , dispatch ] = useReducer( orderReducer , initialState )

  return (
    <>
      <Header /> 

      <div className=" grid grid-cols-2 gap-2">

        <div className="p-10">

          <Menu
            dispatch={dispatch}
            menuItems={menuItems}
          />

        </div>

        <div className="border border-dashed p-10">

          <Factura
            order={state.order}
            removeItem={removeItem}
          /> 

          <Propinaform 
            setTip={setTip}
            tip={tip}
          />

          <Totales 
            tip={tip}
            order={state.order}
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
