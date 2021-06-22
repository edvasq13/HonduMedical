import React from 'react';
import { Formik } from 'formik';
import Button from "@material-ui/core/Button";
import './Login.css';
 
 const Login = () => (
   <div>
     <h1>Iniciar sesión</h1>
{/* <img src={Logo}/> */}
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
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
           <section className="Menu">
          
           <label>Usuario</label>
           <br/>
           <input className="input"
             type="email"
             name="email"
             placeholder="Correo"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             style={{
              padding: '0 auto',
              fontSize: '1rem',
            }}
           />
           {errors.email && touched.email && errors.email}
           <br/>
           <label>Contraseña</label>
           <br/>
           <input className="input"
             type="password"
             name="password"
             placeholder="Contraseña"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             style={{
              padding: '0 auto',
              fontSize: '1rem',
            }}
           />
           {errors.password && touched.password && errors.password}
           <br/>
           <br/>
           <br/>
           <Button href="" variant="contained" color="primary" className="Boton2">
           Iniciar sesión
    </Button>
    </section>
           {/* <button type="Iniciar sesión" disabled={isSubmitting}>
           Iniciar sesión
           </button> */}
         </form>
       )}


      
 
   
     </Formik>
     
     
     

   </div>
 );
 
 export default Login;