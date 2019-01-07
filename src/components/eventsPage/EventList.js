import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class EventList extends Component {

    render() {
        
        return(
            <List>
                <ListItem>
            <div>
                <ListItemText primary={this.props.name} secondary={this.props.date} secondary={this.props.time}/>
                 <p>{this.props.name}</p>
                 <p>{this.props.date}</p>
                 <p>{this.props.time}</p>
                 <p>{this.props.description}</p>
                 <p>{this.props.location}</p>
                 
            </div>
            </ListItem>
            </List>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore,
});


export default connect(mapStateToProps)(EventList);