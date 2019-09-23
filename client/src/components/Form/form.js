import React from "react";
import 'react-bootstrap';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';
import "../Form/form.css";

class NewForm extends React.Component {
    //build req.body for us, send information across to routes to put inside database
render() {
        return (
            <div>
               <Jumbotron fluid>
                    <Container>
                        <h1 class="tron">Create Your Quiz!</h1>
                    </Container>
                </Jumbotron>

                <Form className="col-sm-6 container-fluid myform">
                    <Form.Group controlId="Title">
                        <Form.Label>Title of Your Quiz</Form.Label>
                        <Form.Control type="question" />
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
                        <Form.Lable>Answer</Form.Lable>
                        <Form.Control type="answer" />
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
                        <Form.Contol type="Correct Answer" />
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
                        <Form.Label>Correct Answer</Form.Label>
                        <Form.Control type="Correct Answer" />
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

export default NewForm;