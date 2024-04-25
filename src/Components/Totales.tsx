import { useMemo } from "react"

type TotalesProps = {  
  tip : number
  order : OrderItem[]
}

export default function Totales( { tip , order }  :  TotalesProps) {

  const subtotal = useMemo(() => order.reduce( ( total , items) => (total + ( items.price * items.quantity)), 0 ) , [order])

  const propina = tip * 100 ;

  const total = useMemo (() => subtotal + (subtotal *  tip) ,[ tip , order ])

  return (
    <div className=" pt-4">
        <h1 className=" font-bold"> Total Monto Consumido :  </h1>

        <p> Subtotal : <span className=" font-bold"> $ {subtotal},00 </span> </p>
        <p> Propina : <span className=" font-bold">  { propina  }%  </span></p>
        <p> Total a Pagar : <span className=" font-bold">  ${ total } ,00 </span></p>

    </div>
  )
}
