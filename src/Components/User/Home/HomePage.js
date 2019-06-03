import React, { Component } from 'react'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>Nice to meet you!</h1>
                    <button><Link to='/questionnaire'>Schedule Free Consultation</Link></button>
                </form>
            </div>
        )
    }
}

export default HomePage
