import * as React from "react";
import axios from 'axios';


class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label htmlFor="userName">User Name</label>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          id="userName"
          required 
        />
        </div>
        <br/>
        <button>Add card</button>
    	</form>
        
    );
  }
}

export default Form