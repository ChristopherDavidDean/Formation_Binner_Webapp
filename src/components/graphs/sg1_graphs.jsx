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

    const primaryHeader2MA = <h2 className="main-graph-header"> 2MA Primary Graph Name</h2>
    const secondaryHeader2MA = <h2 className="second-graph-header"> 2MA Secondary Graph Name</h2>

    const primaryHeader3MA = <h2 className="main-graph-header"> 3MA Primary Graph Name</h2>
    const secondaryHeader3MA = <h2 className="second-graph-header"> 3MA Secondary Graph Name</h2>

    const primaryHeader4MA = <h2 className="main-graph-header"> 4MA Primary Graph Name</h2>
    const secondaryHeader4MA = <h2 className="second-graph-header"> 4MA Secondary Graph Name</h2>

    if (this.props.sG1State === "2MA") {
      main_graph = <div>{primaryHeader2MA}<img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img></div>
      secondary_graph = <div>{secondaryHeader2MA}<img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img></div>
    } else if (this.props.sG1State === "3MA") {
      main_graph = <div>{primaryHeader3MA}<img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img></div>
      secondary_graph = <div>{secondaryHeader3MA}<img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img></div>
    } else if (this.props.sG1State === "4MA") {
      main_graph = <div>{primaryHeader4MA}<img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img></div>
      secondary_graph = <div>{secondaryHeader4MA}<img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img></div>
    }
    return (
      <div>
        <Container
        className="graphs-container">
          <Col className="main-graph">
            {main_graph}
          </Col>
          <Col className="secondary-graph">
            {secondary_graph}
          </Col>
        </Container>
      </div>
    )
  }
}

export default Sg1Graphs;
