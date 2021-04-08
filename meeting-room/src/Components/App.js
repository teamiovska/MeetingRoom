import React from 'react';
import { Row , Col} from 'react-bootstrap';
import {Menu} from './Menu';
import {Reservation} from './Reservation';
import {FreeBook} from './FreeBook';
import {Booking} from './Booking';
import {Waiting} from './Waiting';
import {WaitingError} from './WaitingError';
import {Booked} from './Booked';

export class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            status: 0,
            time: 0,
            date: '',
            name: '',
            reservations: [
                {id:1, name: 'Meeting-A', date: '2021-04-08T11:30', startDate: '11:30', endDate: '12:00', time: 30},
                {id:2, name: 'Meeting-B', date: '2021-04-09T14:30', startDate: '14:30', endDate: '15:30', time: 60},
                {id:3, name: 'Meeting-C', date: '2021-04-09T12:30', startDate: '12:30', endDate: '13:00', time: 30},
                {id:4, name: 'Meeting-D', date: '2021-04-10T15:00', startDate: '15:00', endDate: '16:30', time: 90},
                {id:5, name: 'Meeting-E', date: '2021-04-15T17:30', startDate: '17:30', endDate: '18:30', time: 60}
            ]
        }
        this.handler = this.handler.bind(this)
        this.handlerTime = this.handlerTime.bind(this)
        this.handlerDate = this.handlerDate.bind(this)
        this.handlerName = this.handlerName.bind(this)
      }
      handlerName(value=''){
        this.setState ({
            name: value
        })
      }
      handlerDate(value=''){
          this.setState ({
              date: value
          })
      }
      handlerTime(value=0){
        this.setState({
            time:value
        })
      }
      handler(value=0) {
          let self = this;
          let counter = 0;
        if(value === 4) {
            if(this.state.name === '') {
                alert("Please enter Booking name");
                return false;
            }
        }

        if(value === 2) {
            if(this.state.time === 0) {
                alert("Please pick a duration time");
                return false;
            }

            if(this.state.date === '') {
                alert("Please choose date and time");
                return false;
            }

            let newDate = new Date(this.state.date);
            this.state.reservations.forEach(function(val){
                let startDate = new Date(val.date);
                let endDate = new Date(val.date);
                endDate.setMinutes(endDate.getMinutes()+val.time)
                endDate.setMinutes(endDate.getMinutes()+30);
                if(newDate > startDate && newDate < endDate){
                    counter--;
                }else{
                    counter++;
                }
               
            }) 
            if(this.state.reservations.length !== counter){
                this.setState({
                    status: 3
                  })
            }else{
                this.setState({
                    status: 2
                  })
            }
            
        }else{
            this.setState({
                status: value
              })
        }
      }

      saveData = () => {
          let startDate = new Date(this.state.date);
            let endDate = new Date(this.state.date);
            endDate.setMinutes(endDate.getMinutes() + this.state.time);

          let object = {
            id: this.state.reservations.length +1,
            name: this.state.name,
            date: this.state.date,
            startDate: `${startDate.getHours()}:${startDate.getMinutes()}`,
            endDate: `${endDate.getHours()}:${endDate.getMinutes()}`,
            time: this.state.time
          }
        
        this.setState ({
            reservations: [...this.state.reservations, object],
            status: 0
        })
      }

    render(){
        return(
            <Row>
                <Col className="menu" lg={12} md={12} xs={12}>
                    <Menu />
                </Col>

                    {(() => {
                        switch (this.state.status) {
                        case 0:   return <FreeBook handler = {this.handler} />;
                        case 1:   return <Booking handler = {this.handler} handlerTime={this.handlerTime} handlerDate={this.handlerDate} />;
                        case 2:   return <Waiting handler = {this.handler} handlerName={this.handlerName}/>;
                        case 3:   return <WaitingError handler = {this.handler} />;
                        case 4:   return <Booked name={this.state.name} time={this.state.time} date={this.state.date} saveData={this.saveData}/>;
                        default:  return <FreeBook handler = {this.handler}/>;
                        }
                    })()}
                    

                <Col className="reservations" lg={3} md={3} xs={12}>
                    <Reservation reservations={this.state.reservations} />
                </Col>
            </Row>    
        )
    }
}