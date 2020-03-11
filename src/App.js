import React, { useState } from 'react';
// import Radium, {StyleRoot} from 'radium';
//Radium examples commented out so we can have a play with styled-components
// import styled from 'styled-components';
// Styled components coming out.
import classes from './App.css';
import Person from './Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'; 
import UserInput from './AssOneSyntax/UserInput';
import UserOutput from './AssOneSyntax/UserOutput';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   font: inherit;
//   border: 1px solid black;
//   padding: 8px; 
//   cursor: pointer;
//   color: white; 
  
//   &:hover {
//     background-color: ${props => props.alt ? 'coral' : 'lightgreen'}; 
//     color: black;
//   }
// `;

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
       {id: 'asgjsfd', name: 'Tom', age: 26}, 
       {id: 'kuafg', name: 'Person 2', age: 25},
       {id: 'kiuadfkj', name: 'Person 3', age: 31}
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
  
  // const style = {
  //   backgroundColor: 'green',
  //   font: 'inherit',
  //   border: '1px solid black',
  //   padding: '8px', 
  //   cursor: 'pointer',
  //   color: 'white', 
  //   ':hover': {
  //     backgroundColor: 'lightgreen', 
  //     color: 'black'
  //   }
  // };

  let personsCond = null; 
  let btnClass = [classes.Button];

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

    btnClass.push(classes.Red); 
    
    // style.backgroundColor = 'red'; 
  //   style[':hover'] = {
  //     backgroundColor: 'coral', 
  //     color: 'black'
  //   }; 
  //Radium examples commented out so we can have a play with styled-components
  }

  const assigned = [];

  if(personsState.persons.length <= 2) {
    assigned.push(classes.f_red);
  }

  if(personsState.persons.length <= 1) {
    assigned.push(classes.bold); 
  }

  return (
    // <StyleRoot>
    //Radium examples commented out so we can have a play with styled-components
    <div className={classes.App}>
          <h1 className="App-title">Hi, I'm a React App</h1>
          <p className={assigned.join(' ')}>Wow dynamic style updating based on number of persons</p>
          
          <button className={btnClass.join(' ')}
            onClick={() => togglePersonsHandler()}>Toggle persons 
          </button>

          {/* <StyledButton
            alt={showPersonsState.showPersons}
            onClick={() => togglePersonsHandler()}>Toggle persons 
          </StyledButton> */}
          {/* Styled-components coming out */}

          {personsCond}       

          <UserInput changed={inputChangedHandler.bind(this)} currentName={assState.username[0].name}></UserInput>
          <UserOutput userName={assState.username[0].name}></UserOutput>
          <UserOutput userName={assState.username[1].name}></UserOutput>
          <UserOutput userName={assState.username[2].name}></UserOutput>
      </div>
    // </StyleRoot>
    //Radium examples commented out so we can have a play with styled-components
    ); 
}; 
 
// export default Radium(app);
//Radium examples commented out so we can have a play with styled-components
export default app;
