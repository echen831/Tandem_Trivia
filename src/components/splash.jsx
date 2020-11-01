import React, { useState } from 'react';
import Intro from '../intro.gif';


export const Splash = () => {

    const [ show, setShow ] = useState(true);

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
                            <p>{"1) You will get 10 random multiple choice trivia questions."}</p>
                            <p>{"2) Select the best answer out of 4 choices."}</p>
                            <p>{"3) Press submit when you are ready."}</p>
                            <p>{"4) You will see the correct answer after you submit."}</p>
                            <p>{"5) See how many can you answer correctly!"}</p>
                        </ul>
                        <p className='submit-btn' onClick={() => setShow(false)}>Play Now!</p>
                    </div>
                    <div className='intro'>
                        <img src={Intro} alt=""/>
                    </div>
                </div>
                <div className='splash-footer'>
                        <p>Created by: Eric Chen</p>
                        <div className='footer-links'>
                            <a href="https://github.com/echen831" target='_blank'>Github</a>
                            <a href="https://www.linkedin.com/in/eric-chen-782b951a9/" target='_blank'>LinkedIn</a>
                            <a href="https://echen831.github.io/Eric-Chen/" target='_blank'>Portfolio</a>
                        </div>
                </div>
            </div>

        </div>
    )
}