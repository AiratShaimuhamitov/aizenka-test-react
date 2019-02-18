import React, { Component } from 'react';
import './App.css';
import FlyInText from './fly-in-text';
import {CSSTransition} from 'react-transition-group'

class App extends Component {

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
    console.log(this.state.appearSection);
  }
}

export default App;
