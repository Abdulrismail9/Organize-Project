import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';


class eventsPage extends Component {


    componentDidMount() {
        this.getEvents();
    }

    getEvents() {
        console.log('get events');
        this.props.dispatch({ type: 'FETCH_EVENTS' })
    }

    render() {
        
        return(
            <div>
                 {this.props.reduxStore.events.map((event) => {
                    return (<EventList 
                        key={event.id} 
                        id={event.id} 
                        name={event.name} 
                        date={event.date} 
                        time={event.time}
                        description={event.description}
                        location={event.location} />);
                })}
                
            </div>
        )
    }

}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(eventsPage);