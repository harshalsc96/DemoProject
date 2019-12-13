import React from 'react';
import './CountDownTimer.css';

export class CountDownTimer extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                hours: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds()
            })},100)
    }
    render(){
        
        return(
            <div className = "timer-div">
                <h1>{this.state.hours} : {this.state.minutes} : {this.state.seconds}</h1>
            </div>
        )
    }

}