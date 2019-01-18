import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const orgInputs = {
    name: '',
    description: '', 
    phone_number: ''
}

class AdminOrganization extends Component {
    state = orgInputs;

    handleChangeFor = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    editOrg = (orgId) => {
        const dataSet = {
            ...this.state,
            id: orgId
        }
        console.log('in edit event')
        this.props.dispatch({ type: 'EDIT_ORG', payload: dataSet })
        this.setState({
            orgInputs
        })   
    }
   
    getListofOrganizations = () => {
        this.props.dispatch({ type: 'FETCH_ORG' })
    }

    componentDidMount () {
        this.getListofOrganizations();
    }

    removeOrganization = (id) => {
        console.log('in remove organization', id)
        this.props.dispatch({ type: 'DELETE_ORG', payload: id})
    }

    render() {

        return (
            <div>
                <Table >
                  <TableHead>
                    <TableRow>
                      <TableCell>Organization</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Phone Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.reduxStore.organization.map((org) => {
                      return (
                        <TableRow key={org.id}>
                          <TableCell > {org.name}</TableCell>
                          <TableCell > {org.description}</TableCell>
                          <TableCell > {org.phone_number}</TableCell>
                          <input type='text' name='name' placeholder='name' onChange={this.handleChangeFor} />
                         <input type='text' name='description' placeholder='description' onChange={this.handleChangeFor} />
                         <input type='number' name='phone_number' placeholder='phone_number' onChange={this.handleChangeFor} />
                          <Button size="small" variant="contained" color="primary" onClick={() => this.editOrg(org.id)}>Edit</Button>
                          <Button size="small" variant="contained" color="secondary" onClick={() => this.removeOrganization(org.id)}>Delete</Button>
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

export default connect(mapReduxStateToProps)(AdminOrganization);