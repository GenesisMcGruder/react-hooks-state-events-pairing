import React, {useState}from "react";
import Comments from "./Comments";

function Hide({data}){
    const [comments,setComments] = useState(true)

    function handleHideClick(){
        setComments(!comments)
    }
console.log(data.comments[1].user)
    return (
        <div>
            <button onClick={handleHideClick}> {comments?"Hide Comments":"Show Comments"} </button>
            {comments?<Comments data={data} />: null}
        </div>
    )
}
export default Hide;