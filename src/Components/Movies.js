import React, { Component } from "react";
import axios from "axios";
import MovieCardComponent from "./MovieCard";
import matrixImage from "../media/matrix.jpg";
import titanicImage from "../media/titanic.png";

class Movies extends Component {
  state = {
    movies: [],
    movieA: {
      titulo: "Titanic",
      image: titanicImage,
      year: 1997,
      duracion: 180,
      genero: "Drama",
      sinopsis:
        "A seventeen-year-old aristocrat falls in love with a kind but poor art..."
    },
    movieB: {
      titulo: "Matrix",
      image: matrixImage,
      year: 1999,
      duracion: 190,
      genero: "Sci-Fi",
      sinopsis:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. "
    }
  };

  componentDidMount() {
    // Peticion HTTP
    axios
      .get("http://localhost:8000/peliculas")
      .then(response => {
        console.log(response);
        this.setState({ movies: response.data.res });
        console.log(this.state);
      })
      .catch(err => console.log("Error"));
  }

  // FUncion recorre todos los elementos del axios
  renderMovies() {
    const moviesList = this.state.movies.map( (item, i) => {
      return (
        <MovieCardComponent
        key={i}
          title={item.titulo}
          image={item.image}
          year={item.year}
          duration={item.duracion}
          genre={item.genero}
          sinopsis={item.sinopsis}
        ></MovieCardComponent>
      );
    });
    return moviesList;
  }

  render() {
    return (
      <div
        className="mr-auto ml-auto col-10 row"
        style={{ border: "1px dashed" }}
      >
      {this.renderMovies()}

      </div>
    );
  }
}

export default Movies;

// <MovieCardComponent
// title={}
// //   image={}
// year={}
// duracion={}
// genero={}
// sinopsis={}
// ></MovieCardComponent>

// Daniel: M
// Fernando: M
// Sascha: M