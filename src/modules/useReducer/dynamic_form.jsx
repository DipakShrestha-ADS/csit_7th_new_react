import { useReducer, useState } from "react"
const initialFields = [
    {
        id: Math.floor(Math.random() * 2000),
        value: "",
        placeholder: "Enter your name",
        name: "name",
    },
]
const reducer = (state, action) => {
    console.log("state inside reducer: ", state)
    switch(action.type){
        case "ADD":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 2000),
                    value: action.value,
                    placeholder: action.placeholder,
                    name: action.name,
                }
            ]
        case "REMOVE":
            return state.filter(
                (field)=>{
                    return field.id !== action.id
                }
            )
        case "UPDATE":
            return state.map(
                (field)=>{
                    if(field.id == action.id){
                        return {
                            ...field,
                            value: action.value
                        }
                    }else{
                        return field
                    }
                }
            )
        default:
            return state

    }
}
const DynamicForm = () => {
    const [fieldState, dispatch] = useReducer(reducer, initialFields)
    const handleAddField = ()=>{
        dispatch({type: "ADD", name: "adress", placeholder: "Enter your address", value: ""})
    }
    const handleRemoveField = (id)=>{
        dispatch({type: "REMOVE", id: id})
    }
    const handleUpdateField = (id, value)=>{
        dispatch({type: "UPDATE", id: id, value: value})
    }
    return (
        <div>
            <h1>Dynamic Form</h1>
            {
                fieldState.map(
                    (field) => {
                        return (
                            <div key={field.id}>
                                <b>{field.id}</b>&nbsp;
                                <input type="text" placeholder={field.placeholder} value={field.value} name={field.name} onChange={(e) => {
                                    handleUpdateField(field.id, e.target.value)
                                 }} />
                                <button onClick={()=>handleRemoveField(field.id)}>Remove</button>
                            </div>
                        )
                    }
                )
            }
            <button onClick={handleAddField}>Add Field</button>
        </div>
    )
}
export default DynamicForm