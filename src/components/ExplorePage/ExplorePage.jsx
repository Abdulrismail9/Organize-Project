import React, { Component } from 'react';
import { connect } from 'react-redux';


class ExplorePage extends Component {


  

    render() {
        
        return(
            <div>
                
                
            </div>
        )
    }

}
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(ExplorePage);