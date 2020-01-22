import React from 'react';

class SearchBar extends React.Component {
	state = { searchterm: ' ' };
	
	UponSubmit = event => {
		event.preventDefault();

		const { otherNameforthisfunction }= this.props
		//which method do you want to call ? Isnot it the function from main App, so we imported and invoked with our searchterm
		otherNameforthisfunction(this.state.searchterm);
		
	}; 

	render() {
		return (
			<div >
				<form onSubmit={this.UponSubmit} >
					<div >
						<label>Video Search</label>
						<input
							type="text"
							value={this.state.searchterm}
							
							// callback is going to be executed with event object
							onChange={event=> this.setState({searchterm: event.target.value})}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
