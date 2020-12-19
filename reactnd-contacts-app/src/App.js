import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import userRegistration from './component/userRegistration';

class App extends Component {
  state = {
    contacts : [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  };

  deleteContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter( c => {
        return c.id !== contact.id  
      }) 
    }));
  };

  render() {

    let listContacts = <ListContacts contacts={this.state.contacts}  onDeleteContact={this.deleteContact}/>;


    return (
      <div className="body">
        <Route
          exact
          path="/"
          render={()=> (listContacts)}
        />
        <Route
          exact
          path="/create"
          component={userRegistration}
        />
      </div>
    );
  }
}

export default App;
