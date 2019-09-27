import React from 'react';
import { Col, Row, Container } from "../components/Grid";

class Finish extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col size = "md-6">
                        <h3>Congrats you finished the Quiz!</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Finish;