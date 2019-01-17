import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyAgenda extends Component {

    componentDidMount () {
        this.getAgenda();
    }
  
    getAgenda  ()  {
        this.props.dispatch({ type: 'FETCH_INTERESTS' });
    }

    render() {
        let interestItems = this.props.reduxStore.interested.map((int) => {
            return (
                <div key={int.id} >
                {int.events_name}
                <div></div>
                </div>
            )
        })
        return(
            <div>
            {interestItems}
            </div>
        )
    }
}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(MyAgenda);