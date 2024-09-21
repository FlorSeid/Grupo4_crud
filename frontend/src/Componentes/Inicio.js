import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Inicio() {
  return (
    <Box textAlign="center" mt={8} p={6}>
        <Heading as="h1" size="2xl" mb={4}>
            ¡Estás logueado!
        </Heading>
        <Text fontSize="xl">
            Bienvenido a tu página de inicio.
        </Text>
    </Box>
  );
}
