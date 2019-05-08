import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: true,
                    items: json
                })
            })
    }
    render() {
        const { isLoading, items } = this.state;
        if (!isLoading) {
            return (<div>.....Loading</div>)
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} |
                  Email: {item.email} </li>
                    ))};
            </ul>
            )
        }

    }

}
export default List;
