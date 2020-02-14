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

    const primaryHeader = <div><h2 className="main-graph-header"> {this.props.sG1Resolution} {this.props.sG1Method}</h2></div>
    const secondaryHeader = <div><h2 className="second-graph-header"> {this.props.sG1Resolution} {this.props.sG1Method}</h2></div>

    const primaryGraph = <div><img alt="graph-one" className="graph-one" src={`primary-sg1-${this.props.sG1Resolution}-${this.props.sG1MethodShort}.jpeg`}></img></div>
    const secondaryGraph = <div><img alt="graph-two" className="graph-two" src={`secondary-sg1-${this.props.sG1Resolution}-${this.props.sG1MethodShort}.jpeg`}></img></div>
    
    return (
      <div>
        <Container
        className="graphs-container">
          <Col className="main-graph">
            {primaryHeader}
            {primaryGraph}
          </Col>
          <Col className="secondary-graph">
            {secondaryHeader}
            {secondaryGraph}
          </Col>
        </Container>
      </div>
    )
  }
}

export default Sg1Graphs;
