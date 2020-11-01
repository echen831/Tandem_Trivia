import React, { useState, useEffect } from 'react';
import { Footer } from './footer'; 
import Intro from '../intro.gif';

const INSTRUCTIONS = [
    "You will get 10 random multiple choice trivia questions.",
    "Select the best answer out of 4 choices.",
    "Press submit when you are ready.",
    "You will see the correct answer after you submit.",
    "See how many can you answer correctly!"
]

export const Splash = () => {

    const [ show, setShow ] = useState(true);
    const [ currIdx, setCurrIdx ] = useState(0); 

    useEffect( () => {
        setTimeout(scroll, 2500);
    })

    const scroll = () => {
        if (currIdx === 4) {
            setCurrIdx(0);
        } else {
            setCurrIdx(currIdx + 1)
        }
    }

    return (
        <div className={ show ? 'splash-container' : 'hide'}>
            <div className='splash'>
                <div className='splash-header'>
                    <h1>Lets Play Tandem Trivia!</h1>
                    <div className='close-btn-container'>
                        <p className='close-btn' onClick={() => setShow(false)}>&times;</p>
                    </div>
                </div>
                <div className='instruction-container'>
                    <div className='instructions'>
                        <h3>Instructions: </h3>
                        <ul>
                            { INSTRUCTIONS.map((instruction, idx) => (
                                <p id={currIdx === idx ? 'current' : '' }>{`${idx+1}) ${instruction}`}</p>
                            ))}
                        </ul>
                        <p className='submit-btn' onClick={() => setShow(false)}>Play Now!</p>
                    </div>
                    <div className='intro'>
                        <img src={Intro} alt=""/>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}