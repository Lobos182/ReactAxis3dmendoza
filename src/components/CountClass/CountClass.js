import { Component } from "react";

class CountClass extends Component{
    render(){
        console.log(this.props)
        return(
            <h1>contador Clase {this.props.color}</h1>
        )
    }
}

export default CountClass