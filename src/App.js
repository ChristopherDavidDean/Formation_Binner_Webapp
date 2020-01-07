import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import PbdbAges from './components/pbdb_ages.jsx';
import ScoreGrid1 from './components/score_grid1.jsx';
import ScoreGrid2 from './components/score_grid2.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      binningMethod: "StageBins",
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
    if(this.state.binningMethod === "StageBins") {
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
          <PbdbAges/>
        </div>
      )}
    else if (this.state.binningMethod === "ScoreGrid1") {
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
          <ScoreGrid1/>
        </div>
      )} else {
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
          <ScoreGrid2/>
        </div>
      )
    }
  }
}

export default App;
