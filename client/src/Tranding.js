import React, { Component } from 'react';
import './Tranding.css';
import TrandingComponent from './TrandingComponent';
import {Panel} from 'react-bootstrap';
import {Container, Row, Col} from 'reactstrap';

class Tranding extends Component{
    render(){
        return(
            <Panel className="Tranding-Panel-Main-Wrapper">
                <h3 className="TradningTitle">99xt Tranding Repositories of the month</h3>
                <Container className="Tranding-Panel-Main-Container">
                    <Row>
                        <Col sm="6">
                            <TrandingComponent></TrandingComponent>
                        </Col>
                        <Col sm="6">
                            <TrandingComponent></TrandingComponent>
                        </Col>
                    </Row>
                </Container>
            </Panel>
        );
    }
}
export default Tranding;
