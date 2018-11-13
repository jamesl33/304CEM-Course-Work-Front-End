import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="left-justify">
                    <ul>
                        <a href="//github.coventry.ac.uk/leej64/304CEM-Course-Work-Front-End">GitHub</a>
                        <Link to="/about">About</Link>
                    </ul>
                </div>
                <div className="right-justify">
                    <p>Designed and created by James Lee for 304CEM at Coventry University</p>
                </div>
            </footer>
        )
    }
}

export { Footer }
