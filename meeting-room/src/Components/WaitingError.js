import React from 'react';
import {Row , Col , Button} from 'react-bootstrap';

export class WaitingError extends React.Component{
    render(){
        return(
            <Col className="waiting-error text-center" lg={9} md={9} xs={12}>
                <Row className="screen">
                    <Col lg={12} md={12} xs={12}>
                        <h1>WAITING</h1>
                        <h5>Your DATE & TIME are not free!</h5>
                        <Button onClick = {()=>this.props.handler(1)} className="pick-button" variant="outline-secondary" size="lg">Pick DATE & TIME</Button>
                    </Col>
                </Row>
            </Col>
        )
    }
}