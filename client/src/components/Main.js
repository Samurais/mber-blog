require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Navigator from './Navigator';

class AppComponent extends React.Component < any, any > {

    constructor(props) {
        super(props);
        super.state = {
            count: parseInt(props.initialVal)
        };
        this.displayName = "Main Frame";
    }

    render() {
        return ( < div className = "index" >
            <Navigator> </Navigator> < div className = "notice" > Please edit < code > src / components / Main.js < /code> to get started!</div >
            < /div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;