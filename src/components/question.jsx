import React, { useState, useRef } from 'react';
import * as Util from '../util';

export const Question = ({ question, questionIdx, score, handleSubmit, ans }) => {
    const [ answers, setAnswers ] = useState(ans);
    const [ currAnsIdx, setCurrAnsIdx ] = useState(0);
    const [ correctAns, setCorrectAns ] = useState(question.correct);
    const [ currAns, setCurrAns ] = useState('');
    const [ submitted, setSubmitted ] = useState(false);

    const answer1 = useRef();
    const answer2 = useRef();
    const answer3 = useRef();
    const answer4 = useRef();

    const refs = [answer1, answer2, answer3, answer4]

    const submit = () => {
        if (currAns.trim() === '') return;

        if (answer1.current.innerText === correctAns) {
            answer1.current.style.backgroundColor = 'green';
        } else if (answer1.current.innerText === currAns && answer1.current.innerText !== correctAns) {
            answer1.current.style.opacity = 0.5;
        } else {
            answer1.current.style.backgroundColor = 'red';
            answer1.current.style.opacity = 0.5;
        }
        if (answer2.current.innerText === correctAns) {
            answer2.current.style.backgroundColor = 'green';
        } else if (answer2.current.innerText === currAns && answer2.current.innerText !== correctAns) {
            answer2.current.style.opacity = 0.5;
        } else {
            answer2.current.style.backgroundColor = 'red';
            answer2.current.style.opacity = 0.5;
        }
        if (answer3.current.innerText === correctAns) {
            answer3.current.style.backgroundColor = 'green';
        } else if (answer3.current.innerText === currAns && answer3.current.innerText !== correctAns) {
            answer3.current.style.opacity = 0.5;
        } else {
            answer3.current.style.backgroundColor = 'red';
            answer3.current.style.opacity = 0.5;   
        }
        if (answer4.current.innerText === correctAns) {
            answer4.current.style.backgroundColor = 'green';
        } else if (answer4.current.innerText === currAns && answer4.current.innerText !== correctAns) {
            answer4.current.style.opacity = 0.5;
        } else {
            answer4.current.style.backgroundColor = 'red';
            answer4.current.style.opacity = 0.5; 
        }
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    }

    return (
        <div className={ !submitted ? 'questions-container fade-in' : 'questions-container fade-out'}>
            <div>
                <h2>Question {questionIdx + 1}:</h2>
                <h3>{question.question}</h3>
            </div>
            <div className={'answer-container'}>
                {answers.map((answer, idx) => (
                    <div
                        id={idx+1 === currAnsIdx ? 'selected' : ''}
                        className='answer'
                        onClick={()=>{setCurrAnsIdx(idx+1); setCurrAns(answer)}}
                        ref={refs[idx]}
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