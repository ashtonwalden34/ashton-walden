import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';

import Home from "./Pages/Home"
import Projects from "./Pages/Home"
import Documents from "./Pages/Home"
import Contact from "./Pages/Home"
// import Navbar from "./Pages/Home"

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        {/* <div> <Navbar /> </div> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/documents" component={Documents}/>
        <Route exact path="/contact" component={Contact} />

      </div>
        
    </HashRouter>
  );
}

export default App;
