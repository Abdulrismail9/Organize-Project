import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const conventionInputs = {
    name: '',
    description: ''
}

class AdminConvention extends Component {

    state = conventionInputs;

    handleChangeFor = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    editConvention = (conventionId) => {
        const data = {
            ...this.state,
            id: conventionId
        }
        console.log('in edit convention')
        this.props.dispatch({ type: 'EDIT_CONVENTION', payload: data })
        this.setState({
            conventionInputs
        })   
    }
   
    getListofConventions = () => {
        this.props.dispatch({ type: 'FETCH_CONVENTION' })
    }

    componentDidMount () {
        this.getListofConventions();
    }

    removeConvention = (id) => {
        console.log('in remove convention', id)
        this.props.dispatch({ type: 'DELETE_CONVENTION', payload: id})
    }


    render() {
       
        return (
            <div>
                <Table >
                  <TableHead>
                    <TableRow>
                      <TableCell>Conventions</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.reduxStore.convention.map((item) => {
                      return (
                        <TableRow key={item.id}>
                          <TableCell > {item.name}</TableCell>
                          <TableCell > {item.description}</TableCell>
                          <input type='text' name='name' placeholder='name' onChange={this.handleChangeFor} />
                         <input type='text' name='description' placeholder='description' onChange={this.handleChangeFor} />
                         <Button size="small" variant="contained" color="primary" onClick={() => this.editConvention(item.id)}>Edit</Button>
                          <Button size="small" variant="contained" color="secondary" onClick={() => this.removeConvention(item.id)}>Delete</Button>
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

export default connect(mapReduxStateToProps)(AdminConvention);