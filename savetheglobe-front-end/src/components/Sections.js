import React, {useEffect} from 'react';
import M from 'materialize-css';

const background = require('../Images/background.jpg')
const forrest = require('../Images/bigforrest.jpg');
const path = require('../Images/path.jpg');

const Sections = () => {

    useEffect(() => {
        let element = document.querySelectorAll(".parallax")
        M.Parallax.init(element);
    }, [])

    return(
        <div className='container'>
            <div className='parallax-container'>
                <div className='parallax'>
                    <img alt="nature1" src={background}/>
                </div>
                <div className='section white center-align'>
                    <h1>Become a donator!</h1>
                </div>
            </div>
            <div className='parallax-container'>
                <div className='parallax'>
                    <img alt="nature2" src={forrest}/>
                </div>
                <div className='section white center-align'>
                    <h1>Become a donator!</h1>
                </div>
            </div>
            <div className='parallax-container'>
                <div className='parallax'>
                    <img alt="nature3" src={path}/>
                </div>
                <div className='section white center-align'>
                    <h1>Become a donator!</h1>
                </div>
            </div>
        </div>
    );
}

export default Sections;