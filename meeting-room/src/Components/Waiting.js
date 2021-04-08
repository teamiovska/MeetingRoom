import React from 'react';
import {Row , Col , Button} from 'react-bootstrap';

export class Waiting extends React.Component{
    render(){
        return(
            <Col className="waiting text-center" lg={9} md={9} xs={12}>
                <Row className="screen">
                    <Col lg={12} md={12} xs={12}>
                        <h1>WAITING</h1>
                        <h5>Your DATE & TIME are free!</h5>
                        <input onChange={event => {this.props.handlerName(event.target.value)}} type="text" placeholder="Booking Name" />
                    </Col>
                    <Col className="buttons" lg={6} md={6} xs={6}>
                        <Button onClick = {()=>this.props.handler(4)} size="lg" block>Save</Button>
                    </Col>
                    <Col className="buttons" lg={6} md={6} xs={6}>
                        <Button onClick = {()=>this.props.handler(0)} size="lg" block>Cancel</Button>
                    </Col>
                </Row>
            </Col>
        )
    }
}