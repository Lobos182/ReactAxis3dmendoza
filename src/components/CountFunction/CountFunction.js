import { useState } from "react"
import Button from '../Button/Button'


const CountFunction = (props) => { //puedo poner props o cualquier palabra

    //   const state=useState(0)   
    //    const count = state[0]
    //    const setCount = state[1]

    const [count, setCount] = useState(0)


    //let count = 0

    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }


    return (
        <div>
            <h1>Contador Funcion</h1>
            <div>
                <h2>{props.children}</h2>
                <Button handleClick={decrement} label='| - |' color='red' tam='50px' />
                <h2 style={{ color: props.color }}>{count}</h2>
                <Button handleClick={increment} label='| + |' color='blue' tam='50px' />
            </div>
        </div>
    )

    // return (
    //     <div>
    //         <h1>Contador Funcion</h1>
    //         <div>
    //             <button onClick={decrement}>-</button>
    //             <h2 style={{ color: props.color }}>{count}</h2>
    //             <button onClick={increment}>+</button>
    //         </div>
    //     </div>
    // )


}
export default CountFunction