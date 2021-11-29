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

    handleClick = () => {
        this.setState({
            lists: this.state.lists
        })
    }

    render(){
        // note that the key(s) are ONLY for the virtual DOM to decide what needs to to update
        // They will not display on the real DOM; you will not see a key in the HTML
        return(
            <React.Fragment>
                <button onClick={this.handleClick}>Click Me!</button>
                <ListForm sendData={this.updateState} />
                <ul>
                    {this.state.lists.map((list, index) => <React.Fragment key={index}><List list={list} /><p>Check details</p></React.Fragment>)}
                </ul>
            </React.Fragment>
        )
    }
}

export default Lists