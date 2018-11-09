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
                    <div>
                        <p>Designed and built by James Lee at Coventry University for the 304CEM module.</p>
                    </div>
                </div>
                <div className="right-justify">

                </div>
            </footer>
        )
    }
}

export { Footer }
