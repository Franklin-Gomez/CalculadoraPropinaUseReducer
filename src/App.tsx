import Factura from "./Components/Factura"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import { menuItems }  from "./db/db"
import Propinaform from "./Components/Propinaform"
import Totales from "./Components/Totales"
import { initialState , orderReducer } from "./Reducers/order-reducer"
import { useReducer } from "react"

function App() {

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
            dispatch={dispatch}
          /> 

          <Propinaform 
            dispatch={dispatch}
            tip={state.tip}
          />

          <Totales 
            tip={state.tip}
            order={state.order}
          />
          
          <button onClick={() => dispatch({ type : "saveOrder"})} className="w-full bg-black text-white uppercase mt-5 p-5 font-bold">
            Guardar Elecciones
          </button>
        </div>

      </div>

    </>

  )
}

export default App
