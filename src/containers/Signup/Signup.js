import React from 'react';

import firebase from '../../firebase';

class Signup extends React.Component {
    state = {
        inputs: {
            username: "", 
            email: "",
            password: ""
        },
        fillFormInputError: ""
    }

    handleInputChange = e => {
        const { inputs } = {...this.state};
        inputs[e.target.name]= e.target.value.trim();

        this.setState({ inputs });
    }

    validateFormInputs = () => {
        const { inputs } = this.state;
        
        return inputs.email.length > 0 && inputs.password.length > 0;
    }

    handleSignupButtonClick = e => {
        e.preventDefault();

        // First check to see if all required inputs are filled out
        if(!this.validateFormInputs()){
            // If the required inputs aren't filled out, throw an error
            this.setState({ fillFormInputError: "Please fill out all required fields." });
        } 
        else {
            const { inputs } = this.state;
            const { email, password } = inputs;
            
            // If the required inputs are filled out, register the user
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => response.user.uid, ({message}) => console.log("Error", message))
        }
    }

    render () {
        const { inputs, fillFormInputError } = this.state;
        const inputsArray = Object.entries(inputs);

        return (
                <form>
                    {fillFormInputError ? <p>{fillFormInputError}</p> : null}
                    {inputsArray.map(([inputName, inputValue], index) => {
                        const inputType = inputName.toLowerCase() === 'password' ? "password" : "text";

                        return <input onChange={this.handleInputChange} key={index} type={inputType} value={inputValue} name={inputName} placeholder={inputName}/>
                    })}
                    <button onClick={this.handleSignupButtonClick}>Signup</button>
                </form>
        );
    }
}

export default Signup;