import React, { useState } from 'react';
import Img1 from "../assets/pic_1.png";
import Img2 from "../assets/pic_2.png";
import Img3 from "../assets/pic_3.png";
import Img4 from "../assets/pic_4.png";

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
                <div>
                    <div className='image-container'>
                        <img src={Img1} alt=""/>
                        <p>You will get 10 random multiple choice questions</p>
                    </div>
                    <div className='image-container'>
                        <p>Choose the correct answer out of 4 possible choices</p>
                        <img src={Img2} alt=""/>
                    </div>
                    <div className='image-container'>

                        <img src={Img3} alt="" />
                        <p>Submit your answer</p>
                    </div>
                    <div className='image-container'>
                        <p>10 points per correct answer</p>
                        <img src={Img4} alt="" />
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