import { memo } from "react"

const ColorChange = ({color, onChangeColor})=>{
    console.log("color change component rendered")
    return(
        <div>
            <h1>Color Change Page</h1>
            <p style={{color: color}}>Change the background color</p>
            <button onClick={onChangeColor}>Change Color</button>
        </div>
    )
}
export default memo(ColorChange)