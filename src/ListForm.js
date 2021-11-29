import React from 'react'

// conatainer component

class ListForm extends React.Component {

    constructor(props){
       super(props)
       this.state = {
           name: ""
       }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const body = {list: this.state}
        const baseURL = "my url"
        const configObj = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(body)
        }
        fetch(baseURL, configObj)
        .then(resp => resp.json())
        .then(list => this.props.sendData(list))
        this.setState({name: ""})
    }

    handleChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          }) 
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                Create a New List<br />
                <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default ListForm

