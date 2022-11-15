import React, {useEffect} from 'react';
import M from 'materialize-css'
import { Link, useParams } from 'react-router-dom';

const background = require('../Images/background.jpg')
const forrest = require('../Images/bigforrest.jpg')
const path = require('../Images/path.jpg')

const Slide = ()=> {

    useEffect(() => {
        let ele = document.querySelector(".slider");
        M.Slider.init(ele);
    }, []);

    return(
        <div className="slider">
            <ul className='slides'>
                <li>
                    <img src={background} alt="First used background"></img>
                </li>
                <li>
                    <img src={forrest} alt="Second used background"></img>
                </li>
                <li>
                    <img src={path} alt="Second used background"></img>
                </li>
            </ul>
        </div>
    )

}

export default Slide;