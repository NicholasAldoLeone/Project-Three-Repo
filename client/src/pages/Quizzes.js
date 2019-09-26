import React from "react";
import API from "../util/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import ViewButton from "../components/ViewButton";
import Carousel from "../components/HomeCarousel"
import "../components/Quizzes/quizzes.css"

class Quizzes extends React.Component {
    state = {
        list: [],
        title: ""

    }

    componentDidMount() {
        this.loadQuizzes();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    changeUrl = (event) => {
        const { value } = event.target;
        this.props.history.push("/quiz/" + value);
    }

    loadQuizzes = () => {
        API.getQuizzes().then(res => {
            this.setState({
                list: res.data,

            })
        })
    }

    loadQuizzesByTitle = (event) => {
        event.preventDefault();
        var title = this.state.title;
        var routeTitle = title.toLowerCase().replace(" ", "")

        API.getByTitle(routeTitle).then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <Carousel />
                <Container fluid>
                    <Row>
                        <Col size = "md-1"></Col>
                        <Col size = "md-6">
                            {this.state.list.length ? (
                                <div>
                                    {this.state.list.map(quiz => {
                                        return <div className="card" id = "quiz-card">
                                            <div className="card-body">
                                                <p className="card-text">Title: {quiz.title}</p>
                                                <p className="card-text">Author: {quiz.author}</p>
                                                <ul key={quiz._id}>
                                                    <ViewButton value={quiz._id} onClick={this.changeUrl}/>
                                                </ul>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            ) : (
                                    <h1>No Quizzes Found!</h1>
                                )}
                        </Col>
                        <Col size="md-3">
                            <form id = "search-input-form">
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="search"
                                />
                                <FormBtn
                                    onClick={this.loadQuizzesByTitle}
                                >
                                    Search
                                </FormBtn>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Quizzes;