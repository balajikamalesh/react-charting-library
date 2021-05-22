import React, { useState } from 'react';
import FormPage from './components/controls';
import Result from './components/result';
import './App.css';

function App() {
  const [data, setData] = useState({});

  const addToData = (points) => {

  }

  return (
    <div className="App">
        <Result data={data}/>
        <FormPage />
    </div>
  );
}

export default App;
