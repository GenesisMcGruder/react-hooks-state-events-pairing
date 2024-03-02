import React, { useState } from "react";
import Hide from "./Hide";
function Description({data}){
    const [likes,setLikes] =useState(9210)
    const [downvotes,setDownvotes] = useState(185)

    function handleLikes(){
        setLikes(function(likes){
            return likes + 1
        })
    }

    function handleDownvotes(){
        setDownvotes(function(downvotes){
            return downvotes + 1
        })
    }
    return(
        <div>
            <h2>{data.title}</h2>
            <p>{data.views} Views | Uploaded{data.createdAt}</p>
            <button onClick={handleLikes}>{likes} 👍</button>
            <button onClick={handleDownvotes}>{downvotes} 👎</button>
            <Hide data={data}/>
        </div>
    )
}

export default Description;