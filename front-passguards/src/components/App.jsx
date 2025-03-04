import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav.jsx';
import Login from './Login/Login.jsx';
import Registro from './Registro/Registro.jsx';
import Pestanas from './Pestañas/Pestanas.jsx';
import Inicio from './Inicio/Inicio.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import './App.css';
import Perfil from './Perfil/Perfil.jsx';
import NavLogin from './NavLogin/NavLogin.jsx';
import Presentacion from './Presentacion/Presentacion.jsx';

export default function App() {
    return (
        <div className="pagina-principal">
            {/* Sistema de rutas */}
            <Routes>
                {/* Ruta pública para el login */}
                <Route path="/login" element={
                    <>
                        <NavLogin />
                        <div className="contenedor-pagina">
                            <Presentacion />
                            <Login  />
                        </div>
                    </>
                    
                }/>
                {/* Ruta pública para el registro */}
                <Route path="/registro" element={
                    <>
                        <NavLogin />
                        <Registro />
                    </>
                }/>
                {/* Ruta protegida para el inicio */}
                <Route
                    path="/inicio"
                    element={
                        <PrivateRoute>
                            <>
                                <Nav /> {/* Nav solo se muestra en rutas protegidas */}
                                <Inicio />
                            </>
                        </PrivateRoute>
                    }
                />
                <Route path='/perfil' element={
                    <PrivateRoute>
                        <>
                            <Nav />
                            <Perfil />
                        </>
                    </PrivateRoute>
                    }/>
                {/* Ruta de error (404) */}
                <Route path="*" element={<h2>Página no encontrada</h2>} />
            </Routes>
        </div>
    );
}