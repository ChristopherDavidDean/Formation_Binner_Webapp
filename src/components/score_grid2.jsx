import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './score_grid2.css';

class ScoreGrid2 extends React.Component {
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
          id="sg2_2ma">
          2 Ma
          </Button>
          <Button
          id="scoregrid2_3ma"
          >
          3 Ma
          </Button>
          <Button
          id="sg2_4ma"
          >
          4 Ma
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default ScoreGrid2;
