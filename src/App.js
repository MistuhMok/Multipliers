import React, { Component } from 'react';
import './App.css';
import Table from './Table';

const grid = [];
let counter = 10;
while (counter--) grid.push(new Array(10).fill(''));

const initialState = {
  grid,
  selectedColor: 'red',
  width: 10,
  height: 10,
  multipliers: [2, 3, 4],
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  drawGrid = () => {
    const { height, width } = this.state;

    const grid = [];
    let counter = height;
    while (counter--) grid.push(new Array(+width).fill(''));
    this.setState({ grid });
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value }, this.drawGrid);
  };

  addMultiplier = evt => {
    const { multipliers } = this.state;

    multipliers.push(0);
    this.setState({ multipliers });
  };

  removeMultiplier = evt => {
    const { multipliers } = this.state;
    multipliers.splice(evt.target.name, 1);
    this.setState({ multipliers });
  };

  handleMultiplierChange = evt => {
    const { multipliers } = this.state;
    multipliers[evt.target.name] = +evt.target.value;
    this.setState({ multipliers });
  };

  render() {
    const { width, height, multipliers } = this.state;

    return (
      <div className="App">
        <div>
          <form>
            Table Width:{' '}
            <input
              type-="number"
              min="0"
              onChange={this.handleChange}
              value={width}
              name="width"
            ></input>
          </form>
          <form>
            Table Height:{' '}
            <input
              type-="number"
              min="0"
              onChange={this.handleChange}
              value={height}
              name="height"
            ></input>
          </form>
          Multipliers
          <ul>
            {multipliers.map((multiplier, index) => (
              <div
                style={{ display: 'flex', justifyContent: 'center' }}
                key={index}
              >
                <span
                  className="dot"
                  data-multiplier={index}
                  style={{ height: '25px', width: '25px', borderRadius: '50%' }}
                ></span>{' '}
                <input
                  type-="number"
                  min="0"
                  onChange={this.handleMultiplierChange}
                  value={multiplier}
                  name={index}
                ></input>
                <button
                  name={index}
                  onClick={index => this.removeMultiplier(index)}
                >
                  X
                </button>
              </div>
            ))}
          </ul>
          <button onClick={() => this.addMultiplier()}>Add multiplier</button>
        </div>

        <Table grid={this.state.grid} multipliers={multipliers} />
      </div>
    );
  }
}
