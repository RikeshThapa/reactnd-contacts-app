import React, { Component } from 'react';

class ListContacts extends Component {
    render () {
        return (
            <ul className='contact-list'>
                { 
                    this.props.contacts.map( contact => (
                        <li key={ contact.id }>
                            {contact.name}
                        </li>                    
                    ))
                }
            </ul>
        )
    }
}


export default ListContacts;