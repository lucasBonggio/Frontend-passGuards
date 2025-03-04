import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registro.css';

export default function Registro() {
    const [formData, setFormData] = useState({
        nombre_usuario: '',
        nombre: '',
        apellido: '',
        dia: '',
        mes: '',
        año: '',
        genero: '',
        email: '',
        contraseña: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    
    const handleRegister = async () => {
        // Validaciones básicas
        if (
            !formData.nombre_usuario ||
            !formData.nombre ||
            !formData.apellido ||
            !formData.dia ||
            !formData.mes ||
            !formData.año ||
            !formData.genero ||
            !formData.email ||
            !formData.contraseña
        ) {
            alert('Por favor, completa todos los campos.');
            return;
        }
    
        try {
            
            const response = await fetch('http://localhost:1234/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            
            if (response.ok && data.success) {
                setFormData({
                    nombre_usuario: '',
                    nombre: '',
                    apellido: '',
                    dia: '',
                    mes: '',
                    año: '',
                    genero: '',
                    email: '',
                    contraseña: '',
                });
                navigate('/login'); // Redirige al login después del registro
                alert(data.message || 'Registro exitoso');
            } else {
                alert(data.message || 'Error desconocido');
            }
        } catch (error) {
            console.error('Error durante el registro:', error);
            alert('Ocurrió un error al intentar registrarse.');
        }
    };

    return (
        <div className="contenedor-registro-completo">
            <h3 className='titulo-registro'>PASSGUARDS</h3>
            <div className="registro-container">

                <div className="informacion-principal">
                <input
                        type="text"
                        className="input-nombre_usuario"
                        placeholder="Usuario"
                        name="nombre_usuario"
                        value={formData.nombre_usuario}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        className="input-nombre"
                        placeholder="Nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        className="input-apellido"
                        placeholder="Apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="fechas-container">
                    <select name="dia" value={formData.dia} onChange={handleChange}>
                        <option value="">Día</option>
                        {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select name="mes" value={formData.mes} onChange={handleChange}>
                        <option value="">Mes</option>
                        {[
                            'Enero',
                            'Febrero',
                            'Marzo',
                            'Abril',
                            'Mayo',
                            'Junio',
                            'Julio',
                            'Agosto',
                            'Septiembre',
                            'Octubre',
                            'Noviembre',
                            'Diciembre',
                        ].map((mes) => (
                            <option key={mes} value={mes}>
                                {mes}
                            </option>
                        ))}
                    </select>
                    <select name="año" value={formData.año} onChange={handleChange}>
                        <option value="">Año</option>
                        {[...Array(120)].map((_, i) => {
                            const year = 2025 - i;
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <div className="genero-container">
                    <span>
                        <label htmlFor="hombre">Masculino</label>
                        <input
                            type="radio"
                            id="hombre"
                            name="genero"
                            value="Masculino"
                            checked={formData.genero === 'Masculino'}
                            onChange={handleChange}
                        />
                    </span>
                    <span>
                        <label htmlFor="mujer">Femenino</label>
                        <input
                            type="radio"
                            id="mujer"
                            name="genero"
                            value="Femenino"
                            checked={formData.genero === 'Femenino'}
                            onChange={handleChange}
                        />
                    </span>
                    <span>
                        <label htmlFor="otro">Otro</label>
                        <input
                            type="radio"
                            id="otro"
                            name="genero"
                            value="Otro"
                            checked={formData.genero === 'Otro'}
                            onChange={handleChange}
                        />
                    </span>
                </div>

                <input
                    className="input-datos"
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input-datos"
                    type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                />

                <button className="boton-registro" onClick={handleRegister}>
                    Registrarte
                </button>

                <span className="logear">
                    <Link to="/login">¿Ya tienes una cuenta?</Link>
                </span>
            </div>
        </div>
    );
}