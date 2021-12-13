import { Center, Square, Box, Stack, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import {StandardInput, PasswordInput} from '../components/input';
import { FilledButton, OutlinedButton } from '../components/button';

export default function LoginPage() {
    const [isLoading, setIsLoading] = React.useState(false)
    const handleSignInClick = () => setIsLoading(true)

    return (
        <Center bg='#f2f2f2' h='100%' w='100%'>
            <Square 
                bg='white'
                w='350px'
                h='325px'
                style={{borderRadius: '10px'}}>
                <Stack spacing={8}>
                    <Center>
                        <Image src='/vercel.svg' maxWidth='150'/>
                    </Center>
                    <Box>
                        <Stack spacing={3}>
                            <StandardInput placeholder='Email' size='md'/>
                            <PasswordInput placeholder='Password' size='md'/>
                        </Stack>
                    </Box>
                    <Box>
                        <Center>
                            <VStack w='100%'>
                                <FilledButton 
                                    text='Sign In'
                                    isLoading={isLoading}
                                    onClick={handleSignInClick}/>
                                    
                                <OutlinedButton text='Sign Up'/>
                            </VStack>
                        </Center>
                    </Box>
                </Stack>
            </Square>
        </Center>
    )
}