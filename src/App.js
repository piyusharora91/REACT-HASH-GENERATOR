import './App.css';
import { React, useState } from 'react';
import Form from './Form';
import generateHash from './SHAGenerator';
import TypeChangeButtons from './TypeChangeButtons';

const App = () => {

  const [text_input, setTextInput] = useState('');
  const [result, setResult] = useState('');
  const [sha_type, setShaType] = useState('SHA-1');


  const updateHash = (hash_output) => {
    hash_output
      .then((result) => {
        setResult(result.toUpperCase());
      })
      .catch((result) => {
        setResult('');
      });
  }

  const inputChange = (event) => {
    setTextInput(event.target.value);
    let hash_output = generateHash(event.target.value, sha_type);
    updateHash(hash_output);
  }

  const changeSHA = (event) => {
    setShaType(event.target.value);
    let hash_output = generateHash(text_input, event.target.value);
    updateHash(hash_output);
  }

  return (
    <div className="main-app">
      <div className="navbar">
        <h1>Hash Converter</h1>
      </div>

      <div className="fields">
        <Form displayInput={inputChange} sha_type={sha_type} />
        <TypeChangeButtons sha_change={changeSHA} />
        <div className="result-container">
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;