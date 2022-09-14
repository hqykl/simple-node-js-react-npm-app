import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">简单测试一下，待更新</p>
        <div>
          备案号: <a href="https://beian.miit.gov.cn/">京ICP备2020039358号-1</a>
        </div>
      </div>
    )
  }
}

export default App
