import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class MyAgenda extends Component {

    componentDidUpdate () {
        console.log('did update', this.props.reduxStore.interested)
    }

    componentDidMount () {
        this.getAgenda();
        console.log('did update', this.props.reduxStore.interested)
    }
  
    getAgenda  ()  {
        this.props.dispatch({ type: 'FETCH_INTERESTS' });
    }

    render() {
        let interestItems = this.props.reduxStore.interested.map((int) => {
            return (
                <div  className="tableDiv">
                <Card>
                    <CardContent>
                <div key={int.id} >
                {int.events_name}
                <div></div>
                {int.events_location}
                <div></div>
                {int.events_time}
                </div>
                </CardContent>
                </Card>
                </div>
            )
        })
        return(
            <div>
            <Typography  gutterBottom>
                 My Events
            </Typography>
        {interestItems}
      </div>
        )
    }
}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(MyAgenda);