import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './score_grid2.css';

class ScoreGrid2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sg2State: ''
    }
    this.twoMAClick = this.twoMAClick.bind(this)
    this.threeMAClick = this.threeMAClick.bind(this)
    this.fourMAClick = this.fourMAClick.bind(this)
  }

  twoMAClick = () => {
    this.setState({
      sg2State: "2MA"
    })
  }

  threeMAClick = () => {
    this.setState({
      sg2State: "3MA"
    })
  }

  fourMAClick = () => {
    this.setState({
      sg2State: "4MA"
    })
  }

  render() {
    let graph_choice

    if (this.state.sg2State === "2MA") {
      graph_choice = "2MA AGES GRAPHS"
    } else if (this.state.sg2State === "3MA") {
      graph_choice = "3MA AGES GRAPHS"
    } else if (this.state.sg2State === "4MA") {
      graph_choice = "4MA AGES GRAPHS"
    }
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
            {graph_choice}
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScoreGrid2;
