import { useState } from "react"
import { DATA } from "../data"

export default function Accordian(){
    
    const [multiSelectMode ,setMultiSelectMode] = useState(true)
    const [selected , setSelected] = useState([])


    function toggleMultiSelector(){
        setMultiSelectMode(prev => !prev)
        setSelected([])
    }

    function handleSingleSelection(id){
        if(selected === id){
            setSelected([])
        }
        else{
            setSelected([id])
        }
    }

    function handleMultiSelector(id){
         if(selected.includes(id)){
            setSelected(prev => prev.filter(item => item !== id))
         }else{
            setSelected(prev => [...prev,id])
         }
    }

    return <div className="wrapper">
        <button onClick={()=>toggleMultiSelector()}>Toggle Multi Selector Mode</button>
        <div className="accordian">
            {
            (DATA && DATA.length > 0) ? 
                DATA.map(children => {
                    const isSelected = !multiSelectMode ? selected[0] === children.id : selected.includes(children.id)
                    return (<div className="item" key={children.id}>
                    <div className="title" onClick={!multiSelectMode?()=>handleSingleSelection(children.id): ()=> handleMultiSelector(children.id)}>
                        <h1>{children.title}</h1>
                        <span>+</span>
                        {isSelected?<div>{children.content}</div> : <></>}
                    </div>
                </div>)
            }): (
                "No Items"
            )}
        </div>
    </div>
}