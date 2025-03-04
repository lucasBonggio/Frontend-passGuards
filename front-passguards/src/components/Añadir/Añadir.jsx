import React from 'react';
import './Añadir.css';
import guardar from '../../img/guardar.svg';
import deshechar from '../../img/deshechar.svg';
import candado from '../../img/candado.svg';

export default function Añadir({ contraseña, ventanaActiva, ventanaCerrada }) {
    // Si la ventana no está activa, no renderiza nada
    if (!ventanaActiva) return null;

    // Estados para los campos de entrada
    const [nombre_cuenta, setNombreCuenta] = React.useState("");
    const [nombre_servicio, setNombreServicio] = React.useState("");

    const guardarCuenta = async () => {
    
        // Validar que todos los campos estén completos
        if (!nombre_cuenta || !nombre_servicio) {
            setError("Todos los campos son obligatorios.");
            return;
        }
    
        // Obtener el token JWT del localStorage
        const token = localStorage.getItem('token');
        if (!token) {
            setError("Debes iniciar sesión para guardar una cuenta.");
            return;
        }
    
        try {
            // Enviar los datos al backend
            const response = await fetch('http://localhost:1234/api/auth/usuario/cuenta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Incluir el token JWT
                },
                body: JSON.stringify({
                    nombre_cuenta,
                    nombre_servicio,
                    contraseña,
                }),
            });
    
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Error desconocido');
            }
    
            // Limpiar los campos después de guardar
            setNombreCuenta("");
            setNombreServicio("");
    
            // Cerrar la ventana
            ventanaCerrada();
    
            alert("Cuenta guardada exitosamente.");
        } catch (error) {
            console.error("Error al guardar la cuenta:", error.message);
        }
    };

    return (
        <div className="contenedor-ventana">
            {/* Botón para cerrar la ventana */}
            <div className="cerrar-ventana">
                <img src={candado} alt="Candado" />
                <button onClick={ventanaCerrada}>X</button> {/* Llama a ventanaCerrada */}
            </div>

            <div className="cont-espacio"></div>

            <div className="cont-datos">
                    {/* Contraseña generada */}
                <div className="cont-contrasena">
                    <span>{contraseña}</span>
                </div>

                {/* Campos de entrada */}
                <div className="cont-inputs">
                    <input
                        className="input nombreUsuario"
                        type="text"
                        placeholder="Nombre de usuario"
                        value={nombre_cuenta}
                        onChange={(e) => setNombreCuenta(e.target.value)}
                    />
                    <input
                        className="input servicio"
                        type="text"
                        placeholder="Servicio"
                        value={nombre_servicio}
                        onChange={(e) => setNombreServicio(e.target.value)}
                    />
                </div>

                {/* Botones de acción */}
                <div className="cont-botones">
                    <button className="boton-añadir" onClick={guardarCuenta}>
                        <img src={guardar} alt="Guardar" />
                    </button>
                    <button className="boton-añadir" onClick={ventanaCerrada}>
                        <img src={deshechar} alt="Descartar" />
                    </button>
                </div>
            </div>
            
        </div>
    );
}