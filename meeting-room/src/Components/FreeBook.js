import React from 'react';
import {Col} from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';


export class FreeBook extends React.Component{
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

        var day = new Array();
        day[1] = "Monday";
        day[2] = "Tuesday";
        day[3] = "Wednesday";
        day[4] = "Thursday";
        day[5] = "Friday";
        day[6] = "Saturday";
        day[7] = "Sunday";

        var today = new Date(),
        
            date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() +  ' ' + day[today.getDay()] + ', ' + month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

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
            let newDate = today.getHours() + ':' + today.getMinutes() +':' + today.getSeconds() + ' ' + day[today.getDay()] + ', ' + month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
            self.setState({
            date: newDate
          })
        },1000);
    }
    
    render(){
        console.log(this.props)
        return(
            <Col className="free-book text-center" lg={9} md={9} xs={12}>
            <Col className="screen">
                <h6>{this.state.date}</h6>
                <h1>FREE</h1>
                <Col className="plus rounded-circle cursor" RoundedCircle 
                onClick = {()=>this.props.handler(1)}
                lg={{ span: 2, offset: 5 }}
                md={{ span: 4, offset: 4 }}
                xs={{ span: 6, offset: 3 }}>
                    <FaPlus />
                </Col>
                <h3>Book now</h3>
            </Col>
            </Col>
        )
    }
}