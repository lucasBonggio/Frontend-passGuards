import React, { useEffect, useState } from 'react';
import './Informacion.css';
import CuentaIndividual from '../Cuenta/Cuenta';
import buscador from '../../img/lupa.svg';
import candado from '../../img/candado.svg';

export default function Informacion() {
    const [cuentas, setCuentas] = useState([]);
    const [filtroSeleccionado, setFiltroSeleccionado] = useState("");
    const [valorBusqueda, setValorBusqueda] = useState("");


    const [mostrarVentana, setMostrarVentana] = useState(true); // Estado para controlar la visibilidad
        
    const cerrarVentana = () => setMostrarVentana(false); // Función para cerrar la ventana


    const solicitarCuentas = async () => {
        try {
            const response = await fetch(`http://localhost:1234/api/auth/usuario/cuentas`);
            const data = await response.json();

            if (data.usuario && Array.isArray(data.usuario.data)) {
                setCuentas(data.usuario.data); // Usa el array dentro de `usuario.data`
            } else {
                console.error('La respuesta del servidor no tiene el formato esperado:', data);
            }
        } catch (error) {
            console.error('Error al obtener las cuentas:', error);
        }
    };

    useEffect(() => {
        solicitarCuentas();
    }, []);

    const buscar = async () => {
        
        try{
            if(!filtroSeleccionado){
                alert('Debes seleccionar un Filtro');
                return;
            }
            if(!valorBusqueda){
                alert('Debes ingresar un valor');
                return;
            }
            let url = "";
            let mensaje = "";

            switch(filtroSeleccionado){
                case "id":
                    url = `http://localhost:1234/api/auth/usuario/id/${valorBusqueda}`;
                    mensaje = "Id";
                    break;
                case "nombre":
                    url = `http://localhost:1234/api/auth/usuario/nombre/${valorBusqueda}`;
                    mensaje = "Nombre";
                    break;
                case "servicio":
                    url = `http://localhost:1234/api/auth/usuario/servicio/${valorBusqueda}`;
                    mensaje = "Servicio";
                    break;
                case "gmail":
                    url = `http://localhost:1234/api/auth/usuario/gmail/${valorBusqueda}`;
                    mensaje = 'Gmail';
                    break;
            }
            
            const response = await fetch(url, {
                method: "GET",
            });

            if(!response.ok){
                throw new Error('Error al encontrar al usuario');
            }

            const data = await response.json();
            console.log("Respuesta del servidor:", data);
            if (data.data && Array.isArray(data.data)) {
                setCuentas(data.data); // Actualiza el estado con los resultados
            } else {
                console.error('Respuesta del servidor no válida:', data);
                alert(`No se encontraron resultados para ${mensaje}: "${valorBusqueda}".`);
                setCuentas([]); // Limpia el estado si no hay resultados válidos
            }
        }catch(error){
            console.error("Eror: ", error.message);
            console.log("Error al encontrar al usuario.")
        }
    }

    return (
                <>
                    {/* Renderizado condicional de la ventana */}
                    {mostrarVentana && (
                        <div className="contenedor-cuentas-usuario">
                            {/* Botón para cerrar la ventana */}
                            <div className="cerrar-ventana">
                                <img src={candado} alt="Candado" />
                                <button onClick={cerrarVentana}>X</button>
                            </div>
        
                            {/* Barra de búsqueda */}
                            <div className="buscador">
                                <div className="contenedor-buscador">
                                    <input
                                        className="input-buscador"
                                        type="search"
                                        placeholder="Buscar..."
                                        onChange={(e) => setValorBusqueda(e.target.value)}
                                    />
                                    <button className="boton-buscador" onClick={buscar}>
                                        <img className="icono" src={buscador} alt="Buscar" />
                                    </button>
                                </div>
                                <select
                                    className="filtros"
                                    name="filtros"
                                    required
                                    value={filtroSeleccionado}
                                    onChange={(e) => setFiltroSeleccionado(e.target.value)}
                                >
                                    <option value="">Filtros</option>
                                    <option value="nombre">Nombre</option>
                                    <option value="servicio">Servicio</option>
                                    <option value="gmail">Gmail</option>
                                    <option value="id">Id</option>
                                </select>
                            </div>
        
                            {/* Contenedor de cuentas */}
                            <div className="contenedor-cuentas-u">
                                <div className="contenedor-cuentas">
                                    {cuentas.map((cuenta) => (
                                        <CuentaIndividual key={cuenta.id} cuenta={cuenta} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            );
        }