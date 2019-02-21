import React, { Component } from 'react';
import './App.css';
import WelcomeSection from './welcolme-section/welcome-section-index'
import DescriptionSection from './description-section/description-section-index'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      toRender: [
        <WelcomeSection unmountMe={this.handleChildUnmount}/>, //[0] - welcome section
        <DescriptionSection/> //[1] - description section
      ],
      renderIndex: 0
    };
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }

  toggleSection() {
    var tempRenderIndex = this.state.renderIndex
    
    if(tempRenderIndex + 1 >= this.state.toRender.length)
      tempRenderIndex = 0
    else
      tempRenderIndex += 1
    
    this.setSection(tempRenderIndex)
  }

  setSection(sectionIndex) {
    this.setState({renderIndex: sectionIndex})
  }

  render() {
    return(
      <div>
        {this.state.toRender[this.state.renderIndex]}
      </div>
    )
  }

  handleChildUnmount() {
    this.toggleSection()
  }
}

export default App;
