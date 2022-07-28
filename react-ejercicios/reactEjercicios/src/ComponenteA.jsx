
import {Contacto} from './contacto.class'
import ComponenteB from './ComponenteB'

const ComponenteA = () => {
    const creaContacto = new Contacto('Juanma', 'Romero', 'xjuanmax@hotmail.com', false)

  return (
    <div>
        <h1>Contacto:</h1>
        <ComponenteB
            contacto={creaContacto}
        />
    </div>
  )
}

export default ComponenteA

