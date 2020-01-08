import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './pbdb_ages.css';

class PbdbAges extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pbdbState: ''
    }
    this.pdbdClick = this.pbdbClick.bind(this)
    this.updAgesClick = this.updAgesClick.bind(this)
  }

  pbdbClick = () => {
    this.setState({
      pbdbState: "PBDB Ages"
    })
  }

  updAgesClick = () => {
    this.setState({
      pbdbState: "Updated Ages"
    })
  }

  render() {
    let graph_choice

    if (this.state.pbdbState === "PBDB Ages") {
      graph_choice = "PBDB AGES GRAPHS"
    } else if (this.state.pbdbState === "Updated Ages") {
      graph_choice = "UPDATED AGES GRAPHS"
    }
    return (
      <div>
        <Row>
          <Col
          sm={2}
          className="options-holder">
            <div
            className="Secondary-Header">
            PBDB Ages or Updated Ages?
            </div>
            <ButtonGroup vertical>
              <Button
              id="pbdb_ages"
              onClick={this.pbdbClick}>
              PBDB Ages
              </Button>
              <Button
              id="updated_ages"
              onClick={this.updAgesClick}>
              Updated Ages
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

export default PbdbAges;
