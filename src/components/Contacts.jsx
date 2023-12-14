import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <>

                <div className='contact'>
                    <h1 className='header-text'>Contact</h1>
                    <form className='contact-form' action="/takemsg" method="post">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' />
                        <br />
                        <label htmlFor="header">Email</label>
                        <input type="text" name='header' />
                        <br />
                        <label htmlFor="message">Email</label>
                        <input type="text" name='message' />
                    </form>
                </div>

            </>
        )
    }
}
