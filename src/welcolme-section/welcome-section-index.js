import React, {Component} from 'react'
import './welcome-section-style.css'
import FlyInText from '../fly-in-text';
import {CSSTransition} from 'react-transition-group'
import MenuButton from '../menu-items/menu-btn/menu-button'

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
                  <p>Это тест Айзенка – Русалова.</p>
                  <p>Нажми на кнопку ниже чтобы начать</p>
                </div>   
              </CSSTransition>  
              <CSSTransition
                in={appearSection}
                appear={true}
                timeout={3000}
                classNames="fade-btn"
              >
                <div>
                  <MenuButton onButtonClick={this.handleClick.bind(this)} text="Начать тест"/>
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
    }

    dismiss() {
       this.props.unmountMe()
    } 
} 

export default WelcomeSection