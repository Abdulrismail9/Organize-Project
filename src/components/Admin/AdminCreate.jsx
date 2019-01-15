import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        this.props.history.push('/Admin');
    }

    render() {
        return(
            <div className="textFields">
            Create Event
            <br/>
                <TextField type='text' name='name' placeholder='name' onChange={this.handleChangeFor} value={this.state.name} />
                <TextField type='text' name='date' placeholder='date' onChange={this.handleChangeFor} value={this.state.date} />
                <br/>
                <TextField type='text' name='time' placeholder='time' onChange={this.handleChangeFor} value={this.state.time} />
                <TextField type='text' name='location' placeholder='location' onChange={this.handleChangeFor} value={this.state.location} />
                <br/>
                <TextField type='text' name='description' placeholder='description' onChange={this.handleChangeFor} value={this.state.description} />
                <br/>
                <Button size="small" variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
            </div>  
        )
    }

}

export default connect()(AdminCreate);