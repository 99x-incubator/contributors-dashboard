import React, { Component } from 'react';
import './TrandingComponent.css';
import { Panel, Image ,Row, Col}  from 'react-bootstrap';

class TrandingComponent extends Component{
    render(){
        return(
            <Panel className="Tranding-Panel">
                <h4>Repository header -Name-</h4>
                <div className="TrandingRepoList">
                    <Row className="TrandingRepoCard">
                        <Col sm="3">
                            <Image className="RepoLogo" src="/repo_icon.png" rounded />
                        </Col>
                         <Col sm="9">
                            <Row>
                                <Col>
                                    <h5>Repository Name:</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <h5>PR:</h5>
                                    
                                </Col>
                                <Col sm="6">
                                    <h5>Commits:</h5>
                                </Col>
                                <Col sm="6">
                                    <h5>Issues:</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="TrandingRepoCard">
                        <Col sm="3">
                            <Image className="RepoLogo" src="/repo_icon.png" rounded />
                        </Col>
                         <Col sm="9">
                            <Row>
                                <Col>
                                    <h5>Repository Name:</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <h5>PR:</h5>
                                    
                                </Col>
                                <Col sm="6">
                                    <h5>Commits:</h5>
                                </Col>
                                <Col sm="6">
                                    <h5>Issues:</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="TrandingRepoCard">
                        <Col sm="3">
                            <Image className="RepoLogo" src="/repo_icon.png" rounded />
                        </Col>
                         <Col sm="9">
                            <Row>
                                <Col>
                                    <h5>Repository Name:</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <h5>PR:</h5>
                                    
                                </Col>
                                <Col sm="6">
                                    <h5>Commits:</h5>
                                </Col>
                                <Col sm="6">
                                    <h5>Issues:</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="TrandingRepoCard">
                        <Col sm="3">
                            <Image className="RepoLogo" src="/repo_icon.png" rounded />
                        </Col>
                         <Col sm="9">
                            <Row>
                                <Col>
                                    <h5>Repository Name:</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <h5>PR:</h5>
                                    
                                </Col>
                                <Col sm="6">
                                    <h5>Commits:</h5>
                                </Col>
                                <Col sm="6">
                                    <h5>Issues:</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="TrandingRepoCard">
                        <Col sm="3">
                            <Image className="RepoLogo" src="/repo_icon.png" rounded />
                        </Col>
                         <Col sm="9">
                            <Row>
                                <Col>
                                    <h5>Repository Name:</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <h5>PR:</h5>
                                    
                                </Col>
                                <Col sm="6">
                                    <h5>Commits:</h5>
                                </Col>
                                <Col sm="6">
                                    <h5>Issues:</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Panel>
        );
    }
}
export default TrandingComponent;
