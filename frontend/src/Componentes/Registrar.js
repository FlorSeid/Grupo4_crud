import React, { useState } from 'react';
import axios from 'axios'; //pedidos al backend
import { useNavigate } from 'react-router-dom'; //Es para navegar, a que ruta ir 

function Registrar() {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/registrar', { usuario, email, edad: parseInt(edad), password });
            alert('Usuario registrado!');
            navigate('/login'); // Redirige a la página de inicio de sesión
        } catch (error) {
            alert('Error fallo con exito!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="numero" value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Edad" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Registrar;