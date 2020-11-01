import React, { useState } from 'react';
import QUESTIONS from '../Apprentice_TandemFor400_Data.json';
import * as Util from '../util';
import { Question } from '../components/question'

export const Game = () => {
    const [ questions, setQuestions ] = useState(Util.shuffle(QUESTIONS).slice(0,10));
    const [ currQuestIdx, setCurrQuestIdx ] = useState(0);
    const [ score, setScore ] = useState(0);

    const handleSubmit = (correctAns, submitAns) => {
        if (submitAns.trim().length === 0) return;

        if (correctAns === submitAns) {
            setScore(score + 10);
        }

        setTimeout(() => setCurrQuestIdx(currQuestIdx + 1), 3000)
    }

    const endMessage = (score) => {

        if (score === 100) {
            return "You have a perfect score!"
        } else if (score >= 80) {
            return "What an amazing score!"
        } else if (score >= 60) {
            return "A couple hicups, but still an honorable score!"
        } else if (score >= 40) {
            return "Maybe try a little harder next time?"
        } else if (score >= 20) {
            return "Were you even trying?"
        } else {
            return "Please press the refresh button and try again!"
        } 
    }

    const reload = () => {
        window.location.reload();
        return false;
    }


    return (
        <div className='game-container'>
            <div>
                { questions.map((question, idx) => (
                    <div id={currQuestIdx !== idx ? 'hide' : ''}>
                        <Question key={idx}
                                  questionIdx={idx}
                                  ans={Util.shuffle([...question.incorrect, question.correct])}
                                  score={score}
                                  question={question}
                                  handleSubmit={handleSubmit}/>
                    </div>
                ))}
            </div>
            <div className='splash-footer'>
                <p>Created by: Eric Chen</p>
                <p>Please check out my portfolio <a href="https://echen831.github.io/Eric-Chen/" target='_blank'>here!</a></p>
            </div>
            <div className='fade-in end-game' id={currQuestIdx === 10 ? '' : 'hide'}>
                <div className='end-container'>
                    <h2>Thank you for playing!</h2>
                    <p>Your Score is: {score}</p>
                    <p>{endMessage(score)}</p>
                    <p className='submit-btn' onClick={reload}>Play Again</p>
                </div>
                <div className='end-img-container'>
                    <img src='https://i.pinimg.com/originals/e5/94/e7/e594e7a30ba52cae164bf95aa6a8651b.gif' alt=""/>
                </div>
            </div>
        </div>
    )

}