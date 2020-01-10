import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './graphs.css';

class Sg1Graphs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let main_graph
    let secondary_graph

    if (this.props.sG1State === "2MA") {
      main_graph = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
      secondary_graph = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>
    } else if (this.props.sG1State === "3MA") {
      main_graph = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
      secondary_graph = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>
    } else if (this.props.sG1State === "4MA") {
      main_graph = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
      secondary_graph = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>
    }
    return (
      <div>
        <Container
        className="graphs-container">
          <Col className="main-graph">
          <h2 className="main-graph-header">
          Primary Graph Name
          </h2>
          {main_graph}
          </Col>
          <Col className="secondary-graph">
          <h2 className="second-graph-header">
          Secondary Graph Name
          </h2>
          {secondary_graph}
          </Col>
        </Container>
      </div>
    )
  }
}

export default Sg1Graphs;
