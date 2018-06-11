import React, { Component } from 'react';

class FormCmp extends Component {


    render() {

        console.log('props - ', this.props);

        return(
            <form>
                <label for="fistName"> First name: </label>
                <input value={this.props.formData.firstName} type="text" name="firstName" /> <br />
                <label for="lastName"> Last name: </label>
                <input value={this.props.formData.lastName} type="text" name="lastName" /> <br />
                <label for="age"> Age: </label>
                <input value={this.props.formData.age} type="number" name="age" />
            </form>
        )
    }
}

export default FormCmp;