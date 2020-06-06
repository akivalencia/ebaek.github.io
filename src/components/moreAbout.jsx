import React from "react";
import "../styling/moreAbout.css"


const MoreAbout = () => {
    return (
        <div className="more-about-wrapper">
            <div className="more-about-rect">
                <div className="more-about-row">
                    <h2 className="more-about-header">More
                        <br></br>
                        About
                        <br></br>
                        Me</h2>
                    <div className="more-about-first-col">
                        <p>Working in {'<tech/>'} has always been a dream of mine (prior to that it was being a rapper).
                            I enjoy the creativity and problem-solving skills involved in software engineering. I love how I'm
                            constantly learning new technologies and debugging pesky bugs.
                            <br></br>
                            <br></br>
                            Currently, I work at IBM as a part of the
                            Cloud Pak Acceleration Team in New York City. I help enterprises migrate their mission critical
                            workloads onto the cloud.
                        </p>
                    </div>
                    <div className="more-about-second-col">
                        <p>In my free time, I enjoy playing with my Shiba Inu Yoko and rooting for my favorite NBA players. When I can,
                            I enjoy playing squash (I played competitively in college). I've also been dabbling in competitive
                            programming.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreAbout