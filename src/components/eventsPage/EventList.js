import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';

class EventList extends Component {

    render() {
        
        return(
            <List>
                <ListItem>
                    <Checkbox />
                 <p>{this.props.name}</p>
                 <p>{this.props.date}</p>
                 <p>{this.props.time}</p>
                 <p>{this.props.description}</p>
                 <p>{this.props.location}</p>

                </ListItem>
            </List>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore,
});


export default connect(mapStateToProps)(EventList);