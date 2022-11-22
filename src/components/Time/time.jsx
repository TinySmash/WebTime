import React, { useState } from 'react';
import './time.css';



function Time(){
    

    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
        
    }

    setInterval(updateTime, 1000)


    return (
        <div className="time">


            <div className="timeBallArea">
                <div className="timeBall">
                    
                </div>
            </div>
            
            <h1 className='currentTime'>{currentTime}</h1>
            

        </div>
    );
}

 
export default Time;