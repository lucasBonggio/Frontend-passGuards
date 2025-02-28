import React, { useState } from 'react';
import '../Informacion/Informacion.css';
import deshechar from '../../img/deshechar.svg';
import actualizar from '../../img/generar.svg';
import abajo from '../../img/abajo.svg';

const CuentaIndividual = ({ cuenta }) => {
    const [mostrarInfoCompleta, setMostrarInfoCompleta] = useState(false);

    const toggleInfoCompleta = () => setMostrarInfoCompleta((prev) => !prev);

    return (
        <div className="contenedor-cuenta">
            {/* Información inicial */}
            <div className="cont-informacion">
                <div className="cont-info-inicial" onClick={toggleInfoCompleta}>
                    <span>{cuenta.nombre_servicio}#{cuenta.id}</span>
                    <button >
                        <img src={abajo} alt="Desplegar" className={mostrarInfoCompleta ? 'rotated' : ''} />
                    </button>
                </div>

                {/* Información completa (se muestra/oculta según el estado) */}
                {mostrarInfoCompleta && (
                    <div className="cont-info-completa">
                        <div className="cont-info">
                            <span>{cuenta.nombre_usuario}</span>
                            <span>{cuenta.gmail}</span>
                            <span>{cuenta.contraseña}</span>
                        </div>
                        <div className="cont-botones-informacion">
                            <button>
                                <img src={deshechar} alt="Descartar" />
                            </button>
                            <button>
                                <img src={actualizar} alt="Actualizar" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CuentaIndividual;