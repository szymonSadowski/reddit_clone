import { Box } from '@chakra-ui/react';
import React from 'react'

// export type WrapperVariant = {
//     variant?: 'small' | 'regular' | undefined;
// }

interface WrapperProps {
    variant?: 'small' | 'regular' | undefined;
}

export const Wrapper: React.FC<WrapperProps> = ({
    children,
    variant = 'regular',
}) => {
        return (
            <Box 
            mt={8}
            mx="auto" 
            maxW={variant === 'regular' ? '800px' : '400px'} 
            w="100%">
                {children}
            </Box>
        );
}