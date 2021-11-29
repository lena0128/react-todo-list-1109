import React from 'react'

class ItemForm extends React.Component {

    // pass in props to remind ourselves we need props that are passed down from the parent component - List Component
    constructor(props){
        super(props)
        this.state = {
            itemName: "",
        }
    }

    handleSubmit = (e) => {
        // step 1: prevent the site from refreshing
        e.preventDefault()

        // step 2: invoke the callback function to pass the value back to the parent component
        this.props.sendData(this.state.itemName)

        // step 3: clear the form after submission
        // since setState() is asynchronous so it doesn't matter if you want to clear form first or invoke the callback function  
        this.setState({
            itemName: ""
        })

    }

    // [e.target.name]: e.target.value => dynamically set up 
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="itemName" onChange={this.handleChange} value={this.state.itemName}></input>
                <input type="submit"></input>
            </form>

        )
    }
}

export default ItemForm

// this.input = React.createRef() => This is how we access Uncontrolled Components 