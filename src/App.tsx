import Factura from "./Components/Factura"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import { menuItems }  from "./db/db"

function App() {

  return (
    <>
      <Header /> 

      <div className=" grid grid-cols-2 gap-2 p-10 ">

        <div>

          <Menu
            menuItems={menuItems}
          />
        
        </div>

        <div>

          <Factura/> 

        </div>


      </div>

    </>

  )
}

export default App
