import React, {Component} from 'react'
import { Center, Square } from "@chakra-ui/react";

class LoginSignUpBox extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Center
                bg='#f2f2f2'
                h='100%'
                w='100%'>

                <Square 
                    bg='white'
                    w='350px'
                    h='325px'
                    style={{borderRadius: '10px'}}>

                    {this.props.children}
                </Square>
            </Center>
        )
    }
}

export default LoginSignUpBox