import React, { Component } from 'react'
import './description-section-style.css'
import {CSSTransition} from 'react-transition-group'
import MenuButton from '../menu-items/menu-btn/menu-button'

export default class DescriptionSection extends Component {
  
  state = {
    appearSection: true
  }

  toggleAppearSection() {
    this.setState({
      appearSection: !this.state.appearSection
    })
  }

  render() {
    const {appearSection} = this.state
    return (
      <div className='description-section'>
        <CSSTransition
          in={appearSection}
          appear={true}
          timeout={3000}
          classNames="fade-lable"
        >
          <div className="label">
              <p>Что за тест? Сейчас все расскажу..</p>
          </div>
        </CSSTransition>
        <CSSTransition
          in={appearSection}
          appear={true}
          timeout={3000}
          classNames="fade-text"
        >
          <div className="text">
          Всего будет 57 вопросов. Вопросы направлены на выявление обычного способа поведения. 
          Необходимо постараться представить типичные ситуации и дать первый «естественный» ответ, который придет в голову. 
          Если согласен с утверждением, нажми на кнопку "Да", если нет, то мы сделали еще одну кнопку с надписью "Нет".

          </div>
        </CSSTransition>
        <CSSTransition
          in={appearSection}
          appear={true}
          timeout={1000}
          classNames="fade-btn-descr"
        >
          <div className="continue-btn">
            <MenuButton onButtonClick={this.handleClick.bind(this)} text="Продолжить"/>
          </div>
        </CSSTransition>
      </div>
    )
  }

  handleClick = () => {
    this.toggleAppearSection()
    setTimeout(function() {this.dismiss()}.bind(this), 1000)
  }

  dismiss() {
    this.props.unmountMe()
  }

}
