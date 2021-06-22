import React from 'react';
// import Doctor from './Doctores/Doctor';
 
 
 const Nuevo = () => (
   <div>
     <h1>Directorio Medico</h1>

     <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">IdDrs</th>
      <th scope="col">IdentidadID</th>
      <th scope="col">NombreDrs</th>
      <th scope="col">EspecialidadDrs</th>
      <th scope="col">EspecialidadOtra</th>
      <th scope="col">Especi_Consultorio</th>
      <th scope="col">HorarioC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>001</td>
      <td>0501-1980-00452</td>
      <td>Milton</td>
      <td>Cirujia</td>
      <td>Emergencia</td>
      <td>General</td>
      <td>8:00A.M A 11:00AM</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>001</td>
      <td>0501-1980-00452</td>
      <td>Josue</td>
      <td>Cirujia</td>
      <td>Emergencia</td>
      <td>General</td>
      <td>8:00A.M A 11:00AM</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>001</td>
      <td>0501-1980-00452</td>
      <td>Kevin</td>
      <td>Cirujia</td>
      <td>Emergencia</td>
      <td>General</td>
      <td>8:00A.M A 11:00AM</td>
    </tr>

  </tbody>
</table>
     

   </div>
 );
 
 export default Nuevo;