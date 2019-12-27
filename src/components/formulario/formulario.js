import React, { Component } from "react";

class Formulario extends Component {
  state = {
    categoria: "home",
    categorias: [
      "home",
      "arts",
      "automobiles",
      "books",
      "business",
      "fashion",
      "food",
      "health",
      "insider",
      "magazine",
      "movies",
      "national",
      "nyregion",
      "obituaries",
      "opinion",
      "politics",
      "realestate",
      "science",
      "sports",
      "sundayreview",
      "technology",
      "theater",
      "tmagazine",
      "travel",
      "upshot",
      "world"
    ],
    nombreCategoria: [
      "Home",
      "Arts",
      "Automobiles",
      "Books",
      "Business",
      "Fashion",
      "Food",
      "Health",
      "Insider",
      "Magazine",
      "Movies",
      "National",
      "New York Region",
      "Obituaries",
      "Opinion",
      "Politics",
      "Reale State",
      "Science",
      "Sports",
      "Sunday Review",
      "Technology",
      "Theater",
      "TV Magazine",
      "Travel",
      "Upshot",
      "World"
    ]
  };

  //función que cambia el valor de la categoria al interactuar con el input
  cambiarCategoria = e => {
    this.setState(
      {
        categoria: e.target.value
      },
      () => {
        //pasamos el dato a nuestra app
        this.props.consultarNoticias(this.state.categoria);
      }
    );
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-2">
          <form>
            <h4>Filtrar por categoria</h4>
            <div className="input-field col s12 m8">
              <select onChange={this.cambiarCategoria}>
                {this.state.categorias.map((categoria, index) => {
                  return (
                    <option value={categoria}>
                      {this.state.nombreCategoria[index]}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
