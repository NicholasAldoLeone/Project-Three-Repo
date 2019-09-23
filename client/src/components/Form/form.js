import React from "react";
// import ReactDOM from "react-dom";
import 'react-bootstrap';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';
import "../Form/form.css";

class NewForm extends React.Component {
    //build req.body for us, send information across to routes to put inside database
    createQuiz = () => { 
        
   }
    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <div class="header">
                    <Container>
                        <h1 class="tron">Create Your Quiz!</h1>
                    </Container>
                    </div>
                </Jumbotron>

                <Form className="col-sm-6 container-fluid myform">
                    <Form.Group controlId="Title">
                        <Form.Label>Title of Your Quiz</Form.Label>
                        <Form.Control type="question" id = "1" />
                    </Form.Group>
                    <Form.Group controlId="Question">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="question" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    <Form.Group controlId="Answer">
                        <Form.Label>Answer</Form.Label>
                        <Form.Control type="answer" />
                    </Form.Group>
                    



                <Form className="col-sm-6 container-fluid myform">
                    <Form.Group controlId="Title">
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
                </Form>



                <Form className="col-sm-6 container-fluid myform">
                    <Form.Group controlId="Title">
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
                    <Button variant="primary" type="submit" onClick = {()=> this.createQuiz () } >
                        Submit
                    </Button>
                </Form>
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