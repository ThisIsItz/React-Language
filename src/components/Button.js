import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component{
    static contextType = LanguageContext

    render(){
        console.log(this.context)
        return(
            <div>
                <button className="ui button primary">Submit</button>
            </div>
        )
    }
}

export default Button