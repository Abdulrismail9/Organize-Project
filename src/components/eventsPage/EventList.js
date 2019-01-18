import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            <div className="eventsContainer">
                
               <div>
                   </div>
                 {this.props.name}
                <div></div>
                 <span>{moment(this.props.date).format('MMMM Do YYYY')}</span>
                 <br></br>
               <span>{this.props.time}</span>
                 <br></br>
             <span>{this.props.description}</span>
                <br></br>
             <span>{this.props.location}</span>
                <div className="interestBtn"> 
               <Grid container
                    >
                        {this.state.interested ?
                            (<Button  onClick={this.clickHandlerUninterested} size="medium" variant="outlined" color="secondary">
                                not interested
                            </Button>) :
                            (<Button onClick={this.clickHandler} size="medium" variant="outlined" color="secondary">
                                interested
                    </Button>)
                        }
                    </Grid>
                    </div>
             </div>
         
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore,
});


export default connect(mapStateToProps)(EventList);