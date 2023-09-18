import logo from "./logo.svg";
import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import peliculasJson from "./peliculas.json";

function App() {
  let peliculas = peliculasJson;
  return (
    <PageWrapper>
      {peliculas.map((pelicula) => {
        return (
          <Pelicula
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
            director={pelicula.director}
            actores={pelicula.actores}
            fecha={pelicula.fecha}
            duracion={pelicula.duracion}
            img={pelicula.img}
          >
            {pelicula.descipcion}
          </Pelicula>
        );
      })}
    </PageWrapper>
  );
}

export default App;
