import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      binningMethod: false,
    }
  }

  stageBinsClick = () => {
    this.setState({
      binningMethod: "StageBins"
    })
  }

  scoreGrid1Click = () => {
    this.setState({
      binningMethod: "ScoreGrid1"
    })
  }

  scoreGrid2Click = () => {
    this.setState({
      binningMethod: "ScoreGrid2"
    })
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
              <Button
              id="stagebins"
              onClick={this.stageBinsClick}>
              Stage Bins
              </Button>
              <Button
              id="scoregrid1"
              onClick={this.scoreGrid1Click}>
              Score Grid 1
              </Button>
              <Button
              id="scoregrid2"
              onClick={this.scoreGrid2Click}>
              Score Grid 2
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default App;
