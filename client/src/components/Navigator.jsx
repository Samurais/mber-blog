'use strict'

import React from 'react'
import {
    ButtonToolbar,
    Button
} from 'react-bootstrap'

require('styles//Navigator.sass')

class Navigator extends React.Component {

    render() {
        return ( < ButtonToolbar >
            < Button bsStyle = "primary"
            onClick = "this." >
            Login < /Button> < Button bsStyle = "primary" >
            Logout < /Button> < /ButtonToolbar > )
    }
}

Navigator.displayName = 'Navigator'

// Uncomment properties you need
// Navigator.propTypes = {}
// Navigator.defaultProps = {}

export default Navigator