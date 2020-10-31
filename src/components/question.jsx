import React, { useState, useRef } from 'react';
import * as Util from '../util';

export const Question = ({ question, score, handleSubmit }) => {
    const [ answers, setAnswers ] = useState(Util.shuffle([...question.incorrect, question.correct]));
    const [ currAnsIdx, setCurrAnsIdx ] = useState(0);
    const [ correctAns, setCorrectAns ] = useState(question.correct);
    const [ currAns, setCurrAns ] = useState('');
    const [ submitted, setSubmitted ] = useState(false);

    const test1 = useRef();
    const test2 = useRef();
    const test3 = useRef();
    const test4 = useRef();

    const test = [test1, test2, test3, test4]

    const submit = () => {
        if (currAns.trim() === '') return;

        if (test1.current.innerText === correctAns) {
            test1.current.style.backgroundColor = 'green';
        } else {
            test1.current.style.opacity = 0.5;
        }
        if (test2.current.innerText === correctAns) {
            test2.current.style.backgroundColor = 'green';
        } else {
            test2.current.style.opacity = 0.5;
        }
        if (test3.current.innerText === correctAns) {
            test3.current.style.backgroundColor = 'green';
        } else {
            test3.current.style.opacity = 0.5;
        }

        if (test4.current.innerText === correctAns) {
            test4.current.style.backgroundColor = 'green';
        } else {
            test4.current.style.opacity = 0.5;
        }
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 1500);
    }

    return (
        <div className='question-container'>
            <div className={'answer-container'}>
                {answers.map((answer, idx) => (
                    <div
                        id={idx+1 === currAnsIdx ? 'selected' : ''}
                        className='answer'
                        onClick={()=>{setCurrAnsIdx(idx+1); setCurrAns(answer)}}
                        ref={test[idx]}
                    >
                        {answer}
                    </div>
                ))}

            </div>
            <p id={!submitted ? '' : 'hide'} 
               className='submit-btn'
                onClick={() => {handleSubmit(correctAns, currAns); submit()}}>Submit</p>
            <p id={submitted ? '' : 'hide'}
               className='score'
                >Current Score: {score}</p>
        </div>
    )
}