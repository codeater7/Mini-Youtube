import React from 'react';

//yo props ma video leraune
const VideoDetail = ({video}) => {
  
    //instead of single quote use back ticks on both side ..$ sign curley bracket 
    //otherwise string concatenation

    if (!video) {
		return <div></div>;
	} else {
        const videoSrc= 'https://www.youtube.com/embed/'+ video.id.videoId 
        
        return (
            <div className='ui embed'>
                <iframe title="Video player" src={videoSrc}/>

            
            {video.snippet.title}
        <p>{video.snippet.description}</p>
        </div>);
        
	}
};
export default VideoDetail;



