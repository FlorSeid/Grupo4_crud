import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';
import Login from './Componentes/Login';
import Registrar from './Componentes/Registrar';
import Inicio from './Componentes/Inicio';
import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';
import { ChakraProvider, Flex, Box, extendTheme } from '@chakra-ui/react';
import { AuthProvider } from './Componentes/AuthContext'; // Importar el AuthProvider
import PrivateRoute from './Componentes/PrivateRoute';   // Importar la ruta privada

// Crear un tema que use modo oscuro por defecto
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

function App() {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <Flex direction="column" minH="100vh" bg="gray.800" color="white">
                        <NavBar />
                        <Box flex="1">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/registrar" element={<Registrar />} />
                                {/* Ruta protegida */}
                                <Route 
                                    path="/inicio" 
                                    element={
                                        <PrivateRoute>
                                            <Inicio />
                                        </PrivateRoute>
                                    } 
                                />
                            </Routes>
                        </Box>
                        <Footer />
                    </Flex>
                </Router>
            </AuthProvider>
        </ChakraProvider>
    );
}

export default App;

