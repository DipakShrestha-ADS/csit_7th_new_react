import { useCallback, useState } from "react"
import ColorChange from "./color_change"

const CounterPage = () => {
    const [count, setCount] = useState(0)
    const [color, changeColor] = useState("red")
    const increment = ()=>{
        setCount(count + 1)
    }
    const handleChangeColor = useCallback(
        ()=>{
            changeColor(color === "red" ? "blue" : "red")
        },
        [
            color
        ]
    )
    return (
        <div>
            <ColorChange color={color} onChangeColor={handleChangeColor}/>
            <h1>Counter Page</h1>
            <b>Count: {count}</b>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default CounterPage