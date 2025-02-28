import Botonera from '../Botonera/Botonera';
import './Pestanas.css';
import Informacion from '../Informacion/Informacion.jsx';
import { useState } from 'react';
import ver from '../../img/ver.svg';
import generar from '../../img/generar.svg';
import perfil from '../../img/perfil.svg';

export default function Pestanas() {
    // Estados para controlar qué pestaña está abierta
    const [abrirInfo, setAbrirInfo] = useState(false);
    const [abrirPrincipal, setAbrirPrincipal] = useState(false);

    // Funciones para abrir y cerrar las pestañas
    const abrirVentanaInfo = () => {
        setAbrirInfo(true);
        setAbrirPrincipal(false); // Cierra la otra pestaña si está abierta
    };

    const cerrarVentanaInfo = () => setAbrirInfo(false);

    const mostrarVentana = () => {
        setAbrirPrincipal(true);
    };
    const informacionPestana = () => setAbrirInfo((prev) => !prev);
    const principalPestana = () => setAbrirPrincipal((prev) => !prev);
    const cerrarVentanaPrincipal = () => setAbrirPrincipal(false);

    return (
        <div className="contenedor-pestanas">
            {/* Botones para abrir las pestañas */}
            <div className='pestana nav-item' onClick={informacionPestana}>
                <img src={ver} alt="" />
            </div>
            <div className='pestana nav-item' onClick={principalPestana}>
                <img src={perfil} alt="" />
            </div>
            <div className='pestana nav-item' onClick={principalPestana}>
                <img src={generar} alt="" />
            </div>

            {abrirInfo && <Informacion onClose={cerrarVentanaInfo} />}
            {abrirPrincipal && <Botonera  onClose={cerrarVentanaPrincipal}/>}
        </div>
    );
}