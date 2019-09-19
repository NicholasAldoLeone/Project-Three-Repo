import React from "react";
import API from "../util/API";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid";

class Quizzes extends React.Component {
    state = {
        title: "",
        author: "",
        id: "",
    }

    componentDidMount() {
        this.loadQuizzes();
    }

    loadQuizzes = () => {
        API.getQuizzes().then(res =>  {
            console.log(res.data);
            this.setState({
                title: res.title,
                author: res.author,
            })
        })
    }

    getById = () => {
        API.getSingleQuiz().then(res => {
            console.log(res.data)
            this.setState({
                title: res.data,
                author: res.data
            })
        })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size = "md-6">
                        <h1>This is going to be the homepage</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Quizzes;