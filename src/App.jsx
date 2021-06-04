import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Toolbar from './components/toolbar/Toolbar';

function App() {
  return (
    <Router>
      <Toolbar />
      {/* <Header />
      <Main />
      <Footer /> */}
    </Router>
  );
}

export default App;
