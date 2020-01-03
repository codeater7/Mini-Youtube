import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
	state = {
		videos: [],
		selectedVidoe: null,
    };
    componentDidMount(){
        this.onTermSubmit('youtube')
    }

	onTermSubmit = async term => {
		console.log(term);
		//pre configured instance of Axios
		// asynchronous request so have to use promise
        const response = await youtube.get('/search', { params: { q: term } });
        console.log(response);
        this.setState({ 
            videos: response.data.items, 
            selectedVidoe: response.data.items[0] }); // response ko data ko vitra
	};

	// video object is the one we fetched from the api
	onVideoSelect = video => {
		this.setState({ selectedVidoe: video });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<VideoDetails video={this.state.selectedVidoe} />
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
				{/* All the props name above... vidoes, onnVideoSelect, video */}
				{/* cannot read property aayo vani, mostly use the check */}
			</div>
		);
	}
}
export default App;
