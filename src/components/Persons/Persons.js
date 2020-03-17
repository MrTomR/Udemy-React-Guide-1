import React, { Component } from 'react'; 
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state; 
  // }

  // componentWillReceiveProps (props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props); 
  // }
  //Doesnt work anymore, removed from React. componentWillUpdate is another in this boat.

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    if(
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    ) {
      return true; 
    } else {
      return false; 
    }
  }

  //Parent components updating information and passing to a child - 
  //This will always cause a re-render of the child with the new information
  //So shouldComponentUpdate being used in this scenario wouldnt be good
  //Because you are executing an unnecessary additional function. 
  //If you are in sibling components that do not need to pass information to one another
  // (Think This file and Cockpit.js) its a great check to run because you dont want this file
  // to rerender when information that affects the Cockpit changes

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate'); 
    return {message: 'Snapshot!'}; 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate'); 
    console.log(snapshot); 
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount'); 
  }


  render() {
    console.log('[Persons.js] rendering...'); 
    return this.props.persons.map((person, index) => {
        return (
          <Person 
              click={() => this.props.clicked(index) }
              name={person.name} 
              age={person.age}
              key={person.id}                      
              changed={(event) => this.props.changed(event, person.id)}
              >                    
                Something here
          </Person>
        )
     });
  }
}

export default Persons; 