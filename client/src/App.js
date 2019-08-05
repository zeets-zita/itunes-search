import React from 'react';

import './Components/style.css';

import Router from './Components/Router';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        < Router />
      </div>
    );
  }
}
  
export default App;