import React from "react";

function Comments({data}){
    return (
        <div>
            <h2> Comments</h2>
            <h3>{data.comments[0].user}</h3>
            <p>{data.comments[0].comment}</p>
            <h3>{data.comments[1].user}</h3>
            <p>{data.comments[1].comment}</p>
        </div>
    )
}
export default Comments;