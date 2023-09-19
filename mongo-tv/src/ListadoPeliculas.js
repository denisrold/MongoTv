import logo from "./logo.svg";
import "./App.css";
import Pelicula from "./Pelicula";
import PageWrapper from "./PageWrapper";
import peliculasJson from "./peliculas.json";
import Paginacion from "./Paginacion";
import { useState } from "react";
function ListadoPeliculas() {
  const [paginaActual, setPaginaActual] = useState(1);

  let peliculas = peliculasJson;
  const TOTAL_POR_PAGINA = 7;

  const getTotalPaginas = () => {
    let cantidadTotalPeliculas = peliculasJson.length;
    let total = Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);
    return total;
  };
  let pelicuasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );

  return (
    <PageWrapper>
      {pelicuasPorPagina.map((pelicula) => {
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

export default ListadoPeliculas;
