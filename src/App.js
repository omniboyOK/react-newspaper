import React, { Component, Fragment } from "react";
import Header from "./components/header/header";
import ListaNoticias from "./components/listaNoticias/listaNoticias";
import Formulario from "./components/formulario/formulario";
const apikey = process.env.API_KEY;
console.log(apikey)

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias('home');
  };

  consultarNoticias = async (categoria) => {
    const uri =
      `https://api.nytimes.com/svc/topstories/v2/${categoria}.json?api-key=${apikey}`;

    const respuesta = await fetch(uri);
    const noticias = await respuesta.json();
    
    this.setState({
      noticias: noticias.results
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Formulario 
          consultarNoticias = {this.consultarNoticias}
        />
        <div className="container">
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
