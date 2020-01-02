import React from 'react';

//yo props ma video leraune
const VideoDetail = props => {
    //ES 2015 back string
    //instead of single quote use back ticks on both side ..$ sign curley bracket 
    //otherwise string concatenation

    
	if (!props.video) {
		return <div></div>;
	} else {
        const videoSrc= 'https://www.youtube.com/embed/'+ props.video.id.videoId // api bata 
        console.log(videoSrc)
        return <div>
            <div className='ui embed'>
                <iframe title="Video player"src={videoSrc}/>

            </div>
            {props.video.snippet.title}
        <p>{props.video.snippet.description}</p>
        </div>;
        
	}
};
export default VideoDetail;
