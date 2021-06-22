import logo from './logo.svg';
import Inicio from './Inicio/Inicio';
import Login from './Formularios/Login';
import Nuevo from './Tabla/Nuevo';
import Cita from './Formularios/Cita';


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/Inicio">
              Inicio
            </Link>
            <Link className="nav-link" to="/Login">
            Iniciar sesión
            </Link>
 
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/Inicio" component={Inicio} />
        <Route path="/Login" component={Login} />
        <Route path="/Nuevo" component={Nuevo} />
        <Route path="/Cita" component={Cita} />
       
      </Switch>
    </Router>

  
  

     
    </div>
  );
}
export default App;
