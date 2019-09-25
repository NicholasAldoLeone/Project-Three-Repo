import React from "react";
import API from "../util/API";
import { Col, Row, Container } from "../components/Grid";
import ViewButton from "../components/ViewButton";
import Carousel from "../components/HomeCarousel"
class Quizzes extends React.Component {
    state = {
        list: [],

    }

    componentDidMount() {
        this.loadQuizzes();
    }

    loadQuizzes = () => {
        API.getQuizzes().then(res => {
            this.setState({
                list: res.data, 

            })
            
        })
    }

    render() {
        return (
            <div>
            <Carousel/>
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        {this.state.list.length ? (
                            <div>
                                {this.state.list.map(quiz => {
                                    return <ul key = {quiz._id}>        
                                         <ViewButton value = {quiz._id} href = {"quiz/" + quiz._id} />
                                         
                                    </ul>
    
                                })}
                            </div>
                        ): (
                            <h1>No Quizzes Found!</h1>
                        )}

                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Quizzes;