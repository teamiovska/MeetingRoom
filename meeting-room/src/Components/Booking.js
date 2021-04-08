import React from 'react';
import {Row , Col , Button} from 'react-bootstrap';

export class Booking extends React.Component{
       
    render(){
        return(
            <Col className="booking text-center" lg={9} md={9} xs={12}>
                <Row className="screen">
                    <Col lg={12} md={12} xs={12}>
                        <h1>BOOKING</h1>
                        <p>
                            <span onClick={() => this.props.handlerTime(30)}>30min</span>
                            <span onClick={() => this.props.handlerTime(60)}>60min</span>
                            <span onClick={() => this.props.handlerTime(90)}>90min</span>
                        </p>
                        <input onChange={event => {this.props.handlerDate(event.target.value)}} type="datetime-local"  />
                    </Col>

                    <Col className="buttons" lg={6} md={6} xs={6}>
                        <Button onClick = {()=>this.props.handler(2)} size="lg" block>Save</Button>
                    </Col>
                    <Col className="buttons" lg={6} md={6} xs={6}>
                        <Button onClick = {()=>this.props.handler(0)} size="lg" block>Cancel</Button>
                    </Col>

                </Row>
            </Col>
        )
    }
}