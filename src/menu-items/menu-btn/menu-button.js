import React, { Component } from 'react'
import './menu-button.css'

export default class MenuButton extends Component {

	state = {
		text: this.props.text
	}

  render() {
		const { onButtonClick } = this.props 
    return (
      <div className="menu-button-section">
          <a href="#/" className="menu-button" onClick={onButtonClick}>{this.state.text}</a>
      </div>
    )
	}
}
