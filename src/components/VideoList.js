import React from 'react'
import VideoItem from './VideoItem'


// props ma videos aauxa,  onvideoSelect pani 6
const videoList = (props)=>{

    const renderedList = props.videos.map((video)=>{
        return < VideoItem  onVideoSelect={props.onVideoSelect} video={video}/>

    })
    return (
        // uta bata aauda chai props banera aauxa ( props.name)
        <div>
            {renderedList}
        </div>

        // mathi ko props rakhnu vanda ni, we can do es15 destructuring, 
        // just using videos from there
    )
}

export default videoList;