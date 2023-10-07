import React,{useState, useEffect} from "react";
function DigitalClock()
{
    const [myTime, setTime] = useState(" ");
    const tick = () => {
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let secounds = d.getSeconds();
        let time = `${hours>12?hours-12:hours}:${secounds}:${minutes}`
        if (hours< 12){
            time = time+" AM"
        }
        else{
            time = time+" PM"
        }
        setTime(time);
    }
    useEffect(() => {
        const t = setInterval(tick,1000);
        return () => {
            clearTimeout(t);
        }
    },[myTime])


    return (
        <div>
            <h1>DigitalClock</h1>
            <h2>{myTime}</h2>
        </div>);
}
export default DigitalClock;  
