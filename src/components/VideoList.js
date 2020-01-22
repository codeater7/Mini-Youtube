import React from 'react';
import VideoItem from './VideoItem';


const videoList = props => {
	console.log("props here:",props)  // videos and onVideoSelect

	const renderedList = props.videos.map(video => {
		return <VideoItem key={video.id.videoId}  onVideoSelect={props.onVideoSelect} video={video} />;
	});
	return (
		// uta bata aauda chai props banera aauxa ( props.name)
		<div>{renderedList}</div>

	
		// just using videos from there
	);
};

export default videoList;



