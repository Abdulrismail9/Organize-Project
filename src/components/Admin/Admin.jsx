import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


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

class Admin extends Component {

    
    componentDidMount () {
        this.getListofEvents();
    }
    
    getListofEvents = () => {
        this.props.dispatch({ type: 'FETCH_EVENTS' })
    }

    removeEvent = (id) => {
        console.log('in remove event', id);
        this.props.dispatch({ type: 'DELETE_EVENT', payload: id})
    }
    render() {
        let eventItems = this.props.reduxStore.events.map((event) => {
            return (
                <div key={event.id} >
                {event.name} {event.date}
                <CardActions>
               <Button size="small" variant="contained" color="secondary" onClick={() => this.removeEvent(event.id)}>Delete</Button>
               <Button size="small" variant="contained" color="primary" >Edit</Button>
               </CardActions>
                </div>
            )
        })
        return(
            <div>
                <div>
                <Link to="/AdminCreate">
                Create Event
                </Link>
                </div>
                <div>
                Events
                <Card>
                <CardContent>
               {eventItems}
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

