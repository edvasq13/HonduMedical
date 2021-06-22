import React from 'react';
import { Formik } from 'formik';
import Button from "@material-ui/core/Button";
import './Cita.css';


function Cita() {
	return (
	  <div className="App">
 <Formik
       initialValues={{ email: '', password: '', consulta: '',
        Identidad: '', LoginId: '', CiudadUsu: '',
         EspecialidadC: '', Horario_C: '', FechaC: '' }}
       validate={values => {
         const errors = {};
         if (!values.Identidad) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Identidad)
         ) {
           errors.email = 'Invalid Identidad address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           
           <br/>
           <label>Identidad</label>
            <br/>
           <input
             type="Identidad"
             name="Identidad"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Identidad}
           />
<br/>
<label>CiudadUsu</label>
            <br/>
           <input
             type="CiudadUsu"
             name="CiudadUsu"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.CiudadUsu}
           />
<br/>
<label>Horario_C</label> 
            <br/>
           <input
             type="Horario_C"
             name="Horario_C"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.Horario_C}
           />
<br/>
<label>EspecialidadC</label>
            <br/>
           <input
             type="EspecialidadC"
             name="EspecialidadC"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.EspecialidadC}
           />

           {errors.password && touched.password && errors.password}
           <br/>
            <br/>
            <br/>
            <br/>
           <Button variant="contained" color="primary" className="Boton1">
      Cita
    </Button>
           {/* <button type="Iniciar sesión" disabled={isSubmitting}>
           Iniciar sesión
           </button> */}
         </form>
       )}
     </Formik>
        </div>
		)};

        export default Cita;