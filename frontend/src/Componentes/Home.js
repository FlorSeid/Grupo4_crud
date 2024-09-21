import React from 'react';
import { Box, Heading, Text, Button, Stack, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import testImage from '../Images/test.jpg';

export default function Home() {
    const navigate = useNavigate();

    return (
        <Box 
            bgGradient="linear(to-r, gray.900, gray.800)"  // Gradiente minimalista
            color="white" 
            minH="100vh" 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            textAlign="center"
            px={4}
        >
            <Box 
                maxW="800px"
                bg="gray.700"  // Fondo del contenido para dar contraste
                p={8} 
                rounded="lg" 
                shadow="xl"
                opacity="0.95"  // Ligera transparencia para un toque minimalista
            >
                <Heading as="h1" size="2xl" mb={6} fontWeight="bold">
                    ¡Bienvenido a Nuestra Aplicación!
                </Heading>
                <Text fontSize="lg" mb={6}>
                    Explora las funcionalidades de nuestra plataforma. Inicia sesión o regístrate para comenzar.
                </Text>
                
                {/* Imagen decorativa opcional */}
                <Image 
                    src={testImage} 
                    alt="Imagen decorativa" 
                    rounded="lg" 
                    mb={6}
                    shadow="lg"
                />

                <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
                    <Button colorScheme="blue" onClick={() => navigate('/login')}>
                        Iniciar Sesión
                    </Button>
                    <Button variant="outline" colorScheme="blue" onClick={() => navigate('/registrar')}>
                        Registrarse
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}
