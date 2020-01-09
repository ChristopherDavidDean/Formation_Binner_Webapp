import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './graphs.css';

class GraphSg12Ma extends React.Component {

  render () {
    return (
      <div>
        <Container
        className="graphs-container">
          <Col className="main-graph">
          <h2 className="main-graph-header">
          Primary Graph Name
          </h2>
          <img
          alt="graph-one"
          className="graph-one"
          src="M2_SQS_SG1.jpeg">
          </img>
          </Col>
          <Col className="secondary-graph">
          <h2 className="second-graph-header">
          Secondary Graph Name
          </h2>
          <img alt="graph-two"
          className="graph-two"
          src="M2_div_colls_SG1.jpeg">
          </img>
          </Col>
        </Container>
      </div>
    )
  }
}

export default GraphSg12Ma;
