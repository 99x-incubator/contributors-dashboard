import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { User , Tranding} from './components/Components';
class App extends Component {

  render() {
    const user = {
      name: 'name',
      userName: 'username',
      prCount: 100,
      commitCount: 100,
      issuesCount: 100,
      profilePic:
        'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
    };

    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={14}>
          <div class="navbar pulse-header header">
            <img src="/assets/logo.png" alt="logo" width="100px" />
            <h2>Xian's Contributors Dashboard</h2>
          </div>
          </Col>
          <Col xs={12}> 
          <div class="navbar header2">
            <marquee>A project by Open-source Initiative</marquee>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <User {...user} />
          </Col>
          <Col md={3}>
            <User {...user} />
          </Col>
          <Col md={3}>
            <User {...user} />
          </Col>
          <Col md={3}>
            <User {...user} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Tranding/>
          </Col>
        </Row>
        <Row>
        <Col xs={14}>
         <div class="footer">
          <p>99X Technology</p>
        </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
