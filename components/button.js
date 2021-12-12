import React, {Component} from 'react'
import { Button } from '@chakra-ui/react'

const getCustomProps = (variant, isLoading) => {
    return {
        w: '100%', 
        isLoading: isLoading,
        colorScheme: 'teal',
        variant: variant
    }
}

class FilledButton extends Component {
    render(){
        return (
            <Button 
                {...getCustomProps('solid', false)}
                {...this.props}>

                {this.props.text}
            </Button>
        )
    }
}

class OutlinedButton extends Component {
    render(){
        return (
            <Button
                {...getCustomProps('outline', false)}
                {...this.props}>
            
                {this.props.text}
            </Button>
        )
    }
}

export {
    FilledButton,
    OutlinedButton
}