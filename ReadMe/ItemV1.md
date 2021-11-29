import React from 'react'

// the responsibility of Item class is to render single item
class Item extends React.Component{

    render(){
        return (
            <div>
            <li key={this.props.idx}>{this.props.item}</li>
            
            </div>
        )
    }

}

// <button onClick={(e) => {this.props.callbackFn("Cereal")}}>Send info back to the List</button>
// we define an anonymous arrow function here, so `(e) => {this.props.callbackFn("Cereal")}` is our callback function to the event listener
// when the event is triggered, we want to trigger the callbackFn and send the `arg` ("Cereal") back to the parent component
// The flow is -
// When I click this button, I trigger this callback anonymous arrow function that receives the `event` as the argument
// The body of that function is invoking our callbackFn and to that callbackFn we are sending the `arg` which is "Cereal"
// That triggers the function updateState(arg) in the List class

export default Item