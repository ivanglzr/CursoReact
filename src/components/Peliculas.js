import React, {Component} from 'react'
import MensajeEstatico from './MensajeEstatico'

class Peliculas extends Component{
  render(){
    return(
      <React.Fragment>
        <h4>Componente pelicula</h4>
        <MensajeEstatico></MensajeEstatico>
      </React.Fragment>
    )
  }
}

export default Peliculas