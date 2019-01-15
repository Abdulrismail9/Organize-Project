import React, { Component } from 'react';
import { connect } from 'react-redux';


class ConventionInfo extends Component {

  componentDidMount () {
    this.getConvention();
  }

  getConvention = () => {
    this.props.dispatch({ type: 'FETCH_CONVENTION' })
  }

  
    render() {
      let conventionItems = this.props.reduxStore.convention.map((item) => {
        return (
            <div key={item.id} >
            {item.name} {item.description}
            </div>
        )
    })
        return(
            <div>
               {conventionItems}
            </div>
        )
    }
}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStateToProps)(ConventionInfo);