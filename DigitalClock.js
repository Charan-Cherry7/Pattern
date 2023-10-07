
import React,{Component} from "react";
export class DigitalClock extends Component{
  constructor(props){
    super(props);
    this.state={
      time:""
    };
  }
  componentDidMount(){
    this.tick();
  }
  tick=()=>{
    const hours=new Date().getHours();
    const minutes=new Date().getMinutes();
    const seconds=new Date().getSeconds();
    const updatedTime=`${hours}:${minutes}:${seconds}`
    this.setState({time:updatedTime});
  };
  componentDidUpdate(prevProps,prevState){
    if(this.state.time!==prevState.time){
      this.interval=setInterval(()=>{
        this.tick();
      },1000);
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    return <div>
      <h1>Digital Clock</h1>
      <h1>{this.state.time}</h1></div>;
  }
  }
export default DigitalClock;
