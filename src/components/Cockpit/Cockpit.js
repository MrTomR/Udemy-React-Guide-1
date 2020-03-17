import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect'); 
    //     setTimeout(() => {
    //         // alert('Saved data to cloud!'); 
    //     }, 1000); 
    // }, [props.persons]);

     useEffect(() => {
        // const Timer = 
         setTimeout(() => {
            alert('Saved data to cloud!'); 
         }, 1000);
         return() => {
            //  clearTimeout(Timer); 
             console.log('[Cockpit.js] cleanup work in useEffect.'); 
         }; 
     }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         alert('On page load only.'); 
    //     }, 1000); 
    // }, []);

    const assigned = [];
    let btnClass = [];

    if(props.showPersons) {
        btnClass.push(classes.Red); 
    }

    if(props.persons.length <= 2) {
        assigned.push(classes.f_red);
    }

    if(props.persons.length <= 1) {
        assigned.push(classes.bold); 
    }

    return(
        <div className={classes.Cockpit}> 
            <h1 className="App-title">{props.title}</h1>
            <p className={assigned.join(' ')}>Wow dynamic style updating based on number of persons</p>

            <button
                className={classes.Button + ' ' + btnClass.join(' ')}
                onClick={props.clicked}            
            >Toggle persons 
            </button>
        </div>
    );
};


export default Cockpit