import { Center, Square, Box, Stack, Image, VStack } from '@chakra-ui/react'
import React, {Component} from 'react'
import Link from 'next/link'
import {StandardInput, PasswordInput} from '../components/input';
import { FilledButton, OutlinedButton } from '../components/button';

class LoginPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
            disabled: false
        }
    }

    // todo: delete this function.
     sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      }

     handleSignInClick = async () => {
         this.setState({
             isLoading: true,
             disabled: true
         })

         // todo: delete this code.
         await this.sleep(10000)

         try{
            // todo: attempt to log the user in with firebase.
         } catch(error){

         }

         this.setState({
            isLoading: false,
            disabled: false
         })
     }

    render(){
        return (
            <Center bg='#f2f2f2' h='100%' w='100%'>
                <Square 
                    bg='white'
                    w='350px'
                    h='325px'
                    style={{borderRadius: '10px'}}>

                    <Stack spacing={8}>
                        <Center>
                            <Image 
                                src='/vercel.svg' 
                                maxWidth='150'/>
                        </Center>

                        <Box>
                            <Stack spacing={3}>
                                <StandardInput 
                                    disabled={this.state.disabled}
                                    placeholder='Email'
                                    size='md'/>

                                <PasswordInput 
                                    disabled={this.state.disabled} 
                                    placeholder='Password' 
                                    size='md'/>
                            </Stack>
                        </Box>
                        
                        <Box>
                            <Center>
                                <VStack w='100%'>
                                    <FilledButton 
                                        text='Sign In'
                                        isLoading={this.state.isLoading}
                                        onClick={this.handleSignInClick}/>
    
                                    <OutlinedButton 
                                        disabled={this.state.disabled} 
                                        text='Sign Up'/>
                                </VStack>
                            </Center>
                        </Box>
                    </Stack>
                </Square>
            </Center>
        )
    }
}

export default LoginPage