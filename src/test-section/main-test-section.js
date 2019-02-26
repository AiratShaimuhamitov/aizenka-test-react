import React, { Component } from 'react'
import './main-test-section.css'
import questions from '../resources/qeustions'
import QuestionSection from './question-section/question-section-index'
import ResultSection from './result-section/result-section-index'

export default class MainTestSection extends Component {

  constructor(props) {
    super(props)

    this.state = {
      question: questions.list[0],
      answers: {}
    }
  }

  render() {
    this.handleAction = this.handleAction.bind(this)
    
    const toRender = this.state.question != null
    ? <QuestionSection nextQuestionAction={this.handleAction} question={this.state.question} count={questions.list.length}/> 
    : <ResultSection answers={this.state.answers}/>

    return (
      <div className='test-section'>
        {toRender}
      </div>
    )
  }

  handleAction(result) {
    let answers = this.state.answers
    answers[this.state.question.index] = result
    this.setState({
      answers: answers
    })
    this.toggleQuestion();
  }

  toggleQuestion() {
    const newIndex = this.state.question.index + 1;
    this.setState({
      question: questions.list[newIndex]
    })
  }
}
