import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import Login from './Componentes/Login';
import Registrar from './Componentes/Registrar';
import Inicio from './Componentes/Inicio';
import NavBar from './Componentes/NavBar';


function App() {
    return (
        <Router>
            <div>
                <NavBar /> {/* Ya se importa el componente NavBar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrar" element={<Registrar/>} />
                    <Route path="/inicio" element={<Inicio/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
