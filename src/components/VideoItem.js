import React from 'react';

// this props has video  ra onVideoSelect hunxa
const VideoItem = props => {
	console.log("props in VideoItem", props)  // onVideoSelect  video
	return (
		// Very imp that calling only onVideoSelect wont work, we need to make it arrow function and pass video
		<div onClick={() => props.onVideoSelect(props.video)}>
			<img src={props.video.snippet.thumbnails.medium.url} alt="from youtube API" />
			{props.video.snippet.title}
		</div>
	);
};
//need to update

export default VideoItem;

// parents call me with the prop system
//i call parents with the callback.
//
