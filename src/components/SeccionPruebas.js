import React, { Component } from "react";

import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
  counter = 0;

  sumar() {
    this.counter++;
  }

  restar() {
    this.counter--;
  }

  render() {
    return (
      <section id="content">
        <h2 className="subheader">Ultimos Articulos</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h2 className="subheader">Componentes</h2>
        <section className="componentes">
          <MiComponente></MiComponente>
          <Peliculas></Peliculas>
        </section>

        <h2 className="subheader">Estado</h2>
        <p>Contador: {this.counter}</p>
        <input type="button" onClick={this.sumar.bind(this)}>
          Sumar
        </input>
        <input type="button" onClick={this.restar.bind(this)}>
          Resyat
        </input>
      </section>
    );
  }
}

export default SeccionPruebas;
