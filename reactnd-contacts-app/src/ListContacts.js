import React, { Component } from 'react';

class ListContacts extends Component {
    render () {
        return (
            <ul>
                { 
                    this.props.data.map( user => (
                        <li>{user.name}</li>                    
                    ))
                }
            </ul>
        )
    }
}


export default ListContacts;