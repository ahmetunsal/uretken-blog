import React, { Component } from 'react'
import '../assets/css/Navbar.css';

export default class Nav extends Component {
    render() {
        return (
            <>
                <div className='navigation-bar'>
                    <div className='profile-photo'>
                        <img  src="https://cdn.discordapp.com/widget-avatars/evwJqCWzDFW9PuSIxJnL43IokoqSOLWTTkpGie5aL8I/PIegZ52kMRrhZj6NHbmTKvfy5XVE0LSXUjMXh-ldiVr6p-TpnQ0SMt1o2iqAMe3gfs08glRJq67FMCM_t31wOUaj5X6UIgq8z6njaypPzEmp3UkmA5FFd5gMrkehXK8dZsJNXVAJHY0C6cA" alt="" />
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </>
        )
    }
}
