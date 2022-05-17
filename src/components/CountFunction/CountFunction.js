import { useState, useEffect } from "react"
import Button from '../Button/Button'


const CountFunction = (props) => { //puedo poner props o cualquier palabra

    const [count, setCount] = useState(0)

    console.log(useEffect)
    useEffect(() => {
        console.log('me ejecuto despues del montaje')

        return () => {
            console.log('me ejecuto antes de desmotarme')
        }

    }, [])

    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

    console.log('ejecuto antes de render')


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