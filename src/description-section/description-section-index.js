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
              <p>Description</p>
          </div>
        </CSSTransition>
        <CSSTransition
          in={appearSection}
          appear={true}
          timeout={3000}
          classNames="fade-text"
        >
          <div className="text">
            It's description, isn't it?
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
    console.log("dismiss()")
    this.props.unmountMe()
  }

}
