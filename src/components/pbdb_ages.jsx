import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './pbdb_ages.css';

class PbdbAges extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <div>
        PBDB Ages or Updated Ages?
        </div>
        <ButtonGroup vertical>
          <Button
          id="pbdb_ages">
          PBDB Ages
          </Button>
          <Button
          id="updated_ages"
          >Updated Ages
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default PbdbAges;
