import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    const value1 = this.getRandValue();
  	const value2 = this.getRandValue();
  	const value3 = this.getRandValue();
    const proposedAnswer = Math.floor(Math.random()* 3) + value1 + value2 + value3;
    this.state = {
      value1 : value1,
      value2 : value2,
      value3 : value3,
      proposedAnswer : proposedAnswer,
      expectedAns : value1+value2+value3 === proposedAnswer,
      numQuestions : 0,
      numCorrect : 0
    };
  };

  checkAnswer = ( answer ) => {
      this.state.expectedAns === answer ? this.answerHandler( true ) : this.answerHandler( false );
  };

  answerHandler = ( correct ) => {
      let newValue1 = this.getRandValue();
      let newValue2 = this.getRandValue();
      let newValue3 = this.getRandValue();
      let newProposdAns = Math.floor(Math.random() * 3) + newValue1 + newValue2 + newValue3;
      let newExpectedAns = newValue1+newValue2+newValue3 === newProposdAns;
      
      if(correct){
          this.setState((currentState) => ({
              value1 : newValue1,
              value2 : newValue2,
              value3 : newValue3,
              proposedAnswer : newProposdAns,
              expectedAns : newExpectedAns,
              numQuestions : currentState.numQuestions + 1,
              numCorrect : currentState.numCorrect + 1,
          }));
      }
      else{
        this.setState((currentState) => ({
            value1 : newValue1,
            value2 : newValue2,
            value3 : newValue3,
            proposedAnswer : newProposdAns,
            expectedAns : newExpectedAns,
            numQuestions : currentState.numQuestions + 1,
        }));
      }
  };

  getRandValue = () => {
    return Math.floor(Math.random() * 100);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer( true )}>True</button>
          <button onClick={() => this.checkAnswer( false )}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
