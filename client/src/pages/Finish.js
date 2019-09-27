import React from 'react';
import { Col, Row, Container } from "../components/Grid";
import ReturnButton from "../components/ReturnButton";

class Finish extends React.Component {

    changeUrl = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="card" id="finish-body">
                            <div className="card-body" id="finish-body">
                                <h3>Congrats you finished the Quiz!</h3>
                                <p className="card-text">Thats it their is nothing else to do expect click the button, so just go on ahead and click the button because the button will return you to the home page where you can take more quizzes or take the same quiz to reach the button again, but that cant happen unless you click the button because clicking the button gives you the option to come back to the button which you have not clicked because you're still reading this, so just go and click the button CLICK IT. </p>

                                <p>
                                    Come on I cant keep this up forever or can I? the answer is no beacause I'm lazy but not as lazy as just clicking a simple button so go on and click the button you know you wanna click it CLICK IT. And whatever to do not click those things in the Navbar they are not the button they are Links, the button is the only way to go so just click the button like think about how can you trust those Links maybe when you click those it takes you to a interdimensional being bent on the destruction of anyone that doesn't click the button besides you have me to tell you that the button is safe the button will care for you the button knows all.
                            </p>

                                <p>
                                    Click the button.
                            </p>
                                <ReturnButton onClick={this.changeUrl} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Finish;