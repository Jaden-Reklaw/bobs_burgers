import React from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

//Needed to activate Bulma on the project
//After npm install
import 'bulma/css/bulma.css';

function App() {
  return (
    <div class="container">
      <div class="notification">
        This container is <strong>centered</strong> on desktop.
      </div>
    </div>
  );
}

export default App;
