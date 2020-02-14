import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sg1Graphs from './graphs/sg1_graphs.jsx';
import './score_grid1.css';

class ScoreGrid1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sG1Resolution: '',
      sG1Method: ''
    }
    this.twoMAClick = this.twoMAClick.bind(this)
    this.threeMAClick = this.threeMAClick.bind(this)
    this.fourMAClick = this.fourMAClick.bind(this)
    this.methodOneClick = this.methodOneClick.bind(this)
    this.methodTwoClick = this.methodTwoClick.bind(this)
    this.methodThreeClick = this.methodThreeClick.bind(this)
  }

  twoMAClick = () => {
    this.setState({
      sG1Resolution: "2MA"
    })
  }

  threeMAClick = () => {
    this.setState({
      sG1Resolution: "3MA"
    })
  }

  fourMAClick = () => {
    this.setState({
      sG1Resolution: "4MA"
    })
  }

  methodOneClick = () => {
    this.setState({
      sG1Method: "Method 1"
    })
  }

  methodTwoClick = () => {
    this.setState({
      sG1Method: "Method 2"
    })
  }

  methodThreeClick = () => {
    this.setState({
      sG1Method: "Method 3"
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col
          sm={2}
          className="options-holder">
            <div
            className="Resolution-Header">
            Resolution
            </div>
            <ButtonGroup vertical>
              <Button
              id="sg1_2ma"
              onClick={this.twoMAClick}>
              2 Ma
              </Button>
              <Button
              id="sg1_3ma"
              onClick={this.threeMAClick}
              >
              3 Ma
              </Button>
              <Button
              id="sg1_4ma"
              onClick={this.fourMAClick}
              >
              4 Ma
              </Button>
              <div
              className="Method-Header">
              Method
              </div>
              <Button
              id="sg1_m1"
              onClick={this.methodOneClick}>
              Method 1
              </Button>
              <Button
              id="sg1_m2"
              onClick={this.methodTwoClick}
              >
              Method 2
              </Button>
              <Button
              id="sg1_m3"
              onClick={this.methodThreeClick}
              >
              Method 3
              </Button>
            </ButtonGroup>
          </Col>
          <Col className="graph-holder">
            <div
            className="graphs">
            <Sg1Graphs
            sG1Resolution={this.state.sG1Resolution}
            sG1Method={this.state.sG1Method}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScoreGrid1;
