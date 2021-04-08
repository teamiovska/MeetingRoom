import React from 'react';
import {Row , Col } from 'react-bootstrap';

const date = new Date();
export class Reservation extends React.Component{
    
    render(){
        return(
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <p>Reservations</p>
                
                        {
                            this.props.reservations.map((reservData, id)=>{
                                let date = new Date(reservData.date);

                                let month = new Array();
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
                                let day = date.getDate();
                                let monthName = month[date.getMonth()];
                                let year = date.getFullYear();
                                    return(
                                        <div key={id}>
                                            <span>{monthName} {day}, {year}</span><br></br>
                                            <span>{reservData.startDate}-{reservData.endDate} <br></br> {reservData.name}</span> <br></br> 
                                            <hr></hr>
                                        </div>
                                    )
                            })
                        }

                        {/* {this.props.reservations.map((reserv, i)=>{
                        let parentDate = new Date(reserv.date);
                        return (
                            <div key={i}>
                                <p>{parentDate.getDate()}-{parentDate.getMonth()+1}-{parentDate.getFullYear()}</p>
                            {
                                this.props.reservations.map((reservDates)=>{
                                    let childDate = new Date(reservDates.date);
                                    if (parentDate.getFullYear() == childDate.getFullYear() &&
                                        parentDate.getMonth() == childDate.getMonth() &&
                                        parentDate.getDate() == childDate.getDate()) {   
                                        return(
                                            <div>
                                                <span>{reservDates.startDate}-{reservDates.endDate} <br></br> {reservDates.name}</span> <br></br> 
                                                <hr></hr>
                                            </div>
                                        )
                                    }
                                })
                            }
                            </div>
                        ); */}
                                
                </Col>
            </Row>
        )
    }
}