import React, { useState } from 'react';
import '../Informacion/Informacion.css';
import deshechar from '../../img/deshechar.svg';
import actualizar from '../../img/generar.svg';
import abajo from '../../img/abajo.svg';

const CuentaIndividual = ({ cuenta, setCuentas  }) => {

    const eliminarCuenta = async ({cuenta_id}) => {

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No hay token de autenticación.');
            }
    
            const response = await fetch(`http://localhost:1234/api/auth/usuario/${cuenta_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': ` Bearer ${token}`
                }
                
            } )
            
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Error desconocido');
            }

            setCuentas((prevCuentas) => prevCuentas.filter((c) => c.cuenta_id !== cuenta_id));
            alert("Cuenta guardada exitosamente.");
        } catch (error) {
            console.error('Error al eliminar la cuenta. ', error.message);
        }
    } 


    const [mostrarInfoCompleta, setMostrarInfoCompleta] = useState(false);

    const toggleInfoCompleta = () => setMostrarInfoCompleta((prev) => !prev);

    return (
        <div className="contenedor-cuenta">
            {/* Información inicial */}
            <div className="cont-informacion">
                <div className="cont-info-inicial" onClick={toggleInfoCompleta}>
                    <span>{cuenta.nombre_servicio}#{cuenta.cuenta_id}</span>
                    <button >
                        <img src={abajo} alt="Desplegar" className={mostrarInfoCompleta ? 'rotated' : ''} />
                    </button>
                </div>

                {/* Información completa (se muestra/oculta según el estado) */}
                {mostrarInfoCompleta && (
                    <div className="cont-info-completa">
                        <div className="cont-info">
                            <span>{cuenta.nombre_cuenta}</span>
                            <span>{cuenta.contraseña}</span>
                        </div>
                        <div className="cont-botones-informacion">
                            <button onClick={() => eliminarCuenta({cuenta_id: cuenta.cuenta_id})}>
                                <img src={deshechar} alt="Descartar" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CuentaIndividual;