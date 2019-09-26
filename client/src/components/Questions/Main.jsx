import React from 'react';
import data from '../../data/data';
import Answers from '../Answers/Answers';
import API from '../../util/API'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            classNames: ['', '', '', ''],
            results: [],
            id: ""
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        // this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.resetClasses = this.resetClasses.bind(this)
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
        this.checkAnswer.bind(this)
    }

    componentDidMount() {
        var id = window.location.href;
        var newId = id.split("z/");
        this.getbyId(newId[1]);
    }

    getbyId = (params) => {
        API.getSingleQuiz(params)
            .then(res =>
                this.setState({
                    results: res.data.questions,
                    question: res.data.questions[0].text,
                    id: res.data._id
                }),
            )
            .catch(err => console.log(err));
    };
    pushData(nr) {
        this.setState({
            nr: this.state.nr + 1
        });
    }
    resetClasses = () => {
        this.setState({
            classNames: ['', '', '', '']
        })
    }
    // UNSAFE_componentWillMount() {
    //     let { nr } = this.state;
    //     this.pushData(nr);
    // }
    nextQuestion() {
        let { nr, total, score } = this.state;
        this.pushData(nr);
        this.setState({
            showButton: false,
            questionAnswered: false,
        });
        console.log(this.state.questionAnswered)
        this.resetClasses()
    }

    checkAnswer = (obj) => {
        console.log(obj);

        if (!this.state.questionAnswered) {
            // let correct = parseInt(this.state.results[this.state.nr-1].correctA);
            // console.log("I" + this.state.results[this.state.nr-1].correctA)
            let isCorrect = obj.isCorrect;
            let answerIndex = obj.a;


            let updatedClassNames = this.state.classNames;

            if (isCorrect) {
                updatedClassNames[answerIndex] = 'right';
                console.log("Correct!")
                // increaseScore();
            }
            else {
                console.log("test")
                updatedClassNames[answerIndex] = 'wrong';
            }

            this.setState({
                classNames: updatedClassNames
            })

            this.handleShowButton();

        }
    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    // handleStartQuiz() {
    //     this.setState({
    //         nr: 1
    //     });
    // }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { nr, total, question, answers, correct, showButton, questionAnswered, score, classNames } = this.state;
        let stuff = this.state.results
        console.log(stuff);
        if (stuff.length !== 0) {
            console.log("Made it");
            // console.log("1+" + stuff[nr-1].correctA)
            return (
                <div className="container">

                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1">
                            <div id="question">
                                <h4>Question {nr + 1}</h4>
                                <p>{stuff[nr].text}</p>
                            </div>
                            <Answers answers={stuff[nr].answers} classes={classNames} checkAnswer={this.checkAnswer} increaseScore={this.handleIncreaseScore} />
                            <div id="submit">
                                {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{nr === total ? 'Finish quiz' : 'Next question'}</button> : null}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Ain't got no</h1>
        }
    }
};

export default Main


// correct={[nr-1].correctA}