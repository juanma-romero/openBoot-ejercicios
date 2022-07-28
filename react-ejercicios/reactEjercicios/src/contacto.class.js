import PropTypes from 'prop-types'

export class Contacto {
    nombre='';
    apellido='';
    email='';
    conectado=false;

    constructor(nombre, apellido, email, conectado) {
        this.nombre= nombre;
        this.apellido= apellido;
        this.email= email;
        this.conectado= conectado;
    }

}

Contacto.propType = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
}