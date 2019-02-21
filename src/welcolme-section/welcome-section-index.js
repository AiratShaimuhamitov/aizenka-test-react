import React, {Component} from 'react'
import './welcome-section-style.css'
import FlyInText from '../fly-in-text';
import {CSSTransition} from 'react-transition-group'

class WelcomeSection extends Component {
    state = {
        appearSection: true
    }
    
    toggleAppearSection = () => {
      this.setState({
        appearSection: !this.state.appearSection
      })
    }
    
    render() {
        const {appearSection} = this.state;
        return (
          <div className="welcome-section">
            <div className="content-wrap">
              <FlyInText letters = {['П', 'Р', 'И', 'В', 'Е', 'Т']} ref={instance => {this.child = instance}}/>
              <CSSTransition
                  in={appearSection}
                  appear={true}
                  timeout ={3000}
                  classNames="fade-descr"
              >
                <div className="description">
                  Это тест Айзенка – Русалова. Нажми на кнопку ниже чтобы начать
                </div>   
              </CSSTransition>  
              <CSSTransition
                in={appearSection}
                appear={true}
                timeout={3000}
                classNames="fade-btn"
              >
                <div className="enter-button-section">
                  <a href="#" className="enter-button" onClick={this.handleClick}>Начать тест</a>
                </div>
              </CSSTransition>
            </div>
          </div>
        );
    }

    handleClick = () => { 
        this.toggleAppearSection()
        this.child.handleClick()
        setTimeout(function() {this.dismiss()}.bind(this), 1000)
        console.log(this.state.appearSection);
    }

    dismiss() {
       this.props.unmountMe()
    } 
} 

export default WelcomeSection