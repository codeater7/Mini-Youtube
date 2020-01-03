import axios from 'axios';
import dev from '../config/dev';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 10,
		//key:`${KEY}`,
		key: `${dev.KEY}`,
	},
});
