import React, { Component } from 'react';
import ProgressBar from '../components/ProgressBar';
import {Container, Row, Col, Button, Table} from 'reactstrap';
import Personal from './Personal';
class Home extends Component {
constructor (props){
  super(props);
}

  render(){
    return(
      <Container className="skills--div" > 
      
        <Row>
        <Col sm={{ size: 8, order: 2, offset: 1 }} className="skills" ><br/>
        <h1 className="subtitle">Skills</h1><br/><br/>
        <Container>
        <ProgressBar value={70} title="HTML"/> <br/>
        <ProgressBar value={55} title="CSS"/> <br/>
        <ProgressBar value={75} title="Javascript"/> <br/>
        <ProgressBar value={40} title="Node JS"/> <br/>
        <ProgressBar value={70} title="React JS"/> <br/>
        <ProgressBar value={50} title="PHP"/> <br/>
        <ProgressBar value={60} title="JQuery"/> <br/>
        <ProgressBar value={50} title="MySQL"/> <br/>
        <br/><br/>
   
        </Container>
        </Col>
        <Col sm='3'>
          <Personal/>
        </Col>
        </Row>
      </Container>);
  }
}  

export default Home;