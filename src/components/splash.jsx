import React, { useState } from 'react';

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
                <div className='splash-footer'>
                        <p>Created by: Eric Chen</p>
                        <p>Please check out my portfolio <a href="https://echen831.github.io/Eric-Chen/" target='_blank'>here!</a></p>
                </div>
            </div>

        </div>
    )
}