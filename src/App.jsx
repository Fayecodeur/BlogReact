import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./assets/components/Home.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import Add from "./assets/components/add.jsx";
import Blog from "./assets/components/Blog.jsx";
import NotFound from "./assets/components/NotFound.jsx";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/add"}>
            <Add />
          </Route>
          <Route path={"/blogs/:id"}>
            <Blog />
          </Route>
          <Route path={"*"}>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
