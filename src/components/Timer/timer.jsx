import React, { Component } from "react";
import { Howl, Howler } from "howler";
import './timer.css';
import './alarm.mp3';


class Timer extends Component {

    state = {
        FstButton : "Start",
        ScdButton : "Pause",
        hours : '00',
        minutes : '00',
        seconds : '00'
    }

    getHours = (e) => {
        const re = /^[0-9\b]+$/
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({hours: e.target.value})
        }else{
            e.target.value = '00';
            this.setState({hours: e.target.value})
        }
    }

    getMinutes = (e) => {
        const re = /^[0-9\b]+$/
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({minutes: e.target.value})
        }else{
            e.target.value = '00';
            this.setState({hours: e.target.value})
        }
    }

    getSeconds = (e) => {
        const re = /^[0-9\b]+$/
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({seconds: e.target.value})
        }else{
            e.target.value = '00';
            this.setState({hours: e.target.value})
        }
    }

    startCounting = (hour, minute, second) => {

        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);
        let secondsInput = document.querySelector('#secondInput');
        let minutesInput = document.querySelector('#minuteInput');
        let hoursInput = document.querySelector('#hourInput');

        setInterval(() => {
            if(second > 0){
                second = second - 1 ;
            }
            else if(second == 0 && minute >0){
                second = 59 ;
                minute = minute - 1;
            }
            else if(second == 0 && minute == 0 && hour > 0){
                second = 59;
                minute = 59;
                hour = hour - 1;
            }
            else if(second == 0 && minute == 0 && hour == 0){

                const soundPlay = (src) =>{
                    const sound = new Howl({
                        src,
                        html5 : true
                    })
                sound.play();
                }
                const sound = 'alarm.mp3';
                soundPlay(sound);
            

            }
            
            this.setState({
                seconds : second,
                minutes : minute,
                hours : hour
                
            })
            secondsInput.value = second ;
            minutesInput.value = minute ;
            hoursInput.value = hour ;

        },1000)
        
        


    }

    




    
    
    render(){

        const {hours, minutes, seconds} = this.state;
        

        return ( 
        <div className="Timer">

            <ul className="TimerTime" >
                <li><input type="text" className="timeInput" maxLength="2" id="hourInput" onChange={this.getHours.bind(this)} ></input></li>
                <li><h1 className="twop">:</h1></li>
                <li><input type="text" className="timeInput" maxLength="2" id="minuteInput" onChange={this.getMinutes.bind(this)}></input></li>
                <li><h1 className="twop">:</h1></li>
                <li><input type="text" className="timeInput" maxLength="2" id="secondInput" onChange={this.getSeconds.bind(this)}></input></li>
            </ul>

            <button id="fst" onClick={this.startCounting.bind(this, hours, minutes, seconds)}>{this.state.FstButton}</button>
            <button id="scd">{this.state.ScdButton}</button>



        </div>
     );
    }
}

export default Timer;