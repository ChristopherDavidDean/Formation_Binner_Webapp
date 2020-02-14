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


    const primaryHeader2MAMethod2 = <h2 className="main-graph-header"> 2MA, Method 2 Primary Graph Name</h2>
    const secondaryHeader2MAMethod2 = <h2 className="second-graph-header"> 2MA, Method 2 Secondary Graph Name</h2>

    const primaryHeader3MAMethod2 = <h2 className="main-graph-header"> 3MA, Method 2  Primary Graph Name</h2>
    const secondaryHeader3MAMethod2 = <h2 className="second-graph-header"> 3MA, Method 2  Secondary Graph Name</h2>

    const primaryHeader4MAMethod2 = <h2 className="main-graph-header"> 4MA, Method 2  Primary Graph Name</h2>
    const secondaryHeader4MAMethod2 = <h2 className="second-graph-header"> 4MA, Method 2  Secondary Graph Name</h2>

    const primaryGraph2MAMethod2 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph2MAMethod2 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>

    const primaryGraph3MAMethod2 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph3MAMethod2 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>

    const primaryGraph4MAMethod2 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph4MAMethod2 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>


    const primaryHeader2MAMethod3 = <h2 className="main-graph-header"> 2MA, Method 3 Primary Graph Name</h2>
    const secondaryHeader2MAMethod3 = <h2 className="second-graph-header"> 2MA, Method 3 Secondary Graph Name</h2>

    const primaryHeader3MAMethod3 = <h2 className="main-graph-header"> 3MA, Method 3  Primary Graph Name</h2>
    const secondaryHeader3MAMethod3 = <h2 className="second-graph-header"> 3MA, Method 3  Secondary Graph Name</h2>

    const primaryHeader4MAMethod3 = <h2 className="main-graph-header"> 4MA, Method 3  Primary Graph Name</h2>
    const secondaryHeader4MAMethod3 = <h2 className="second-graph-header"> 4MA, Method 3  Secondary Graph Name</h2>

    const primaryGraph2MAMethod3 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph2MAMethod3 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>

    const primaryGraph3MAMethod3 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph3MAMethod3 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>

    const primaryGraph4MAMethod3 = <img alt="graph-one" className="graph-one" src="M2_SQS_SG1.jpeg"></img>
    const secondaryGraph4MAMethod3 = <img alt="graph-two" className="graph-two" src="M2_div_colls_SG1.jpeg"></img>



    if (this.props.sG1Resolution === "2MA" && this.props.sG1Method === "Method 1") {
      main_graph = <div>{primaryHeader2MAMethod1}{primaryGraph2MAMethod1}</div>
      secondary_graph = <div>{secondaryHeader2MAMethod1}{secondaryGraph2MAMethod1}</div>
    } else if (this.props.sG1Resolution === "3MA" && this.props.sG1Method === "Method 1") {
      main_graph = <div>{primaryHeader3MAMethod1}{primaryGraph3MAMethod1}</div>
      secondary_graph = <div>{secondaryHeader3MAMethod1}{secondaryGraph3MAMethod1}</div>
    } else if (this.props.sG1Resolution === "4MA" && this.props.sG1Method === "Method 1") {
      main_graph = <div>{primaryHeader4MAMethod1}{primaryGraph4MAMethod1}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod1}{secondaryGraph4MAMethod1}</div>
    } else if (this.props.sG1Resolution === "2MA" && this.props.sG1Method === "Method 2") {
      main_graph = <div>{primaryHeader4MAMethod2}{primaryGraph4MAMethod2}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod2}{secondaryGraph4MAMethod2}</div>
    } else if (this.props.sG1Resolution === "3MA" && this.props.sG1Method === "Method 2") {
      main_graph = <div>{primaryHeader4MAMethod2}{primaryGraph4MAMethod2}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod2}{secondaryGraph4MAMethod2}</div>
    } else if (this.props.sG1Resolution === "4MA" && this.props.sG1Method === "Method 2") {
      main_graph = <div>{primaryHeader4MAMethod2}{primaryGraph4MAMethod2}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod1}{secondaryGraph4MAMethod1}</div>
    } else if (this.props.sG1Resolution === "2MA" && this.props.sG1Method === "Method 3") {
      main_graph = <div>{primaryHeader4MAMethod3}{primaryGraph4MAMethod3}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod3}{secondaryGraph4MAMethod3}</div>
    } else if (this.props.sG1Resolution === "3MA" && this.props.sG1Method === "Method 3") {
      main_graph = <div>{primaryHeader4MAMethod3}{primaryGraph4MAMethod3}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod3}{secondaryGraph4MAMethod3}</div>
    } else if (this.props.sG1Resolution === "4MA" && this.props.sG1Method === "Method 3") {
      main_graph = <div>{primaryHeader4MAMethod3}{primaryGraph4MAMethod3}</div>
      secondary_graph = <div>{secondaryHeader4MAMethod3}{secondaryGraph4MAMethod3}</div>
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
