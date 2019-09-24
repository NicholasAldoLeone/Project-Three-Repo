import React from "react";
import 'react-bootstrap';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';

class CreateForm extends React.Component {
    state = {
        author: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Submit Button Click");
    }
    
    render() {
        //build req.body for us, send information across to routes to put inside database
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1 className="tron">Create Your Quiz!</h1>
                    </Container>
                </Jumbotron>

                <Form className="col-sm-6 container-fluid myform">
                    <Form.Group controlId="Title">
                        <Form.Label>Title of Your Quiz</Form.Label>
                        <Form.Control type="Title of Your Quiz" />
                    </Form.Group>

                    <Form.Group controlId="Question">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="question" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Correct Answer">
                        <Form.Label> Correct Answer</Form.Label>
                        <Form.Control type="Correct Answer" />
                    </Form.Group>
                </Form>

                <Form className="col-sm-6 container-fluid myform">
                    <Form.Group controlId="Question">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="question" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Correct Answer">
                        <Form.Label> Correct Answer</Form.Label>
                        <Form.Control type="Correct Answer" />
                    </Form.Group>
                </Form>

                <Form className="col-sm-6 container-fluid myform">
                    <Form.Group controlId="Question">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="question" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Correct Answer">
                        <Form.Label> Correct Answer</Form.Label>
                        <Form.Control type="Correct Answer" />
                        <Button onClick = {() => this.handleFormSubmit()}/>
                    </Form.Group>
                </Form>

            </div>
        )
    }
}

// take over
//write function here 
//UA react 20 activity 11 
//Look at these files under activity 11:SRC, bookjs under pages, API.js in UTil's  

export default CreateForm;