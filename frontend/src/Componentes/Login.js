import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', {
                usuario: usuario,
                password: password
            });
            if (response.data.message === 'Inicio de sesión exitoso') {
                navigate('/inicio');
            }
        } catch (error) {
            alert('Error: Falló el inicio de sesión. Verifica tus credenciales.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="usuario" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
