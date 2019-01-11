import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class EventList extends Component {

    state = {
        interested: false,
    }

    clickHandler = (id) => {
        console.log('clicked')
        this.props.dispatch({ type: 'POST_INTEREST', payload:  { event_id: this.props.id, person_id: this.props.reduxStore.user.id}  })
        this.setState({
            interested: true
        })
    }

    clickHandlerUninterested = () => {
        console.log('clicked')
        this.props.dispatch({ type: 'DELETE_INTEREST', payload:  { event_id: this.props.id, person_id: this.props.reduxStore.user.id}  })
        this.setState({
            interested: false
        })
    }
    

    render() {

        return(
            <List>
                <ListItem>
                <Grid container
                    justify='center'>
                        {this.state.interested ?
                            (<Button onClick={this.clickHandlerUninterested} size="medium" variant="outlined" color="secondary">
                                not interested
                            </Button>) :
                            (<Button onClick={this.clickHandler} size="medium" variant="outlined" color="secondary">
                                interested
                    </Button>)
                        }
                    </Grid>
                    <ExpansionPanel>
          <ExpansionPanelSummary >

                 <div>{this.props.name}</div>
                 
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <div>
                 <span>{moment(this.props.date).format('MMMM Do YYYY')}</span>
                 <span>{this.props.time}</span>
                 <br></br>
                 <span>{this.props.description}</span>
                <br></br>
                 <span>{this.props.location}</span>
                 </div>
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