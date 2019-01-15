import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';    
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


const styles = {
    card: {
      maxWidth: 20,
    },
    media: {
      objectFit: 'cover',
    },
  };


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
            <div>
               <Card className="eventCards">
               <CardActionArea>
                 {this.props.name}
                 <CardContent>
                 <span>{moment(this.props.date).format('MMMM Do YYYY')}</span>
                 <br></br>
               <span>{this.props.time}</span>
                 <br></br>
             <span>{this.props.description}</span>
                <br></br>
             <span>{this.props.location}</span>
                 </CardContent>
               </CardActionArea>
               <Grid container
                    >
                        {this.state.interested ?
                            (<Button onClick={this.clickHandlerUninterested} size="medium" variant="outlined" color="secondary">
                                not interested
                            </Button>) :
                            (<Button onClick={this.clickHandler} size="medium" variant="outlined" color="secondary">
                                interested
                    </Button>)
                        }
                    </Grid>
             </Card>
             </div>
        )
    }
}
const mapStateToProps = reduxStore => ({
    reduxStore,
});


export default withStyles(styles)(connect(mapStateToProps)(EventList));