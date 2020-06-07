import React from "react"
import Emoji from "./emoji"
import "../styling/terminal.css"

const Terminal = () => {
    return (
        <div className="terminal-wrapper">
            <div className="terminal-bar">
                <div className="terminal-buttons">
                    <div className="circle red-dot"></div>
                    <div className="circle yellow-dot"></div>
                    <div className="circle green-dot"></div>
                </div>
                <div className="terminal-title">
                    <Emoji symbol="🏠" label="house"/>
                    <p>estherbaek</p>
                </div>
                <div className="terminal-empty">
                </div>
            </div>
            <div className="terminal-body">
                <div className="terminal-first-line">
                    <p className="terminal-first-line-comp">{"guest@esthers-website ~ % "}</p>
                    <p className="about-cat" style={{width: "fit-content"}}>{"cat about.txt"}</p>
                </div>
                
                <p className="about-cat-body">
                    <br/>
                    <br/>
                    <Emoji symbol="💁🏻‍♀️" label="hello"/> {"Hi there! My name is Esther Baek."}
                    <br/>{"I'm a software engineer, life-long learner, and a chicken nugget enthusiast."}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Emoji symbol="✉️" label="email"/>{" Email: "}<a href="mailto:esther.baek5@gmail.com">esther.baek5@gmail.com</a>
                    <br/>
                    <Emoji symbol="👩🏻‍💼" label="social"/>{" LinkedIn: "}<a href="https://www.linkedin.com/in/ebaek5/">ebaek5</a>
                    <br/>
                    <Emoji symbol="👩🏻‍💻" label="github"/>{" GitHub: "}<a href="https://github.com/ebaek">ebaek</a>
                </p>
            </div>
        </div>
    )
}

export default Terminal