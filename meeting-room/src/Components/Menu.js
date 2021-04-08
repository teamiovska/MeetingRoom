import React from 'react';
import { Row , Col} from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

export class Menu extends React.Component{
    constructor() {
        super();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var today = new Date(),
        
            date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' ' + month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    componentDidMount() {
        let self = this;
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var day = new Array();
        day[1] = "Monday";
        day[2] = "Tuesday";
        day[3] = "Wednesday";
        day[4] = "Thursday";
        day[5] = "Friday";
        day[6] = "Saturday";
        day[7] = "Sunday";

        setInterval(() =>{
            let today = new Date();
            let newDate = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' ' + day[today.getDay()] + ', ' + month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
            self.setState({
            date: newDate
          })
        },1000);
    }
    render(){
        return(
            <Row>
                <Col className="title" lg={8} md={8} xs={6}>MeetingRoom</Col>
                <Col className="date-time" lg={4} md={4} xs={6}>
                    <span>{this.state.date}</span>
                </Col>
            </Row>
        )
    }
}