import React, { Component } from 'react';
import { connect } from 'react-redux';



class InfoPage extends Component {


  componentDidMount () {
    this.testOrganization();
  }

  testOrganization = () => {
    this.props.dispatch({ type: 'FETCH_ORG' })
  }

  
    render() {
      let organizationItems = this.props.reduxStore.organization.map((org) => {
        return (
            <div key={org.id} >
            {org.name}
            <div></div>
            <br/>
            Description:
            <br/>
             {org.description}
             <div></div>
            <br/>
            phone number: 
            <br/>
            {org.phone_number}
            <div></div>
            </div>
        )
    })
        return(
            <div className="organizationStyles">
               {organizationItems}
            </div>
        )
    }
}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStateToProps)(InfoPage);