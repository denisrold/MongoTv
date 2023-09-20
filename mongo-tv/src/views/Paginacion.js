export default function Paginacion(props) {
  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      resultado.push(
        <a
          key={i}
          onClick={() => props.onChange(pagina)}
          className={props.pagina === pagina ? "active" : ""}
        >
          {pagina}
        </a>
      );
    }
    return resultado;
  };
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          página {props.pagina} de {props.total}:
        </span>
        {getPaginas()}
      </div>
    </div>
  );
}