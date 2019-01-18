import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
                {int.events_location}
                {int.events_time}
                </div>
            )
        })
        return(
            <div className="tableDiv">
                <Table >
        <TableHead>
          <TableRow>
            <TableCell>Event List</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
                <br/>
            {interestItems}
            
            </TableBody>
      </Table>
      </div>
        )
    }
}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(MyAgenda);