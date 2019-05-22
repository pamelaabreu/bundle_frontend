import React from 'react';

class Signup extends React.Component {
    state = {
        inputs: {
            username: "", 
            email: "",
            password: ""
        }
    }

    handleInputChange = e => {
        const { inputs } = {...this.state};
        inputs[e.target.name]= e.target.value.trim();

        this.setState({ inputs })
    }

    validateFormInputs = () => {
        const { inputs } = this.state;
        
        return inputs.email.length > 0 && inputs.password.length > 0;
    }

    handleSignupButtonClick = e => {
        e.preventDefault();
        if(this.validateFormInputs()){
            console.log("logic to signup user")
        } else console.log("logic to send error")
    }

    render () {
        const { inputs } = this.state;
        const inputArray = Object.entries(inputs);

        return (
            <>
                <form>
                    {inputArray.map(([inputName, inputValue], index) => {
                        const inputType = inputName.toLowerCase() === 'password' ? "password" : "text";

                        return <input onChange={this.handleInputChange} key={index} type={inputType} value={inputValue} name={inputName} placeholder={inputName}/>
                    })}
                    <button onClick={this.handleSignupButtonClick}>Signup</button>
                </form>
            </>
        );
    }
}

export default Signup;