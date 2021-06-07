import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/screens/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Toolbar from "./components/toolbar/Toolbar";

function App() {
  return (
    <Router>
      <Toolbar />
      <div className="container">
        <Sidebar />
        {/* <Home /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
