import React from 'react';

class SearchBar extends React.Component {
    state={ term: ''}
    // callback is going to be executed with event object
    //Event handlers
    onInputChange=(event)=>{
        this.setState({term: event.target.value})
    onFormSubmit=(event)=>{
        // Enter garexi page refresh hunee behaviour is not what we want
        event.preventDefault();
        //TODO: Make Sure we call callback from parent component
    }

    }
	render() {
		return (
        <div className="search-bar ui segment">
            <form  onSubmit={ this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text"
                     value={this.state.term}
                     //onchange= {e=> this.setState({term=e.target.value})}
                     onChange={this.onInputChange}
                     />

                </div>
            </form>

        </div>);
	}
}

export default SearchBar;
