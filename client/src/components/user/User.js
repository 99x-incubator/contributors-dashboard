import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './User.css';
import { string, number } from 'prop-types';

const User = props => (
  <Card>
    <CardBody>
      <CardTitle className="header-title">{props.name}</CardTitle>
    </CardBody>
    <CardImg top width="100%" src={props.profilePic} alt="Card image cap" />
    <CardBody>
      <CardTitle className="body-title">{props.userName}</CardTitle>
      <CardTitle className="body-title">PR : {props.prCount}</CardTitle>
      <CardTitle className="body-title">
        Commits : {props.commitCount}
      </CardTitle>
      <CardTitle className="body-title">Issues : {props.issuesCount}</CardTitle>
    </CardBody>
  </Card>
);

User.propTypes = {
  name: string.isRequired,
  userName: string.isRequired,
  prCount: number.isRequired,
  commitCount: number.isRequired,
  issuesCount: number.isRequired,
  profilePic: string.isRequired,
};

export default User;
