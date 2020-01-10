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
      sG1State: ''
    }
    this.twoMAClick = this.twoMAClick.bind(this)
    this.threeMAClick = this.threeMAClick.bind(this)
    this.fourMAClick = this.fourMAClick.bind(this)
  }

  twoMAClick = () => {
    this.setState({
      sG1State: "2MA"
    })
  }

  threeMAClick = () => {
    this.setState({
      sG1State: "3MA"
    })
  }

  fourMAClick = () => {
    this.setState({
      sG1State: "4MA"
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
            className="Secondary-Header">
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
            </ButtonGroup>
          </Col>
          <Col className="graph-holder">
            <div
            className="graphs">
            <Sg1Graphs
            sG1State={this.state.sG1State}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScoreGrid1;
