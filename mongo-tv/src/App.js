import "./App.css";
import Blog from "./views/Blog";
import ListadoPeliculas from "./views/ListadoPeliculas";
import { Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/">
            <ListadoPeliculas />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
