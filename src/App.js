import './App.css';
import { React, Component } from 'react';
import Form from './Form';
import generateHash from './SHAGenerator';
import TypeChangeButtons from './TypeChangeButtons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text_input: '',
      result: '',
      sha_type: 'SHA-1'
    }
  }

  inputChange = (event) => {
    this.setState({ text_input: event.target.value });
    let hash_output = generateHash(event.target.value, this.state.sha_type);
    hash_output
      .then((result) => {
        this.setState({ result: result.toUpperCase() });
      })
      .catch((result) => {
        this.setState({ result: '' });
      });
  }

  changeSHA = (event) => {
    this.setState({ sha_type: event.target.value });
    let hash_output = generateHash(this.state.text_input, event.target.value);
    hash_output
      .then((result) => {
        this.setState({ result: result.toUpperCase() });
      })
      .catch((result) => {
        this.setState({ result: '' });
      });
  }

  render() {
    return (
      <div className="main-app">
        <div className="navbar">
          <a href="/"><h1>Hash Converter</h1></a>
        </div>

        <div className='main-app' >
          <div className="fields">
            <Form displayInput={this.inputChange} sha_type={this.state.sha_type} />
            <TypeChangeButtons sha_change={this.changeSHA} />
            <div className="result-container"><h1>{this.state.result}</h1></div>
          </div >
        </div>
      </div >
    );
  }
}

export default App;
