import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './Admin.css';
import AdminOrganization from './AdminOrganization';
import AdminConvention from './AdminConvention';
import AdminUserList from './AdminUserList';




const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

  const inputs = {
    name: '',
    date: '',
    time: '',
    location: '',
    description: ''
}

class Admin extends Component {

    state = inputs;

    
    componentDidMount () {
        this.getListofEvents();
    }
    
    getListofEvents = () => {
        this.props.dispatch({ type: 'FETCH_EVENTS' })
    }

    removeEvent = (id) => {
        console.log('in remove event', id)
        this.props.dispatch({ type: 'DELETE_EVENT', payload: id})
    }

    handleChangeFor = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    editEvent = (eventId) => {
        const data = {
            ...this.state,
            id: eventId
        }
        console.log('in edit event')
        this.props.dispatch({ type: 'EDIT_EVENT', payload: data })
        this.setState({
            inputs
        })   
    }
    
    render() {
        let eventItems = this.props.reduxStore.events.map((event) => {
            return (
                <div key={event.id} >
                {event.name} 
                <CardActions>
               <input type='text' name='name' placeholder='name' onChange={this.handleChangeFor} />
                <input type='text' name='date' placeholder='date' onChange={this.handleChangeFor} />
                <input type='text' name='time' placeholder='time' onChange={this.handleChangeFor} />
                <input type='text' name='location' placeholder='location' onChange={this.handleChangeFor} />
                <input type='text' name='description' placeholder='description' onChange={this.handleChangeFor} />
               <Button size="small" variant="contained" color="primary" onClick={() => this.editEvent(event.id)}>Edit</Button>
               <Button size="small" variant="contained" color="secondary" onClick={() => this.removeEvent(event.id)}>Delete</Button>
               </CardActions>
                </div>
            )
        })

        return(
            <div>
                <div  className="Cbtn">
                <Button variant="contained" color="secondary" >
                <Link to="/AdminCreate">
                Create Event
                </Link>
                </Button>
                </div>
                Events
                <div className="cards">
                <Card>
                <CardContent>
               {eventItems}
               </CardContent>
               </Card>
                </div>
                Organizations
                <div>
                <Card>
                <CardContent>
                    <AdminOrganization />
               </CardContent>
               </Card>
                </div>
                Conventions
                <div>
                <Card>
                <CardContent>
                    <AdminConvention />
               </CardContent>
               </Card>
                </div>
                Users
                <div>
                <Card>
                <CardContent>
                    <AdminUserList />
               </CardContent>
               </Card>
                </div>
            </div>
            
        )
    }
}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})
export default withStyles(styles)(connect(mapReduxStateToProps)(Admin));

