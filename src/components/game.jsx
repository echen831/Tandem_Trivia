import React, { useState } from 'react';
import QUESTIONS from '../Apprentice_TandemFor400_Data.json';
import * as Util from '../util';
import { Question } from '../components/question'

export const Game = () => {
    const [ questions, setQuestions ] = useState(Util.shuffle(QUESTIONS).slice(0,10));
    const [ currQuestIdx, setCurrQuestIdx ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ name, setName ] = useState('Eric');

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
            return "You are amazing!"
        } else if (score >= 60) {
            return "A couple hicups, but still honorable score!"
        } else if (score >= 40) {
            return "Maybe try a little harder next time?"
        } else if (score >= 20) {
            return "Were you even trying?"
        } else {
            return "Please press the refresh button and try again!"
        } 
    }


    return (
        <div className='game-container'>
            <span>Hello {name}</span>
            <div>
                { questions.map((question, idx) => (
                    <div id={currQuestIdx !== idx ? 'hide' : ''}>
                        <span>Question { idx + 1 }: {question.question}</span>
                        <Question key={idx}
                                  score={score}
                                  question={question}
                                  handleSubmit={handleSubmit}/>
                    </div>
                ))}
            </div>
            <div id={currQuestIdx === 10 ? '' : 'hide'}>
                <p>Your Score is: {score}</p>
                <p>{endMessage(score)}</p>
            </div>
        </div>
    )

}