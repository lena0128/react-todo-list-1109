import React from 'react'
import Item from './Item'
import ItemForm from './ItemForm'

class List extends React.Component{

    constructor() {
        super()
        this.state = {
            listItems: ["Coffee", "Ice Cream", "Sugar", "Salt"]  
        }
        // this.updateState = this.updateState.bind(this)
    }

    // RememBER WE CAN ONLY RETURN ONE Element
    // note that the key we named as idx or i is just for React
    render(){
        return(
            <div>
                <ItemForm sendData={this.updateState} />
            <ul>
                {this.state.listItems.map((item, idx) => <Item key={idx} item={item} id={idx} callbackFn={this.updateState} />)}
            </ul>
            </div>
        )
    }

    updateState = (arg) => {
        debugger
        // option 1: we define this callback as an arrow function to make sure the value of this is the list object
        // option 2: or we can use bind => <button onClick={this.updateState.bind(this)}>Click me to Update the State!</button>
        // option 3: this.updateState = this.updateState.bind(this) in the constructor method 
        
        // this.setState({listItems: [...this.state.listItems, "Cereal"]})
        this.setState((preState, preProps) => { return {listItems: [...preState.listItems, arg]} })

    }
}

// List.defaultProps = {
//     listItems: ["Hi"]
// }

export default List