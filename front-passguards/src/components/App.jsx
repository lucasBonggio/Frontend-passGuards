import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav.jsx';
import Login from './Login/Login.jsx';
import Registro from './Registro/Registro.jsx';
import Pestanas from './Pestañas/Pestanas.jsx';
import Inicio from './Inicio/Inicio.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import './App.css';

export default function App() {
    return (
        <div className="pagina-principal">
            {/* Sistema de rutas */}
            <Routes>
                {/* Ruta pública para el login */}
                <Route path="/login" element={<Login />} />

                {/* Ruta pública para el registro */}
                <Route path="/registro" element={<Registro />} />

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

                {/* Ruta de error (404) */}
                <Route path="*" element={<h2>Página no encontrada</h2>} />
            </Routes>
        </div>
    );
}