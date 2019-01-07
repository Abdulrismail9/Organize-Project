import React, { Component } from 'react';
import { connect } from 'react-redux';


const inputForm = {
    name: '',
    date: '',
    time: '',
    location: '',
    description: ''
}


class AdminCreate extends Component {
    state = inputForm;


    handleChangeFor = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        this.props.dispatch({ type: 'ADD_NEW', payload: this.state })
        this.setState({
            inputForm
        })
    }

    render() {
        return(
            <div>
                <input type='text' name='name' placeholder='name' onChange={this.handleChangeFor} value={this.state.name} />
                <input type='text' name='date' placeholder='date' onChange={this.handleChangeFor} value={this.state.date} />
                <input type='text' name='time' placeholder='time' onChange={this.handleChangeFor} value={this.state.time} />
                <input type='text' name='location' placeholder='location' onChange={this.handleChangeFor} value={this.state.location} />
                <input type='text' name='description' placeholder='description' onChange={this.handleChangeFor} value={this.state.description} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

}

export default connect()(AdminCreate);