import { Center, Square, Box, Stack, Input, InputGroup, InputRightElement, Button, ButtonGroup, Image, IconButton } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import React from 'react'

export default function LoginPage() {
    const [show, setShow] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    
    const handlePasswordShowClick = () => setShow(!show)
    const handleSignInClick = () => setIsLoading(true)
    return (
        <Center bg='#f2f2f2' h='100%' w='100%'>
            <Square 
                bg='white'
                w='350px'
                h='300px'
                style={{borderRadius: '20px'}}>
                <Stack spacing={8}>
                    <Image src='/vercel.svg'/>
                    <Box>
                        <Stack spacing={3}>
                            <Input focusBorderColor='teal.500' variant='filled' placeholder='Email' color='teal' size='md' />
                            <InputGroup size='md'>
                                <Input
                                    focusBorderColor='teal.500' 
                                    variant='filled' 
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    color='teal'
                                />
                                <InputRightElement width='4.5rem'>
                                    <IconButton
                                        variant=''
                                        icon={<ViewIcon
                                        h='1.75rem'
                                        color='#b3b3b3'
                                        variant='ghost'
                                        style={{boxShadow:'none'}}
                                        onClick={handlePasswordShowClick}/>}>

                                        </IconButton>
                                </InputRightElement>
                            </InputGroup>
                        </Stack>
                    </Box>
                    <Box>
                        <ButtonGroup spacing='3'>
                            <Button isLoading={isLoading} colorScheme='teal' variant='solid' onClick={handleSignInClick}>
                                Sign In
                            </Button>
                            <Button colorScheme='teal' variant='outline'>
                                Sign Up
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Stack>
            </Square>
        </Center>
    )
}