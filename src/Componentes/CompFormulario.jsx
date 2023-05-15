import React from 'react'

const CompFormulario = () => {
  //estado - hooks
  const [nombre,setNombre] = React.useState("");
  const [apellido,setApellido] = React.useState("")
  const [lista,setLista] = React.useState([])
  //guardar datos 
  const guardarDatos = (e)=>{
    e.preventDefault();
    if(!nombre){
      alert("Falta el nombre")
      return
    }
    if(!apellido){
      alert("Falta el Apellido")
      return
    }
    //Agregar a la lista
    setLista([
      ...lista,
      {nombre:nombre,apellido:apellido}
    ])
    //limpiar inputs
    e.target.reset();
    //limpiar los estados
    setApellido("")
    setNombre("")

    //btn btn-danger float-end


  }

 return (
    <div className='container'>
        <h2 className="text-primary text-center mt-4 ">Formulario de Registro de Usuario</h2>
        <form onSubmit={guardarDatos}>
          <input type="text" className='form-control mb-3' placeholder='ingrese su Nombre' onChange={(e)=>setNombre(e.target.value.trim())} />
          <input type="text" className='form-control mb-3' placeholder='ingrese su Apellido' onChange={(e)=>setApellido(e.target.value.trim())}/>
          <div className='d-grid gap-2'>
          <button type="submit" className='btn btn-outline-info'>Registrar</button>
        </div>
        </form>
        <hr />
        <ol className='list-group'>
          {
            lista.map((item,index)=>(<li className='list-group-item' key={index}>{item.nombre} {item.apellido}
            <button className='btn btn-danger float-end'>Eliminar</button>
            </li>))
          }
        </ol>


        
    </div>
  )
}

export default CompFormulario