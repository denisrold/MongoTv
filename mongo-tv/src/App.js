import logo from "./logo.svg";
import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import peliculasJson from "./peliculas.json";
import Paginacion from "./Paginacion";
import { useState } from "react";
function App() {
  const [paginaActual, setPaginaActual] = useState(1);
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
      <Paginacion
        pagina={paginaActual}
        total={4}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default App;
