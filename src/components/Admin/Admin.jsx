import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Admin extends Component {



    render() {
        return(
            <div>
                <Link to="/AdminCreate">
                Create Event
                </Link>
            </div>
        )
    }

}

export default Admin;