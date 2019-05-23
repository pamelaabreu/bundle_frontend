import React from 'react';

import firebase from '../../firebase';

class Signup extends React.Component {
    state = {
        inputs: {
            username: "", 
            email: "",
            password: ""
        },
        fillFormInputError: "",
        firebaseCreateUserError: ""
    }

    handleInputChange = e => {
        const { inputs } = {...this.state};
        inputs[e.target.name]= e.target.value.trim();

        this.setState({ inputs });
    }

    handleSignupButtonClick = e => {
        e.preventDefault();

        const { inputs } = this.state;
        const { email, password } = inputs;
            
            
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => response.user.uid,
            
            // This is the handling for the Firebase error when creating a user 
            ({message}) => this.setState({firebaseCreateUserError: message })
        )
        .then(firebaseUid => {
            // Logic for creating user in the backend
        })

    }

    render () {
        const { inputs, fillFormInputError, firebaseCreateUserError } = this.state;
        const inputsArray = Object.entries(inputs);

        return (
                <form>
                    {fillFormInputError ? <p>{fillFormInputError}</p> : null}
                    {firebaseCreateUserError ? <p>{firebaseCreateUserError}</p> : null}
                    {inputsArray.map(([inputName, inputValue], index) => {
                        const inputType = inputName.toLowerCase() === 'password' ? "password" : "text";
                        const isRequired = inputName.toLowerCase() === 'username' ? false : true;
                        return <input 
                                onChange={this.handleInputChange} 
                                key={index} 
                                type={inputType} 
                                value={inputValue} 
                                name={inputName} 
                                placeholder={inputName} 
                                required={isRequired}
                                min='1'
                            />
                    })}
                    <button onClick={this.handleSignupButtonClick}>Signup</button>
                </form>
        );
    }
}

export default Signup;