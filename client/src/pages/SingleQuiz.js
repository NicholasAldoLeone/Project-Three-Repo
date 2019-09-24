import React from "react";
import API from "../util/API";
import { Col, Row, Container } from "../components/Grid";

class SingleQuiz extends React.Component {
    state = {
        id: "",
        title: "",
        author: "",
        quiz: [],
        
    }

    componentDidMount() {
        var id = window.location.href;
        var newId = id.split("z/")

        this.getById(newId[1]);
    }

    getById = (params) => {
        API.getSingleQuiz(params).then(res => {
            this.setState({
                id: res.data._id,
                title: res.data.title,
                author: res.data.author,
                quiz: res.data.quiz
            })
            console.log(this.state)
        })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col size = "md-6">
                        <h1>This is going to be a single quiz page</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SingleQuiz;