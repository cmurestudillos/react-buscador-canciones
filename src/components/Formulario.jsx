import React, { useState } from 'react';
// Logo
import logo from '../assets/img/logo.png';

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [ error, guardarError] = useState(false);

    const { artista, cancion } = busqueda;

    // función a cada input para leer su contenido
    const actualizarState = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // consultar las apis
    const buscarInformacion = e => {
        e.preventDefault();

        // Validacion
        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        // Todo bien, pasar al componente principal
        guardarBusquedaLetra(busqueda);
    }

    return ( 
        <div className="bg-dark">
            <div className="container">
                <h1 className="text-white p-2">Buscador de Canciones</h1>
                <hr className="bg-white"></hr>
                { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
                <div className="row">
                    <form onSubmit={buscarInformacion} className="col card text-white bg-transparent mb-5 pt-5 pb-2" >
                        <fieldset>
                            <div className="float-left">
                                <img src={logo} alt="logo" title="logo" width="128" height="128" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">Artista</label>
                                        <input type="text" className="form-control" id="artista" name="artista" placeholder="Nombre Artista" onChange={actualizarState} value={artista} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="cancion">Canci&oacute;n</label>
                                        <input type="text" className="form-control" id="cancion" name="cancion" placeholder="Nombre Canción" onChange={actualizarState} value={cancion} />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-outline-info float-right btn-lg btn-block" >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;