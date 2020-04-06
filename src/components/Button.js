import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

// Using consumer
class Button extends React.Component{
    renderSubmit(value){
        return value === 'english' ? 'Submit' : 'Enviar'
    }
    render(){
        return(
            <div>
                <button className="ui button primary">
                    <LanguageContext.Consumer>
                        {(value) => this.renderSubmit(value)}
                    </LanguageContext.Consumer>
                </button>
            </div>
        )
    }
}

export default Button