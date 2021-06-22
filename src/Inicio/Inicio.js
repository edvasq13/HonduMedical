// import { Carousel } from 'bootstrap';
import React from 'react';
import Button from "@material-ui/core/Button";
import './Inicio.css';
import '../Formularios/Cita';
// import Login from './Inicio/Login';




function Inicio(props){
   
        return(<div>
          <body>
            <title>HONDUMEDICAL CENTER</title>

           {/* <Carousel /> */}
            
            
            <section id="servicos" className="caixa" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Sector publico</h3>
            <h4>Agenda tu cita desde casa</h4>
            
            <p>
              <ul><li>Sin distancias </li></ul>
              <ul><li>sin traslados </li></ul>
              <ul><li>Sin demoras </li></ul> 
              <ul><li>ahora los especialistas llegan a ti </li></ul>             
          </p>


          </div>
          <div className="col-md-6">
            <h3>Sector Publico</h3>
            <ul><li>Conectate con tus doctores favoritso </li></ul> 
            
          </div>
        </div>
        <Button href="http://localhost:3000/Cita" variant="contained" color="primary" className="Boton1">
      Cita
    </Button>
    <Button href="http://localhost:3000/Nuevo" variant="contained" color="primary" className="Boton2">
    Directorios medicos
    </Button>
      </div>
      
   
      </section>
    


    {/* <button href="indexFormulario.html" type="Iniciar Sesion" class="btn btn-primary w-100" >Cita </button>
    <button href="indexFormulario.html" type="Iniciar Sesion" class="btn btn-primary w-100" >Directorios medicos </button> */}

    <section id="recursos" className="caixa">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Fácil</h2>
            <h3>Buscar</h3>
            <p>
              Busca los doctores desde la comodidad del hogar
            </p>

            <h3>Navegar</h3>
            <p>
              Te lo facilitamos desde la comodidad del navegador de tu hogar 
            </p>

            <h3>Descubrir</h3>
            <p>
              Descubre a los doctores y sus horarios de atencion junto a su gran experiencia 
            </p>
          
          </div>
          
        </div>
        
      </div>
      
    </section>

    <footer id="rodape">
      <div className="container">
        <div className="row">
          <div  className="col-md-2">

          </div>

          <div className="col-md-2">
            <h4>COMPAÑAS</h4>
            <ul className="navbar-nav ">
              <li className="nav-item"><a href="" className="nav-link" >PARA PACIENTES</a></li>
              <li className="nav-item"><a href="" className="nav-link" >Durante su visita</a></li>
              <li className="nav-item"><a href="" className="nav-link" >Antes de su visita</a></li>
              <li className="nav-item"><a href="" className="nav-link" >Luego de su visita</a></li>
            </ul>            
          </div>

          <div className="col-md-2">
            <h4>ACERCA DE NOSOTROS</h4>
            <ul className="navbar-nav ">
              <li className="nav-item"><a href="" className="nav-link" >Premios</a></li>
              <li className="nav-item"><a href="" className="nav-link" >Reconocimiento</a></li>
              <li className="nav-item"><a href="" className="nav-link" >Nuestro servicio</a></li>
            </ul>   
            </div>

            <div class="col-md-2">
            <h4>INFORMACION</h4>
            <ul className="navbar-nav ">
              <li className="nav-item"><a href="" className="nav-link" >Sobre nosotros</a></li>
              <li className="nav-item"><a href="" className="nav-link" >Acerca de</a></li>
              <li className="nav-item"><a href="" className="nav-link" >Contacto </a></li>
             </ul>   
            </div>

        </div>

      </div>
    </footer>

    </body>
    
            </div>

        )
            
    }
    export default Inicio;