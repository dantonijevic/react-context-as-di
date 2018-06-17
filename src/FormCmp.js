import React, { Component } from 'react';

class FormCmp extends Component {


    firstNameChange = e => {
        e.preventDefault();
        this.props.onFirstNameChange(e.target.value);
    }

    render() {

        return(
            <form>
                <label htmlFor="fistName"> First name: </label>
                <input value={this.props.formData.firstName} onChange={this.firstNameChange} type="text" id="firstName" /> <br />
                <label htmlFor="lastName"> Last name: </label>
                <input value={this.props.formData.lastName} type="text" id="lastName" /> <br />
                <label htmlFor="age"> Age: </label>
                <input value={this.props.formData.age} type="number" id="age" />
            </form>
        )
    }
}

export default FormCmp;