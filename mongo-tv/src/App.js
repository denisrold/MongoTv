import "./App.css";
import Blog from "./Blog";
import ListadoPeliculas from "./ListadoPeliculas";
function App() {
  return (
    <Switch>
      <Route path="/">
        <ListadoPeliculas />
      </Route>
      <Route path="blog">
        <Blog />
      </Route>
    </Switch>
  );
}

export default App;
