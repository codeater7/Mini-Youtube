import React from 'react';

// this props has video  ra onVideoSelect hunxa
const VideoItem = (props)=>{
    return(
        <div onCLick={()=>props.onVideoSelect()}>
            <img src= {props.video.snippet.thumbnails.medium.url}/>
            {props.video.snippet.title}
        </div>
    )
}
//need to update

export default VideoItem;