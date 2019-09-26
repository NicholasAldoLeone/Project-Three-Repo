import React from 'react';
function Answers(props) {
    return (
        <div id="answers">
            {/* <ul>
                <li onClick={(e) => props.checkAnswer({ a: 0, isCorrect: props.answers[0].isCorrect, e })} className={props.classes[0]}><span>A</span> <p data-a="1" data-id={props.answers[0].isCorrect}>{props.answers[0].text}</p></li>

                <li onClick={(e) => props.checkAnswer({ a: 1, isCorrect: props.answers[1].isCorrect, e })} className={props.classes[1]}><span>B</span> <p data-a="2" data-id={props.answers[1].isCorrect}>{props.answers[1].text}</p></li>

                <li onClick={(e) => props.checkAnswer({ a: 2, isCorrect: props.answers[2].isCorrect, e })} className={props.classes[2]}><span>C</span> <p data-a="3" data-id={props.answers[2].isCorrect}>{props.answers[2].text}</p></li>

                <li onClick={(e) => props.checkAnswer({ a: 3, isCorrect: props.answers[3].isCorrect, e })} className={props.classes[3]}><span>D</span> <p data-a="4" data-id={props.answers[3].isCorrect}>{props.answers[3].text}</p></li> */}

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