import logo from './logo.svg';
import './App.css';
import {React,useState} from 'react';
function App() {
  const [meses,setMeses]=useState("");
  const [descuento,setDescuento]=useState();
  const handleChange=(e)=>{
    const meses=e.target.value;

    {/*switch (meses) {
      case 0:
        descuento=0;
        break;
      case 2:
        descuento=25*0.1;
        break;
      case 4:
        descuento=25*0.2;
      break;
      case 6:
        descuento=25*0.27;
      break;
      case 8:
        descuento=25*0.37;
      break;
      default:
        descuento=25*0.53;
        break;

    }**/}
    console.log(meses);
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
        <h1>total a pagar {} </h1>
      </div>
    </div>
  );
  
}

export default App;
