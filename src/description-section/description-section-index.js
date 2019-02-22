import React, { Component } from 'react'
import './description-section-style.css'
import {CSSTransition} from 'react-transition-group'

export default class DescriptionSection extends Component {
    
  render() {
    return (
      <div className='description-section'>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade-lable"
        >
          <div className="label">
              <p>Description</p>
          </div>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade-text"
        >
          <div className="text">
            It's description, isn't it?
          </div>
        </CSSTransition>
      </div>
    )
  }
}
