import React, {Component} from 'react'
import LoginSignUpBox from '../components/login-signup-box'
import { Stack } from '@chakra-ui/react'
import {StandardInput, PasswordInput} from '../components/input';
import { FilledButton } from '../components/button';

class SignUp extends Component {

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

    handleSignUpClick = async () => {
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
            <LoginSignUpBox>
                <Stack spacing={6}>
                    <StandardInput
                        disabled={this.state.disabled}
                        placeholder='Email'/>

                    <PasswordInput
                        disabled={this.state.disabled}
                        placeholder='Password'/>

                    <PasswordInput 
                        disabled={this.state.disabled}
                        placeholder='Confirm Password'/>

                    <FilledButton 
                        disabled={this.state.disabled}
                        isLoading={this.state.isLoading}
                        text='Sign Up'
                        onClick={this.handleSignUpClick}/>
                </Stack>
            </LoginSignUpBox>
        )
    }
}

export default SignUp