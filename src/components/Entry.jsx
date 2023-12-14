import React, { Component } from 'react'
import 'animate.css';
import '../assets/css/Entry.css'
import TypingAnimator from 'react-typing-animator';
import Nav from './Nav';

export default class Entry extends Component {
    render() {

        const texts = ["Front-end Developer ", "Mobile Developer ", "Innovator "];
        return (
            <div className='entryy'>
                <Nav/>
                <div className='entry'>
                    <h1 className="animate__animated animate__fadeInUp header-text">Hi, I'm Ahmet!</h1>
                    <h2 className="animate__animated animate__fadeInUp">I'm a <TypingAnimator
                    textArray={texts}
                    loop
                    backspace
                    textColor='#c9c9c9'
                    cursorColor='#c9c9c9'
                    fontSize="1em"
                    typingSpeed={90}
                    delaySpeed={1000}
                    /></h2>
                </div>
            </div>
        )
    }
}
