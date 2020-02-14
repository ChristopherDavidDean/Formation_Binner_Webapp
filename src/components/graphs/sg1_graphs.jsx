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


    const primaryHeader = <div><h2 className="main-graph-header"> {this.props.sG1Resolution}, {this.props.sG1Method} Primary Graph Name</h2></div>
    const secondaryHeader = <div><h2 className="second-graph-header"> {this.props.sG1Resolution}, {this.props.sG1Method} Secondary Graph Name</h2></div>

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

// if (this.props.sG1Resolution === "2MA" && this.props.sG1Method === "Method 1") {
//   main_graph = <div>{primaryHeader}{primaryGraph2MAMethod1}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph2MAMethod1}</div>
// } else if (this.props.sG1Resolution === "3MA" && this.props.sG1Method === "Method 1") {
//   main_graph = <div>{primaryHeader}{primaryGraph3MAMethod1}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph3MAMethod1}</div>
// } else if (this.props.sG1Resolution === "4MA" && this.props.sG1Method === "Method 1") {
//   main_graph = <div>{primaryHeader}{primaryGraph4MAMethod1}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph4MAMethod1}</div>
// } else if (this.props.sG1Resolution === "2MA" && this.props.sG1Method === "Method 2") {
//   main_graph = <div>{primaryHeader}{primaryGraph4MAMethod2}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph4MAMethod2}</div>
// } else if (this.props.sG1Resolution === "3MA" && this.props.sG1Method === "Method 2") {
//   main_graph = <div>{primaryHeader}{primaryGraph4MAMethod2}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph4MAMethod2}</div>
// } else if (this.props.sG1Resolution === "4MA" && this.props.sG1Method === "Method 2") {
//   main_graph = <div>{primaryHeader}{primaryGraph4MAMethod2}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph4MAMethod1}</div>
// } else if (this.props.sG1Resolution === "2MA" && this.props.sG1Method === "Method 3") {
//   main_graph = <div>{primaryHeader}{primaryGraph4MAMethod3}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph4MAMethod3}</div>
// } else if (this.props.sG1Resolution === "3MA" && this.props.sG1Method === "Method 3") {
//   main_graph = <div>{primaryHeader}{primaryGraph4MAMethod3}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph4MAMethod3}</div>
// } else if (this.props.sG1Resolution === "4MA" && this.props.sG1Method === "Method 3") {
//   main_graph = <div>{primaryHeader}{primaryGraph4MAMethod3}</div>
//   secondary_graph = <div>{secondaryHeader}{secondaryGraph4MAMethod3}</div>
// }
