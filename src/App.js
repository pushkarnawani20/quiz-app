import React, { Component } from 'react';
import quizData from './quiz.json';
import QuestionTitle from './components/QuestionTitle';
import Options from './components/Options';
import Results from './components/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       start: 0,
       selected: 'None yet!',
       questions:quizData,
       score: 0
     }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.retryQuiz = this.retryQuiz.bind(this);
  }

  handleSubmit() {
    let {questions,selected,start,score} = this.state;
    if (selected !== 'None yet!') {
      let correctIndex = questions[start].correct;
      if (selected === questions[start].answers[correctIndex]) {
        this.setState({
          score: score + 1,
          start: start + 1,
          selected: 'None yet!'
        })
      } else {
        this.setState({
          start: start + 1,
          selected: 'None yet!'
        })
      }
    }
  }

  handleSelect(answer) {
    this.setState({
      selected: answer
    })
  }

  retryQuiz() {
    this.setState({
      start: 0,
      selected: 'None yet!',
      score: 0
    })
  }
  render() {
    console.log(this.state);
    let {questions, start } = this.state;
    return (
      <div className="app">
          <header className="header">
              <h1 >React Quiz</h1>
          </header>
          {start < questions.length  ? (
            <>
                <div className="quizStatus">
                  <p>Progress: {start}/{questions.length}</p>
                </div>
                <QuestionTitle current_question={questions[start].question} />
                <Options
                  answers={questions[start].answers}
                  handleSelect={this.handleSelect}
                  handleSubmit={this.handleSubmit}
                  selectedAnswer={this.state.selected} />
            </>
          )
          :(
            <Results score={this.state.score} end_message="Congratulations, you have finished!" retry={this.retryQuiz} />

        )}
      </div>
    );
  }
}

export default App;
