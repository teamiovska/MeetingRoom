import React from 'react';
import {Row , Col , Button} from 'react-bootstrap';

export class Booked extends React.Component{
    render(){
        // console.log(this.props)
        return(
            <Col className="booked text-center" lg={9} md={9} xs={12}>
                <Row className="screen">
                    <Col lg={12} md={12} xs={12}>
                        <h1>BOOKED</h1>
                        <h5>{this.props.name}</h5>
                        <span>{this.props.time}</span>
                        <h6>{this.props.date}</h6>
                    </Col>
                    <Col className="buttons" lg={12} md={12} xs={12}>
                        <Button onClick = {this.props.saveData} size="lg" block>Done</Button>
                    </Col>
                </Row>
            </Col>
        )
    }
}