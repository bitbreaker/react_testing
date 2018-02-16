import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
<div>
    <table id="myTable">
    <tr>
    <th>Name</th>
    <th>Adresse</th>
    </tr>
  <tr>
    <td>Entry One</td>
  </tr>
  <tr>
    <td>Entry Two</td>
    </tr>
    <tr>
    <td>Entry Three</td>
    </tr>
    <tr>
    <td>Entry Four</td>
  </tr>
  </table>
  <button>SORT</button>
</div>
);

render(<App />, document.getElementById('root'));
