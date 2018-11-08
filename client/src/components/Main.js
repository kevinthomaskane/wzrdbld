import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <img className="main__image--left" src="/images/left.png" alt="left"/>
        <img className="main__image--right" src="/images/right.png" alt="right"/>
      </div>
    )
  }
}

export default Main;