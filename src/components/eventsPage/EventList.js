import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

class EventList extends Component {

    render() {

        return(
            <List>
                <ListItem>
                    <Checkbox />
                    <ExpansionPanel>
          <ExpansionPanelSummary >

                 <div>{this.props.name}</div>
                 
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
                 <div>{this.props.date}</div>
                 <div>{this.props.time}</div>
                 <div>{this.props.description}</div>
                 <div>{this.props.location}</div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
                </ListItem>
            </List>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore,
});


export default connect(mapStateToProps)(EventList);