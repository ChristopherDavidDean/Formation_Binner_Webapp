import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import PbdbAges from './components/pbdb_ages.jsx';
import ScoreGrid1 from './components/score_grid1.jsx';
import ScoreGrid2 from './components/score_grid2.jsx';
import NavbarMain from './components/navbar/navbar.jsx';
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
    let secondary_selector

    if(this.state.binningMethod === "StageBins") {
      secondary_selector = <div><PbdbAges/></div>;
    } else if (this.state.binningMethod === "ScoreGrid1") {
      secondary_selector = <div><ScoreGrid1/></div>;
    } else {
      secondary_selector = <div><ScoreGrid2/></div>;
    }
    return (
      <div className="App">
        <NavbarMain/>
        <div className="selector-container">
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
          <br></br>
          {secondary_selector}
        </div>
      </div>
    )
  }
}

export default App;
