import React, { Component } from 'react';
import { connect } from 'react-redux';


class AccessDeniedView extends Component {

    render() {
        
        return(
     <div className="accessPage">
            Access Denied!   
      </div>
        )
    }
}


export default connect()(AccessDeniedView);