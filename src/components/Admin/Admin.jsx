import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class Admin extends Component {


    componentDidMount () {
        this.getListofEvents();
    }
    
    getListofEvents = () => {
        this.props.dispatch({ type: 'FETCH_EVENTS' })
    }

    render() {
        return(
            <div>
                <Link to="/AdminCreate">
                Create Event
                </Link>
                <List>
                    <ListItem>
                        <ListItemText primary={this.props.name} secondary={this.props.date}/>
                    </ListItem>
                    </List>
            </div>
        )
    }

}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStateToProps)(Admin);