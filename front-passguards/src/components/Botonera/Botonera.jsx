import './Botonera.css'; 
import mas from '../../img/mas.svg';
import menos from '../../img/menos.svg';
import numeros from '../../img/numeros.png';
import letras from '../../img/letras.svg';
import especiales  from '../../img/especiales.svg';
import guardar from '../../img/guardar.svg';
import generar from '../../img/generar.svg';
import candado from '../../img/candado.svg';

import { useState } from 'react';
import Añadir from '../Añadir/Añadir';

export default function Botonera({onClose}){
    const [longitud, setLongitud] = useState(9);
    const [usarNumeros, setUsarNumeros] = useState(false);
    const [usarLetras, setUsarLetras] = useState(true);
    const [usarEspeciales, setUsarEspeciales] = useState(false);
    const [contraseña, setContraseña] = useState('');

        
    const [mostrarVentana, setMostrarVentana] = useState(true); // Estado para controlar la visibilidad
    
    const [ventanaAñadir, setAbrirAñadir] = useState(false);

    const cerrarVentanaBotonera = () => onClose();


    const seleccionCaracteres = (tipo) => {
        if (tipo === "numeros") {
            setUsarNumeros((prev) => !prev);
        } else if (tipo === "especiales") {
            setUsarEspeciales((prev) => !prev);
        } else if (tipo === "letras") {
            setUsarLetras((prev) => !prev);
        }
    };

    const generarContraseña = async () => {
        try {
            const response = await fetch("http://localhost:1234/api/auth/generar-contrasena", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    longitud,
                    usarNumeros,
                    usarLetras,
                    usarEspeciales
                })
            })

            const data = await response.json();
            setContraseña(data.contraseña)

        } catch (error) {
            
        }
    }

    return(
        <>
            {/* Renderizado condicional de la ventana */}
            {mostrarVentana && (
                <div className="contenedor-botonera">
                    {/* Botón para cerrar la ventana */}
                    <div className="cerrar-ventana">
                        <img src={candado} alt="Candado" />
                        <button onClick={cerrarVentanaBotonera}>X</button>
                    </div>
                    <div className="cont-espacio"></div>

                    <div className="contenedor-completa">
                        {/* Contenedor de la contraseña generada */}
                        <div className="cont-contraseña">
                            <span className="tarjeta-contraseña">{contraseña || 'Genera una contraseña'}</span>
                        </div>
                        
                        {/* Controles para la longitud de la contraseña */}
                        <div className="cont-cantidad-caracteres">
                            <button className="boton cantidad-sumar" onClick={() => setLongitud(longitud + 1)}>
                                <img src={mas} alt="+" />
                            </button>
                            <span>{longitud}</span>
                            <button
                                className="boton cantidad-restar"
                                onClick={() => setLongitud(longitud > 1 ? longitud - 1 : 1)}
                            >
                                <img src={menos} alt="-" />
                            </button>
                        </div>

                        {/* Opciones de caracteres */}
                        <div className="cont-caracteres">
                            <button
                                className={`boton caracteres-numeros ${usarNumeros ? 'activo' : ''}`}
                                onClick={() => seleccionCaracteres('numeros')}
                            >
                                <img src={numeros} alt="Números" />
                            </button>
                            <button
                                className={`boton caracteres-letras ${usarLetras ? 'activo' : ''}`}
                                onClick={() => seleccionCaracteres('letras')}
                            >
                                <img src={letras} alt="Letras" />
                            </button>
                            <button
                                className={`boton caracteres-especiales ${usarEspeciales ? 'activo' : ''}`}
                                onClick={() => seleccionCaracteres('especiales')}
                            >
                                <img src={especiales} alt="Especiales" />
                            </button>
                        </div>

                        {/* Botones de funciones */}
                        <div className="cont-funciones">
                            <button className="boton funciones-guardar" onClick={()=> setAbrirAñadir(true)}>
                                <img src={guardar} alt="Guardar" />
                            </button>
                            <button className="boton funciones-generar" onClick={generarContraseña}>
                                <img src={generar} alt="Generar" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

                        {/* Renderizado condicional del componente Añadir */}
                        {ventanaAñadir && (
                <Añadir
                    contraseña={contraseña}
                    ventanaActiva={ventanaAñadir}
                    ventanaCerrada={() => setAbrirAñadir(false)}
                />
            )}
        </>
    );
}