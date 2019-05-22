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

    render () {
        const { inputs } = this.state;
        const inputArray = Object.entries(inputs);

        return (
            <>
                <form>
                    {inputArray.map(([inputName, inputValue], index) => {
                        const inputType = inputName.toLowerCase() === 'password' ? "password" : "text";

                        return <input key={index} type={inputType} name={inputName} placeholder={inputName}/>
                    })}
                    <button>Signup</button>
                </form>
            </>
        );
    }
}

export default Signup;