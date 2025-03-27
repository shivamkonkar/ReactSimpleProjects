import { useState , useEffect } from "react"

export default function RandomColorGen(){
    const [colorFormat, setColorFormat] = useState("hex")
    const [color, setColor] = useState(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);


    async function generateColor(code = colorFormat){
        if(code){
            setColorFormat(code)
        }
        if(code == "hex"){
            setColor(`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`);
        }else{
            let o = Math.round, r = Math.random, s = 255;
            setColor(`rgba(${o(r()*s)}, ${o(r()*s)}, ${o(r()*s)}, ${0.1 + r() * 0.9})`);
        }
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]); 



    
    return (
        <div>
            <button onClick={() =>generateColor()}>generate</button>
            <button onClick={()=> generateColor("hex")}>generate hex color</button>
            <button onClick={()=> generateColor("rgb")}>generate rgb color</button>
            <h1>{color}</h1>
        </div>
    )
}