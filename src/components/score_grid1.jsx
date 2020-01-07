import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './score_grid1.css';

class ScoreGrid1 extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <div>
        Resolution
        </div>
        <ButtonGroup vertical>
          <Button
          id="sg1_2ma">
          2 Ma
          </Button>
          <Button
          id="sg1_3ma"
          >
          3 Ma
          </Button>
          <Button
          id="sg1_4ma"
          >
          4 Ma
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default ScoreGrid1;
