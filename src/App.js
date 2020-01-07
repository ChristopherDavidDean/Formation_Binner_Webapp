import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <div className="bin-method-wrapper">
          <div className="bin-header">
          Binning Methods
          </div>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button>Stage Bins</Button>
              <Button>Score Grid 1</Button>
              <Button>Score Grid 2</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default App;
