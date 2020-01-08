import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GraphSg12Ma from './graphs/sg1_2ma.jsx';
import './score_grid1.css';

class ScoreGrid1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sg1State: ''
    }
    this.twoMAClick = this.twoMAClick.bind(this)
    this.threeMAClick = this.threeMAClick.bind(this)
    this.fourMAClick = this.fourMAClick.bind(this)
  }

  twoMAClick = () => {
    this.setState({
      sg1State: "2MA"
    })
  }

  threeMAClick = () => {
    this.setState({
      sg1State: "3MA"
    })
  }

  fourMAClick = () => {
    this.setState({
      sg1State: "4MA"
    })
  }

  render() {
    let graph_choice

    if (this.state.sg1State === "2MA") {
      graph_choice = <GraphSg12Ma/>
    } else if (this.state.sg1State === "3MA") {
      graph_choice = "3MA AGES GRAPHS"
    } else if (this.state.sg1State === "4MA") {
      graph_choice = "4MA AGES GRAPHS"
    }
    return (
      <div>
        <Row>
          <Col
          sm={3}
          className="options-holder">
            <div>
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
            {graph_choice}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScoreGrid1;
