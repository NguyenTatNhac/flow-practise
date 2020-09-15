// @flow
import React from 'react';
import './App.css';
import Square from "./component/Square";

function App() {

  return (
      <div className="App">
        <Square width={200} height={200}/>
        <Square width={300} height={300}/>
      </div>
  );
}

export default App;
