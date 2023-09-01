import logo from './logo.svg';
import './App.css';
import {React,useState} from 'react';
function App() {
  const [meses,setMeses]=useState("");
  const [descuento,setDescuento]=useState();
  const[total,setTotal]=useState();
  const precio=25;
  const handleChange=(e)=>{
    const meses=e.target.value;
    setMeses(meses);
  
  }

  
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className='form'>
        <label for="nombre">Ingrese su nombre</label>
        <input type='text' id='nombre' />
        <label for="Apellido">Ingrese su apellido</label>
        <input type='text' id='apellido' />
        <label for="idioma">Ingrese su nombre</label>
        <select name="idioma" id="">
          <option value="frances">Frances</option>
          <option value="ingles">ingles</option>
        </select>
        <label for="meses">cantidad de meses</label>
        <input type='number' onChange={handleChange}/>
        <h1>Cantidad de meses {meses} </h1>
      </div>
    </div>
  );
  
}

export default App;
