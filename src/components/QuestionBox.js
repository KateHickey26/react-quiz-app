// this file makes the question box with buttons

import React, {useState} from "react";
import "../style.css";

// function to have the question inside the app
const QuestionBox = ({ question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, index) => (
                <button 
                    key={index}
                    className="answerBtn"
                    onClick={()=>{
                        setAnswer();
                        selected(text);
                    }}> {text}
                </button>
            ))}
        </div>
    )
};

export default QuestionBox;
