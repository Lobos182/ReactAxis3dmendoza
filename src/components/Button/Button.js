const Button = (props)=>{
    return<button style={{fontSize:props.tam , color:props.color}} 
    onClick={props.handleClick}>{props.label}</button>


}

export default Button