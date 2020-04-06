import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

// Using consumer
class Button extends React.Component{
    renderSubmit(value){
        return value === 'english' ? 'Submit' : 'Enviar'
    }

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(){
        return(
            <div>
                <ColorContext.Consumer>
                {(color) => this.renderButton(color) }
                </ColorContext.Consumer>
            </div>
        )
    }
}

export default Button