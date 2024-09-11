// components/NavBar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate(); // Hook para navegar entre rutas

    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => navigate('/')}>Home</button>
                </li>
                <li>
                    <button onClick={() => navigate('/login')}>Login</button>
                </li>
                <li>
                    <button onClick={() => navigate('/registrar')}>Registrar</button>
                </li>                    
            </ul>
        </nav>
    );
}

export default NavBar;
