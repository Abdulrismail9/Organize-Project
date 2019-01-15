import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';



class AdminUserList extends Component {

   
    
    getListofUsers = () => {
        this.props.dispatch({ type: 'FETCH_USER_LIST' });
    }

    componentDidMount () {
        this.getListofUsers();
    }

    removeUsers = (id) => {
        console.log('in remove users', id)
        this.props.dispatch({ type: 'DELETE_USERS', payload: id})
    }
    
    render() {
    return (
      <div>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Users</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reduxStore.userListReducer.map((list) => {
                  console.log('checking ', list);
                return (
                  <TableRow key={list.id}>
                    <TableCell >{list.username}</TableCell>
                    <Button size="small" variant="contained" color="secondary" onClick={() => this.removeUsers(list.id)}>Delete</Button>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
      </div>
        )
    }
}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(AdminUserList);