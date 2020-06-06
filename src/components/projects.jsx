import React from 'react';
import '../styling/projects.css';

const Projects = () => {
    return(
        <div className="projects-wrapper">
            <h2>Projects</h2>
            
            <div className="projects-scroll">
                <h2>2020</h2>
                <div className="bottom-border"></div>

                <div className="project-container">
                    <div className="thumbnail-container">
                        <a href="https://estherbaek.com">
                            <img className="thumbnail" alt="personal website" src={process.env.PUBLIC_URL + '/projects/website.png'} /> 
                        </a>
                    </div>

                    <div className="projects-about">
                        <h3>Personal Website</h3>
                        <p>Chances are you're viewing my personal website right now! My original website was
                            based on a template and I wanted to put my React skills to the test. I'd like to add
                            a blog as a future feature. More to come soon :) 
                        </p>
                        
                        <p>Read more <a href="https://github.com/ebaek/ebaek.github.io">here</a>.</p>
                        <p>Live link <a href="https://estherbaek.com">here</a>.</p>
                    </div>
                </div>

                <h2>2019</h2>
                <div className="bottom-border"></div>
                <div className="project-container">
                    <div className="thumbnail-container">
                        <a href="https://merrymoney.herokuapp.com">
                            <img className="thumbnail" alt="merry money" src={process.env.PUBLIC_URL + '/projects/merrymoney.png'} /> 
                        </a>
                    </div>

                    <div className="projects-about">
                        <h3>Merry Money</h3>
                        <p>Clone of popular stock trading app Robinhood.
                        I chose to work on a Robinhood clone because the application combines the simplicity of a beautiful interface and the
                        complexity of conveying critical investment information to the average investor. I partitioned MerryMoney into 6 main
                        phases during a 10-day sprint in which I used React, Redux, Javascript, and Ruby on Rails. These phases included
                        implementing user authentication, extracting and visualizing real-time company information, displaying user portfolio
                        performance, handling user transactions, and enabling the creation of company watchlists. </p>
                        
                        <p>Read more <a href="https://github.com/ebaek/MerryMoney">here</a>.</p>
                        <p>Live link <a href="https://merrymoney.herokuapp.com/#/">here</a>.</p>
                    </div>
                </div>

                <div className="project-container">
                    <div className="thumbnail-container">
                        <a href="https://ebaek.github.io/NBAShotTracker/">
                            <img className="thumbnail" src={process.env.PUBLIC_URL + '/projects/nbashot.png'} alt="nbashot" />
                        </a>
                    </div>

                    <div className="projects-about">
                        <h3>NBA Shot Tracker</h3>
                        <p>Data visualization tool to track player shot performance.
                        As an avid basketball fan, I wanted to create a tool to enable other fans to see the shot performance of their
                        favorite players. While the NBA website has a plethora of data that includes several variations of the shot chart,
                        the goal of creating NBA Shot Tracker was to enable users to see the shot performance of individual players by game.
                        
                        Users can filter the data by game (date),
                        quarter, and defending team from the 2010-2017 seasons. Users can also compare the indivial player's performance against
                        various metrics including (field goal attempts v.s. team (FGA), field goals made v.s. team (FGM), distance, shot- type,
                        and more</p>
                        
                        <p>Read more <a href="https://github.com/ebaek/NBAShotTracker">here</a></p>
                        <p>Live link <a href="http://www.estherbaek.com/NBAShotTracker/">here</a>.</p>
                    </div>
                </div>

                <div className="project-container">
                    <div className="thumbnail-container">
                        <a href="https://ebaek.github.io/tweetybird/">
                            <img className="thumbnail" src={process.env.PUBLIC_URL + '/projects/tweetybird.png'} alt="nbashot" />
                        </a>
                    </div>

                    <div className="projects-about">
                        <h3>Tweety Bird</h3>
                        <p>Clone of addictive game Flappy Bird.
                            Flappy Bird will always stand out to me as a childhood favorite. I cloned the game because I wanted to learn
                            more about sprites and how to account for collision detection. This was a super fun project and I hope to write more games in the
                            future!
                        </p>
                        
                        <p>Read more <a href="https://github.com/ebaek/tweetybird">here</a></p>
                        <p>Live link <a href="http://www.estherbaek.com/tweetybird/">here</a>.</p>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Projects