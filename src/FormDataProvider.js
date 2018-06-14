import React, { Component } from 'react';

import { data, AppContext } from './app-context';

class FormDataProvider extends Component {

    constructor(props) {
        super(props);

        this.state = data;
    }

    


    render() {

        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default FormDataProvider;