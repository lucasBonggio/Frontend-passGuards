import './Perfil.css';
import perfil from '../../img/perfil.jpg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Perfil() {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No hay token de autenticación.');
                }

                const response = await fetch('http://localhost:1234/api/auth/perfil', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });


                if (!response.ok) {
                    throw new Error('Error al cargar los datos del perfil.');
                }

                const data = await response.json();
                setUsuario(data);
                
            } catch (err) {
                setError(err.message);
                console.error('Error al cargar el perfil:', err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPerfil();
    }, []);

    if (loading) return <p>Cargando datos del perfil...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!usuario) return <p>No se encontraron datos del perfil.</p>;

    function normalizarFecha(dateString) {
        if (!dateString) return 'Fecha no disponible';
    
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Fecha inválida';
    
        // Formato DD/MM/YYYY
        const formattedDate = date.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    
        return formattedDate;
    }

    return (
        <div className="contenedor-perfil">
            <div className="cont-foto-perfil">
                <img className='foto-perfil' src={perfil} alt="Foto de perfil" />
                
                <span className='nombre-usuario'>{usuario.usuario.nombre_usuario || 'No disponible'}</span>
                <div className="cont-info-secu">
                    <span>Fecha de creación:</span>
                    <span>{normalizarFecha(usuario.usuario.fecha_creacion) || 'No disponible'}</span>
                </div>
            </div>

            <div className="cont-principal">
                <h4>Nombre:</h4>
                <span className='principal-nombre'>{usuario.usuario.nombre || 'No disponible'}</span>
                <h4>Apellido:</h4>
                <span className='principal-apellido'>{usuario.usuario.apellido || 'No disponible'}</span>
                <h4>Correo electrónico:</h4>
                <span>{usuario.usuario.gmail || 'No disponible'}</span>
                <h4>Fecha de nacimiento:</h4>
                <span>{normalizarFecha(usuario.usuario.fecha_nacimiento) || 'Fecha de nacimiento no disponible'}</span>
                <h4>Género:</h4>
                <span>{usuario.usuario.genero || 'No disponible'}</span>
                
                <button className="boton-actualizar">
                    ACTUALIZAR CONTRASEÑA
                </button>
            </div>
        </div>
    );
}