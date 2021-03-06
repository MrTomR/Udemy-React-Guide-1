import React, { useState } from 'react';
// import Radium, {StyleRoot} from 'radium';
//Radium examples commented out so we can have a play with styled-components
// import styled from 'styled-components';
// Styled components coming out.
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'; 
import UserInput from '../components/AssOneSyntax/UserInput';
import UserOutput from '../components/AssOneSyntax/UserOutput';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux'; 
import AuthContext from '../context/auth-context';

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
  const [cockpitState, setCockpitState] = useState({showCockpit: true});
  const [authState, setAuthState] = useState({isauthenticated: false}); 
  
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
  const loginHandler = () => {
    const authStateCopy = authState.isauthenticated;
    setAuthState({isauthenticated: !authStateCopy}); 
  }

  const toggleCockpitHandler = () => {
    const doesCockpitShow = cockpitState.showCockpit;
    setCockpitState({showCockpit: !doesCockpitShow}); 
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

  if(showPersonsState.showPersons && cockpitState.showCockpit) {
    personsCond = (
      <div>
        <Persons 
          persons = {personsState.persons}
          clicked={deletePersonsHandler}
          changed={nameChangedHandler}
        />        
      </div> 
    )
    
    // style.backgroundColor = 'red'; 
  //   style[':hover'] = {
  //     backgroundColor: 'coral', 
  //     color: 'black'
  //   }; 
  //Radium examples commented out so we can have a play with styled-components
  }

  return (
    // <StyleRoot>
    //classes={classes.App}
    //Radium examples commented out so we can have a play with styled-components
    <Aux>
          <button onClick={toggleCockpitHandler}>Remove Cockpit</button>
          
          <AuthContext.Provider value={{authenticated: authState.isauthenticated, login: loginHandler}}>
            {cockpitState.showCockpit ?
              <Cockpit 
                title={props.appTitle}
                showPersons={showPersonsState.showPersons} 
                personsLength={personsState.persons.length} 
                clicked={togglePersonsHandler}
              /> : null }

              {personsCond}   
          </AuthContext.Provider>


          {/* <StyledButton
            alt={showPersonsState.showPersons}
            onClick={() => togglePersonsHandler()}>Toggle persons 
          </StyledButton> */}
          {/* Styled-components coming out */}              

          <UserInput changed={inputChangedHandler.bind(this)} currentName={assState.username[0].name}></UserInput>
          <UserOutput userName={assState.username[0].name}></UserOutput>
          <UserOutput userName={assState.username[1].name}></UserOutput>
          <UserOutput userName={assState.username[2].name}></UserOutput>
      </Aux>
    // </StyleRoot>
    //Radium examples commented out so we can have a play with styled-components
    ); 
}; 
 
// export default Radium(app);
//Radium examples commented out so we can have a play with styled-components
export default withClass(app, classes.App);
