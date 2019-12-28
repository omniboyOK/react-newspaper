import React, { Component, Fragment } from "react";
import Header from "./components/header/header";
import ListaNoticias from "./components/listaNoticias/listaNoticias";
import Formulario from "./components/formulario/formulario";

class App extends Component {
  state = {
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias('home');
  };

  consultarNoticias = async (categoria) => {
    
    const respuesta = await fetch('https://react-news-omniboy.herokuapp.com/api/?categoria='+categoria);
    //transformo la respuesta en json
    const noticias = await respuesta.json()
    console.log(noticias)
    
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
