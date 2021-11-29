import React from 'react'
import ListForm from './ListForm'
import List from './List'

class Lists extends React.Component {

    constructor(){
        console.log("1 - constructor")
        super()
        this.state = {
            lists: [{name: "Errands"}, {name: "Health"}, {name: "Work"}],
            id: (Math.floor(Math.random() * Math.floor(100))),
            tracker: 0
        }
    }

    componentDidMount(){
        console.log("3:componentDidMount")

        this.timerID = setInterval(
            () => console.log("here is the timer"), 1000
        )
    }

    componentWillUnmount(){
      clearInterval(this.timerID)
    }

    updateState = (arg) => {
        this.setState((prevState, prevProps) => {
            return {lists: [...prevState.lists, arg]}
        })
    }

    render(){
        console.log("2 - render")
        return(
            <div>
                <ListForm sendData={this.updateState} />
                <ul>
                    {this.state.lists.map((list, index) => <List key={index} list={list} />)}
                </ul>
            </div>
        )
    }
}

export default Lists