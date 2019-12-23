import React, { Component } from 'react';
import { Progress,Button, Container, Col,Row } from 'reactstrap';

class ProgressBar extends Component {
constructor (props){
  super(props);
  this.state={
    value:0
  }
}
componentDidMount(){

setInterval(this.setProgress,100);
}
setProgress = () => {
  if (this.state.value <= this.props.value) {
     // console.log(this.state.value)
      this.setState((prevState) => ({
                value: prevState.value + 10
    }));
  //   console.log(this.state.value);
   }
}
  render(){
    return(
      <Row>
     
      <Col sm='2' className="progress--text">{this.props.title}</Col>
      <Col sm='10' className="progress--div"> 
        
        <Progress animated color="info" className="progress--style" value={this.state.value}/>
        </Col> 
      </Row>);
  }
}  

export default ProgressBar;