import React from 'react';
function Answers(props) {
        return (
            <div id="answers">
                <ul>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[0]} data-a="1"><span>A</span> <p data-a="1" data-id={props.answers[0].isCorrect}>{props.answers[0].text}</p></li>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[1]} data-a="2"><span>B</span> <p data-a="2"data-id={props.answers[1].isCorrect}>{props.answers[1].text}</p></li>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[2]} data-a="3"><span>C</span> <p data-a="3"data-id={props.answers[2].isCorrect}>{props.answers[2].text}</p></li>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[3]} data-a="4"><span>D</span> <p data-a="4"data-id={props.answers[3].isCorrect}>{props.answers[3].text}</p></li>
                </ul>
            </div>
        );
    }
export default Answers