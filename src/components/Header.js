import React from 'react'

const Header = props => {
    return (
        <header className="header">
            <h1>To do list</h1>
            <span className="tagline">{props.tagline}</span>
        </header>
    )
}

export default Header
