import React from "react"
import Lists from './Lists'

class App extends React.Component {
// we need to access methods from the React library, particularlly, we want to inherit from React.Component   
// React itself is an object, all we do here is calling the Component property on that object
// the return value from React.component is going to be another class we extended 

constructor(){
  super()
  this.state = {showLists: true}
}

// every time we click this button it will mounting or unmounting the lists
toggleLists = () => {
  // pass in a function as the argument - function is better since setState is asynchronous
  this.setState(prevState => ({showLists: !prevState.showLists}))

  // pass in an object as the argument
  // this.setState({showLists: !this.state.showLists})
}

render() {
  console.log(this) // => the intance of our App class
  
  // note that you can name the keys of the props whatever you want
  return <div>
    <button onClick={this.toggleLists}>Toggle Lists</button>
      {this.state.showLists ? <Lists /> : null}
    <Lists />
    </div>
}

// the e below is an instance of SyntheticEvent that is a React version event 
//handleClick = (e) => {
//  console.log("clicked", e)
//}

}

// in order to import the file, we need to export it first
export default App