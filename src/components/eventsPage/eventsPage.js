import React, { Component } from 'react';
import { connect } from 'react-redux';


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
                
            </div>
        )
    }

}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(eventsPage);