import React, { Component } from 'react'
import '../assets/css/About.css'

export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <h1 className='header-text'>About me</h1>
                <div className='about-container'>
                    <h3>I'm Ahmet. I'm 18 year-old university student in Konya, Turkiye. <br /><br />
                        For 4 years I have been interested in software and I am constantly trying to improve myself.<br /><br />
                        Throughout my life, I have always been interested in electronic devices and derivatives, I always tried to fix things that broke.<br /> <br />
                        Thanks to this, I have always had a solution-oriented and stable structure.<br /> <br />
                        Nowadays, I am looking for new projects that I can participate in to improve myself. <br /><br />
                        My hobbies are playing guitar, listening to music, hiking, exploring new places, learning.</h3>

                        <img className='about-me' src="me.png" alt="" />
                </div>
            </div>
        )
    }
}
