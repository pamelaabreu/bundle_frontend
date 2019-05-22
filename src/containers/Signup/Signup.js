import React from 'react';

class Signup extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            inputs: {
                username: "", 
                email: "",
                password: ""
            }
        }
    }

    handleInputChange = e => {
        const { inputs } = {...this.state};
        inputs[e.target.name]= e.target.value.trim();

        this.setState({ inputs })
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
                    <button>Signup</button>
                </form>
            </>
        );
    }
}

export default Signup;