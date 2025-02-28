import React from 'react';
import './Añadir.css';
import guardar from '../../img/guardar.svg';
import deshechar from '../../img/deshechar.svg';
import candado from '../../img/candado.svg';

export default function Añadir({ contraseña, ventanaActiva, ventanaCerrada }) {
    // Si la ventana no está activa, no renderiza nada
    if (!ventanaActiva) return null;

    // Estados para los campos de entrada
    const [nombreUsuario, setNombreUsuario] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [nombreServicio, setNombreServicio] = React.useState("");

    // Función para guardar la cuenta
    const guardarCuenta = async () => {
        try {
            // Validar que todos los campos estén completos
            if (!nombreUsuario || !email || !nombreServicio) {
                alert("Todos los campos son obligatorios.");
                return;
            }

            // Simula una solicitud al backend
            console.log("Datos enviados:", { nombreUsuario, email, nombreServicio, contraseña });

            // Limpiar los campos después de guardar
            setNombreUsuario("");
            setEmail("");
            setNombreServicio("");

            // Cerrar la ventana
            ventanaCerrada();
        } catch (error) {
            console.error("Error al guardar la cuenta:", error);
            alert("Hubo un error al guardar la cuenta. Inténtalo de nuevo.");
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
                        className="input nombre-usuario"
                        type="text"
                        placeholder="Nombre de usuario"
                        value={nombreUsuario}
                        onChange={(e) => setNombreUsuario(e.target.value)}
                    />
                    <input
                        className="input correo"
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="input servicio"
                        type="text"
                        placeholder="Servicio"
                        value={nombreServicio}
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