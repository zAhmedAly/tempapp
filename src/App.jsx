import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./screens/home/Home";
// import Sidebar from "./components/sidebar/Sidebar";
import Toolbar from "./components/toolbar/Toolbar";
import Profile from "./screens/profile/Profile";

function App() {
  return (
    <Router>
      <Toolbar />
      <div className="container">
        {/* <Sidebar /> */}
        {/* <Home /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
