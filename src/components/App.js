import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';


class App extends React.Component {
	state = { 
        videos: [],
        selectedVidoe: null
     };

	onTermSubmit = async term => {
		console.log(term);
		//pre configured instance of Axios
		// asynchronous request so have to use promise
		const response = await youtube.get('/search', { params: { q: term } });

		console.log(response);
        this.setState({ videos: response.data.items }); // response ko data ko vitra
    };

    // video object is the one we fetched from the api
    onVideoSelect = (video)=>{
        console.log('From the App', video)
    }

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.lenth} videos.
                <VideoList onVideoSelect={this.onVideoSelect}videos={this.state.videos}/>
			</div>
		);
	}
}
export default App;
