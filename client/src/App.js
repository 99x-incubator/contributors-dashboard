import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { User } from './components/Components';

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
          <Col xs={12}> heading 1</Col>
          <Col xs={12}> heading 2</Col>
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
          <Col md={6}>99xt list</Col>
          <Col md={6}> 99xt incubator list </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
