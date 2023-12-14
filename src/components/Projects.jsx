import React, { Component } from 'react'

export default class Projects extends Component {
    render() {

        const projects = [
            {
                id: 1,
                projectName: "React Portfolio",
                projectLink: "",
                projectDesc: "Basit bir blog-portfolyo sitesi."
            }
        ]
        return (
            <>
                <div className='projectss'>
                <h1 className='header-text'>Projects</h1>
                <div className='projects'>
                    <div className="card">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
