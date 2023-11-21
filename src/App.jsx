import React from 'react'
import './App.css'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
    inc = ()=>{
      this.setState({count: this.state.count+1})
    }
    dec = ()=>{
      if(this.state.count>0){
        this.setState({count: this.state.count-1})
      }
    }
    reset = ()=>{
      this.setState({count:0})
    }
  render(){
    return(
      <>
      <h1>Counter App</h1>
      <br />
      <h1 className='count'>{this.state.count}</h1>
      <div className='btn'>
      <button onClick={this.inc}>Increment</button>
      <button onClick={this.dec}>Decrement</button>
      <button onClick={this.reset}>Reset</button>
      </div>

      </>
    )
  }
  
  
}

export default App
