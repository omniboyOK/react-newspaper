import React, { Component } from "react";

class Formulario extends Component {
  state = {};
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-2">
          <form>
            <h4>Filtrar por categoria</h4>
            <div className="input-field col s12 m8">
              <select>
                <option>General</option>
                <option>Politics</option>
                <option>Sports</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
