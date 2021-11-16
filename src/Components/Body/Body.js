import React from 'react'
import './stiilos.css'
import {Form, Navbar, Container, Button}  from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect} from 'react'


const Body = (props) => {
  const initialStateValues = {
   
    name: "",
    url: "",
    documento: "",
    ficha: "",
    namef: "",
    trimestre: "",
    correo:"",
  };
  
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }; 
  
  const getLinkById = async (id) => {
   
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
  
  }, [props.currentId]);

  const [terminos, cambiarTerminos] = useState(false)

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  }

    return (
     
<div className='contenedor'>
  <div className='el'>
<div className='div'>
    <Navbar bg="dark" variant="dark">
    <Container className='principio'>
      <h1 className='Titulo'>Registro de Alumnos</h1>
      <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1045px-Sena_Colombia_logo.svg.png"
          width="125"
          height="125"
          className="senita"
        />
    </Container> 
  </Navbar>
  </div>
<br/>
<br/>
<div className='cosito'>
<form>
  <label>
    Nombre Completo:
    <div className='grupodiv'>
    <input className='cajon' type="text" name="name" value={values.name} placeholder="Escribe tu nombre..." onChange={handleInputChange}/>
    <FontAwesomeIcon className='emoji'icon={faCheckCircle}/>
    </div>
  </label>
</form>
<br/>
<form>
  <label>
    Fecha Nacimiento:
    <input className='cajon' type="Date" name="fecha"/>
  </label>
</form>
<br/>
<label>
    Tipo de documento:
<select className='cajon'>
 <option select value="c.c">Cedula de Ciudadania</option>
  <option value="t.i">Tarjeta De Identidad</option>
  <option value="p">Pasaporte</option>
  <option value="E">Cedula de Extranjeria</option>
</select>
  </label>
<br/>
<br/>
<form>
  <label>
    N° Documento:
    <input className='cajon' type="Number" name="documento" value={values.documento} placeholder="Digita tu número de documento..." onChange={handleInputChange}/>
  </label>
</form>
<br/>
<form>
  <label>
   Numero de ficha:
    <input className='cajon' type="Number" name="ficha" value={values.ficha} placeholder="Digita el número de tu ficha..." onChange={handleInputChange} />
  </label>
</form>
<br/>
<form>
  <label>
    Nombre Ficha:
    <input className='cajon' type="text" name="namef" value={values.namef} placeholder="Digita el nombre de tu ficha..." onChange={handleInputChange}/>
  </label>
</form>
<br/>
<form>
  <label>
    Fecha Ingreso:
    <input className='cajon' type="Date" name="fegre"/>
  </label>
</form>
<br/>
<form>
  <label>
    Fecha Egreso:
    <input className='cajon' type="Date" name="name" />
  </label>
</form>
<br/>
<form>
  <label>
    Trimestre Actual:
    <input className='cajon' type="text" name="trimestre" value={values.trimestre} placeholder="Escribe el trimestre al que perteneces..." onChange={handleInputChange}/>
  </label>
</form>
<br/>
<form>
  <label>
    Correo Electronico:
    <input className='cajon' type="text" name="correo" value={values.correo} placeholder="Escribe tu correo electronico..." onChange={handleInputChange}/>
  </label>
</form>
<br/>
<br/>
<Form.Group className="cajita" id="formGridCheckbox">
    <Form.Check type="checkbox" 
    name="terminos" 
    id="terminos"
    checked={terminos} 
    onChange={onChangeTerminos}
    label="Verifico que la informacion que he 
     suministrado es de forma voluntaria y veridica." />
</Form.Group>
<br/>
<br/>
<div className='boton' >
<>
<button className="btn btn-primary btn-block">
          {props.currentId === "" ? "Enviar" : "Registrarse"}
        </button>
</>
</div>
</div>
</div>
        </div>
        
    )


}

export default Body
