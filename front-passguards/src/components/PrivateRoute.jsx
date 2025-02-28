import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Verifica si hay un token
    return token ? children : <Navigate to="/login" />; // Redirige al login si no hay token
};

export default PrivateRoute;