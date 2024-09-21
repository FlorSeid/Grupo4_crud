import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Footer() {
    return (
        <Box as="footer" bg="gray.900" py={4} mt={8} boxShadow="md">
            <Text textAlign="center" color="gray.500" fontSize="sm">
                © {new Date().getFullYear()} - Grupo 4. Desarrollo de software.
            </Text>
        </Box>
    );
}

export default Footer;
