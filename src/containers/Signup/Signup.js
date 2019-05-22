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

        return (
            <>
                <div>
                    <input placeholder='username'/>
-                   <input placeholder='email' />
-                   <input placeholder='password' />
                    <button>Signup</button>
                </div>
            </>
        );
    }
}

export default Signup;