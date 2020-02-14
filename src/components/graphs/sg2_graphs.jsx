import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './graphs.css';

class Sg2Graphs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let main_graph
    let secondary_graph

    const primaryHeader2MAMethod1 = <h2 className="main-graph-header"> 2MA, Method 1 Primary Graph Name</h2>
    const secondaryHeader2MAMethod1 = <h2 className="second-graph-header"> 2MA, Method 1 Secondary Graph Name</h2>

    const primaryHeader3MAMethod1 = <h2 className="main-graph-header"> 3MA, Method 1  Primary Graph Name</h2>
    const secondaryHeader3MAMethod1 = <h2 className="second-graph-header"> 3MA, Method 1  Secondary Graph Name</h2>

    const primaryHeader4MAMethod1 = <h2 className="main-graph-header"> 4MA, Method 1  Primary Graph Name</h2>
    const secondaryHeader4MAMethod1 = <h2 className="second-graph-header"> 4MA, Method 1  Secondary Graph Name</h2>

    const primaryGraph2MAMethod1 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph2MAMethod1 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>

    const primaryGraph3MAMethod1 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph3MAMethod1 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>

    const primaryGraph4MAMethod1 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph4MAMethod1 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>

    if (this.props.sG2Resolution === "2MA" && this.props.sG2Method === "Method 1") {
      main_graph = <div>{primaryHeader2MAMethod1}{primaryGraph2MAMethod1}</div>
      secondary_graph = <div>{secondaryHeader2MAMethod1}{secondaryGraph2MAMethod1}</div>
    } else if (this.props.sG2Resolution === "3MA" && this.props.sG2Method === "Method 1") {
      main_graph = <div>{primaryHeader3MAMethod1}{primaryGraph3MAMethod1}</div>
      secondary_graph = <div>{secondaryHeader3MAMethod1}{secondaryGraph3MAMethod1}</div>
    } else if (this.props.sG2Resolution === "4MA" && this.props.sG2Method === "Method 1") {
      main_graph = <div>{primaryHeader4MAMethod1}{primaryGraph4MAMethod1}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod1}{secondaryGraph4MAMethod1}</div>
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

export default Sg2Graphs;
