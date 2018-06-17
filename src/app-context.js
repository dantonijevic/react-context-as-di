import React from 'react';

export const data = {
    formData: {
        firstName: 'Name',
        lastName: 'LName',
        age: 25
    },
    onFirstNameChange: (fName) => {},
    onLastNameChange: (lName) => {},
    onAgeChange: (age) => {}
}

export const AppContext = React.createContext();