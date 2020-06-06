import React from 'react';
import Popup from './popup';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';

const Navbar = () => {
    const [listOpen, setListOpen] = React.useState(false);

    return(
        <div>
            {listOpen &&
                <Popup setListOpen={setListOpen} listOpen={listOpen}/>
            }
            <div className="navbar-wrapper">
                <Link className="title" to="/">ESTHER BAEK</Link>
                <button className="nav-list-button" onClick={() => setListOpen(!listOpen)}>
                    {!listOpen && 
                    <svg className="bi bi-list" width="2rem" height="2rem" viewBox="0 0 16 16" fill="slategray" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    }

                    {listOpen && <svg className="bi bi-x" width="2rem" height="2rem" viewBox="0 0 16 16" fill="slategray" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                    </svg>}
                </button>
            </div>
        </div>
        
    );
}

export default Navbar;