import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'
import './index.css';

class FlyInText extends Component {
    
  state = {
    letters: this.props.letters,
    appear: true
  }

  handleClick() {
    this.setState({
      appear: !this.state.appear
    })
  }

  render() {        
    const flyInTextLetters = this.state.letters.map((letter) =>
      <li key={letter}>{letter}</li>
    )
    return(
      <CSSTransition
        in={this.state.appear}
        appear={true}
        timeout={1000}
        classNames="fade"
      >
        <ul className="fly-in-text">
    		  {flyInTextLetters}
        </ul>
      </CSSTransition>
    );
  }
}

export default FlyInText;