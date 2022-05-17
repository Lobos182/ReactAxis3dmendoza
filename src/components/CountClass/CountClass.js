import { Component } from "react";

class CountClass extends Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        console.log(this.props)
        return (
            <h1>contador Clase {this.props.color}</h1>
        )
    }
}

export default CountClass