import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log("cc", this.state);
        axios.post('https://jsonplaceholder.typicode.com/users', this.state)
            .then(res => {
                console.log("res", res);
            })
            .catch(err => {
                console.log("err", err)
            })
    }
    render() {
        const { id, name, email } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>UserId</label>
                        <input type="text" name="id" value={id} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} />
                    </div>
                    <button type="submit"> Submit
                     </button>
                </form>

            </div>
        )
    }

}
export default Add;
