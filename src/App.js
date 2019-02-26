import React, { Component } from 'react';
import './App.css';
import WelcomeSection from './welcolme-section/welcome-section-index'
import DescriptionSection from './description-section/description-section-index'
import MainTestSection from './test-section/main-test-section'

class App extends Component {

  constructor(props){
    super(props)
    this.toggleSection = this.toggleSection.bind(this);
    this.state = { 
      toRender: [
        <WelcomeSection unmountMe={this.toggleSection}/>, //[0] - welcome section
        <DescriptionSection unmountMe={this.toggleSection}/>, //[1] - description section
        <MainTestSection/> //[2] - main test section
      ],
      renderIndex: 0 //change this to 1..2 if you want to debug faster
    };
  }

  toggleSection() {
    var tempRenderIndex = this.state.renderIndex
    
    if(tempRenderIndex + 1 >= this.state.toRender.length)
      tempRenderIndex = 0
    else
      tempRenderIndex += 1
    
    this.setState({renderIndex: tempRenderIndex})
  }

  render() {
    return(
      <div>
        {this.state.toRender[this.state.renderIndex]}
      </div>
    )
  }
}

export default App;
