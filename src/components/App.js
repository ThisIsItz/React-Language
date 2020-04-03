import React from 'react'
import UserCreate from './UserCreate'

class App extends React.Component{
    state = { language: 'english' }

    onLanguageChange = language => {
        this.setState({ language: language })
    }

    render(){
        return(
            <div className="ui container">
                    Select a language:
                    <i className="flag uk" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag es" onClick={() => this.onLanguageChange('spanish')} />
                <UserCreate/>
            </div>
        )
    }
}

export default App