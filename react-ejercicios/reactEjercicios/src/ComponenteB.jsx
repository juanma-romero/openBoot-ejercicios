import { useState } from 'react'

const ComponenteB = ({contacto}) => {
    const [enLinea, setEnLinea] = useState(false);
    
    const cambiaEstado = () =>{        
        setEnLinea(!enLinea)        
    }
    return (
        <div>
            <h2>Nombre: { contacto.nombre }</h2>
            <h3>Descripcion: { contacto.apellido }</h3>
            <h3>Nivel: { contacto.email }</h3>
            <h3>Estado: { enLinea ? "Contacto En Línea": "Contacto No Disponible" }</h3>
            <button onClick={() => cambiaEstado()}>
                {enLinea ? "Desconectar": "Conectar"}
            </button>
        </div>
  )
}

export default ComponenteB