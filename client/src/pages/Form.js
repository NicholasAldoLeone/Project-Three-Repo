import React from "react";
import 'react-bootstrap';
import { Jumbotron, Container} from 'react-bootstrap';
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../util/API";

class CreateForm extends React.Component {
    state = {
        title: "",
        author: ""
    }

    resetState = () => {
        this.setState({title: "", author: ""});
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.createQuiz({
            title: this.state.title,
            author: this.state.author
            
        }).then(res => this.resetState());
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
    render() {
        //build req.body for us, send information across to routes to put inside database
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1 className="tron">Create Your Quiz!</h1>
                    </Container>
                </Jumbotron>

                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <Input
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        name="author"
                        placeholder="Author (required)"
                    />
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    > 
                        Submit Quiz
              </FormBtn>
                </form>
            </div>
        )
    }
}

// take over
//write function here 
//UA react 20 activity 11 
//Look at these files under activity 11:SRC, bookjs under pages, API.js in UTil's  

export default CreateForm;