const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type PropinaPros = { 
  setTip :  React.Dispatch<React.SetStateAction<number>>
}


export default function Propinaform( { setTip }  : PropinaPros) {
  return (
    <div className="border-b border-teal-400">
      <h2 className=" font-bold mb-2"> Propina : </h2>

      { tipOptions.map( ( option ) => ( 

        <div key={option.id} className=" flex items-center mb-1  gap-2">

          <input type="radio" name="propina" value={option.value} id={option.id} onChange={ (e) => setTip( +e.target.value)}/>
          <label className=" font-semibold" htmlFor={option.id}> { option.label }</label>

        </div>
        
      ))}
    </div>
  )
}
