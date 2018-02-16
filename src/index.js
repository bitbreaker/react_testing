import React, { Component } from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};



var state = { items: ["Apfel", "Gurke", "Marmelade", "Brot", "Test"] };



class Apps2 extends Component {

  constructor(properties) {
    super();
    this.state = {
      items: properties.datenElemente.items,
    };
  }

  sortTable = () => {
    const stateChanges = {
      items: [].concat(this.state.items).sort()
    };
    this.setState(stateChanges);
  }

  render() {

    return (
      <div>
        <table id="myTable">
          <thead>
            <tr>
              <th>{this.state.items[0]}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(name =>
              <tr key={name}>
                <td>{name}</td>
              </tr>
            )}
          </tbody>
        </table>
        <button onClick={this.sortTable}>Sort</button>
      </div>
    );
  }
}


const Button = () => <button />;

class Button2 extends Component {
  render() {
    return (
      <button />
    );
  }
}

render(<Apps2 datenElemente={state} sort="ascending" />, document.getElementById('root'));
