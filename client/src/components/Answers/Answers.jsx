import React from 'react';
function Answers(props) {
        return (
            <div id="answers">
                <ul>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[0]} data-id="1"><span>A</span> <p data-id="1">{props.answers[0]}</p></li>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[1]} data-id="2"><span>B</span> <p data-id="2">{props.answers[1]}</p></li>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[2]} data-id="3"><span>C</span> <p data-id="3">{props.answers[2]}</p></li>
                    <li onClick={(e) => props.checkAnswer(e)} className={props.classes[3]} data-id="4"><span>D</span> <p data-id="4">{props.answers[3]}</p></li>
                </ul>
            </div>
        );
    }
export default Answers