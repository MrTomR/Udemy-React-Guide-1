import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './AssOneSyntax/UserInput';
import UserOutput from './AssOneSyntax/UserOutput';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
       {id: 'asgjsfd', name: 'Tom', age: 26}, 
       {id: 'kuafg', name: 'Ashley', age: 25},
       {id: 'kiuadfkj', name: 'Megan', age: 31}
    ]
  });

  const [showPersonsState, setshowPersonsState] = useState({showPersons: false}); 
  
  const [assState, setAssState] = useState({
    username: [
      {name: 'Thomas'},
      {name: 'Michael'},
      {name: 'Robbins'}
    ]
  });

  const deletePersonsHandler = (personIndex) => {
    // const persons = personsState.persons.slice(); 
    const persons = [...personsState.persons]; 
    persons.splice(personIndex, 1);
    setPersonsState({ persons: persons});
  }

  const togglePersonsHandler = () => {
      const doesShow = showPersonsState.showPersons;
      setshowPersonsState({showPersons: !doesShow}); 
  }

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {
      ...personsState.persons[personIndex]
    };

    person.name = event.target.value; 

    const persons = [...personsState.persons];
    persons[personIndex] = person; 
    setPersonsState({persons: persons}); 
  }

  const inputChangedHandler = (event) => {
    setAssState({
      username: [
        {name: event.target.value},
        {name: 'Updated username'},
        {name: 'object'}
      ]
    });
  }
  
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px', 
    cursor: 'pointer'
  };

  let personsCond = null; 

  if(showPersonsState.showPersons) {
    personsCond = (
      <div>
        {personsState.persons.map((person, index) => {
            return <Person 
                      click={() => deletePersonsHandler(index) }
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => nameChangedHandler(event, person.id)}
                      >
                        Something here
                    </Person>
        }) }
        
      </div> 
    )
  }

  return (
    <div className="App">
        <h1 className="App-title">Hi, I'm a React App</h1>
        <p>This is a paragraph</p>
        <button 
          style={style} 
          onClick={() => togglePersonsHandler()}>Switch Name</button>  

        {personsCond}       

        <UserInput changed={inputChangedHandler.bind(this)} currentName={assState.username[0].name}></UserInput>
        <UserOutput userName={assState.username[0].name}></UserOutput>
        <UserOutput userName={assState.username[1].name}></UserOutput>
        <UserOutput userName={assState.username[2].name}></UserOutput>
    </div>
    ); 
}; 
 




export default app;
