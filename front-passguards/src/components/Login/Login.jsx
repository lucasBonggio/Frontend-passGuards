import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [dataForm, setDataForm] = useState({
        gmail: "",
        contraseña: ""
    });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página

        // Validaciones básicas
        if (!dataForm.gmail || !dataForm.contraseña) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        try {
            const response = await fetch('http://localhost:1234/api/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ gmail: dataForm.gmail, contraseña: dataForm.contraseña }),
            });

            const data = await response.json();
            console.log("datos: ", dataForm.gmail, dataForm.contraseña)
            console.log('Respuesta del backend:', data);

            if (response.ok && data.success) {
                alert(data.message); // Muestra un mensaje de éxito
                localStorage.setItem('token', data.token); // Guarda el token
                navigate('/inicio'); // Redirige al dashboard
            } else {
                alert(data.message || 'Error desconocido');
            }
        } catch (error) {
            console.error('Error durante el inicio de sesión:', error);
            alert('Ocurrió un error al intentar iniciar sesión.');
        }
    };

    return (
        <div className="inicio-container">
            <form onSubmit={handleLogin}>
                <div className="campos-container">
                    {/* Campo de correo electrónico */}
                    <input
                        onChange={(e) => setDataForm({ ...dataForm, gmail: e.target.value })}
                        value={dataForm.gmail}
                        className="input-info"
                        type="email"
                        placeholder="Gmail"
                        required
                    />
                    {/* Campo de contraseña */}
                    <input
                        onChange={(e) => setDataForm({ ...dataForm, contraseña: e.target.value })}
                        value={dataForm.contraseña}
                        className="input-info"
                        type="password"
                        placeholder="Contraseña"
                        required
                    />
                    {/* Botón de inicio de sesión */}
                    <button type="submit" className="boton-info ingresar">
                        Ingresar
                    </button>
                    {/* Enlace para recuperar contraseña */}
                    <span>
                        <a href="#">¿Has olvidado tu contraseña?</a>
                    </span>
                    {/* Enlace para registrarse */}
                    <Link to="/registro" className="boton-info registrarse">
                        Regístrate
                    </Link>
                </div>
            </form>
        </div>
    );
}