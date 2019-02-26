import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import './question-section-style.css'
import MenuButton from '../../menu-items/menu-btn/menu-button'

export default class QuestionSection extends Component {
    
	state = {
    appearSection: true
	}

  toggleAppear = () => {
    this.setState({
      appearSection: !this.state.appearSection
    })
  }

  render() {
    const {appearSection} = this.state;
    return (
      <div>
        <CSSTransition
          in={appearSection}
          appear={true}
          timeout={1000}
          classNames="question-lable"
        >
          <div className="label-txt">
          	{this.props.question.index + 1}/{this.props.count}
          </div>
        </CSSTransition>
        <CSSTransition
          in={appearSection}
          appear={true}
          timeout={1000}
          classNames="question-text"
        >
          <div className="text-txt">
            {this.props.question.text}
          </div>
        </CSSTransition>
        <div className="btn-wrapper">
          <MenuButton onButtonClick={this.handleFalseClick.bind(this)} text="Нет"/>
          <MenuButton onButtonClick={this.handleTrueClick.bind(this)} text="Да"/>        
        </div>
      </div>
    )
  }

  handleTrueClick = () => {
    this.toggleAppear()
    setTimeout(function() {this.handleNextQuestionAction(true)}.bind(this), 1000)
  }

  handleFalseClick = () => {
    this.toggleAppear()
    setTimeout(function() {this.handleNextQuestionAction(false)}.bind(this), 1000)
  }

  handleNextQuestionAction(result) {
    this.props.nextQuestionAction(result)
    this.toggleAppear()
  }
}
