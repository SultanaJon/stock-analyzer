import React, {Component} from 'react'
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

const styles = {
    borderColor: 'teal.500',
    variant: 'filled',
    fontColor: 'teal',
    icon: {
        variant: 'ghost',
        color: '#b3b3b3',
        height: '1.75rem'
    }
}

class StandardInput extends Component {
    render(){
        return (
            <Input 
                focusBorderColor={styles.borderColor}
                variant={styles.variant}
                color={styles.fontColor} 
                
                {...this.props}
                />
        )
    }
}

class PasswordInput extends Component {

    constructor(props){
        super(props)

        this.state = {
            show: false
        }
    }

    handlePasswordShowClick = () => this.setState({show: !this.state.show})

    render(){
        return (
            <InputGroup size={this.props.size}>
                <Input
                    focusBorderColor={styles.borderColor}
                    variant={styles.variant}
                    pr='4.5rem'
                    type={this.state.show ? 'text' : 'password'}
                    color={styles.fontColor}

                    {...this.props}
                />
                <InputRightElement 
                    width='4.5rem'>    

                    <IconButton
                        disabled={this.props.disabled}
                        variant=''
                        icon={<ViewIcon
                            h={styles.icon.height}
                            color={styles.icon.color}
                            variant={styles.icon.variant}
                            style={{boxShadow:'none'}}
                            onClick={this.handlePasswordShowClick}/>}>
                    </IconButton>
                </InputRightElement>
            </InputGroup>
        )
    }
}

export {
    StandardInput,
    PasswordInput
}