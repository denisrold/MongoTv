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
  const TOTAL_POR_PAGINA = 7;
  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA,
      paginaActual * TOTAL_POR_PAGINA
    );
  };

  const getTotalPaginas = () => {
    let cantidadTotalPeliculas = peliculasJson.length;
    let total = Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);
    return total;
  };

  cargarPeliculas();
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
        total={getTotalPaginas()}
        onChange={(pagina) => {
          setPaginaActual(pagina);
        }}
      />
    </PageWrapper>
  );
}

export default App;
