import React, {Component} from 'react'

class MiComponente extends Component{
  render(){
    let receta = {
      nombre: 'Albondigas',
      ingredientes: ['carne', 'huevo', 'tomate', 'pan rallado'],
      calorias: 700
    }

    return (
      <div className='mi-componente'>
        <h1>{'Nombre: ' + receta.nombre}</h1>
        <h2>{'Calorias: ' + receta.calorias}</h2>
        <ul>
        {
          receta.ingredientes.map((ingrediente, i)=>{
            return (
              <li key={i}>{ingrediente}</li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}

export default MiComponente