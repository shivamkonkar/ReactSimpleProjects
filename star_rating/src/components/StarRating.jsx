import { CiStar } from "react-icons/ci";
import { useState } from 'react'
import './styles.css'

export default function StarRating({noOfStars = 5}){

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleEnter(getCurrentIndex){
        setHover( getCurrentIndex)
    }

    function handleLeave(){
        setHover(rating)
    }

    return <div className="star-rating">
    {
        [...Array(noOfStars)].map((_,index) => {
            return <CiStar
            key = {index}
            className= {index <= (hover ||rating) ? 'active' : 'inactive'}
            onClick ={()=>{handleClick(index)}}
            onMouseMove ={()=>{handleEnter(index)}}
            onMouseLeave = {()=>{handleLeave()}}
            size = {40}
            />
        })
    }

    </div>
}