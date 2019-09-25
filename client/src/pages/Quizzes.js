import React from "react";
import API from "../util/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import ViewButton from "../components/ViewButton";

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

        API.getByTitle().then(res => {
            this.setState({
                list: res.data
            })
        })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        {this.state.list.length ? (
                            <div>
                                {this.state.list.map(quiz => {
                                    return <ul key={quiz._id}>
                                        <ViewButton value={quiz._id} href={"quiz/" + quiz._id} />

                                    </ul>

                                })}
                            </div>
                        ) : (
                                <h1>No Quizzes Found!</h1>
                            )}

                    </Col>
                    <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name = "title"
                        placeholder="search"
                    />
                    <FormBtn
                        onClick={this.loadQuizzesByTitle}
                    > 
                        Search
              </FormBtn>
                </form>
                </Row>
            </Container>
        )
    }
}

export default Quizzes;