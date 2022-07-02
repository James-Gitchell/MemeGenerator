import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="meme_generator\src\images\computer.png"
                className="header--image"
                alt="computerGuy"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Practice React  - Meme Project</h4>
        </header>
    )
}