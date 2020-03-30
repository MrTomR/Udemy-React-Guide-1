import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    //Import useContext above and then you can access this in a functional component. 

    console.log(authContext.authenticated)
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect'); 
    //     setTimeout(() => {
    //         // alert('Saved data to cloud!'); 
    //     }, 1000); 
    // }, [props.persons]);

     useEffect(() => {
        // const Timer = 
        toggleBtnRef.current.click();
        
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

    if(props.personsLength <= 2) {
        assigned.push(classes.f_red);
    }

    if(props.personsLength <= 1) {
        assigned.push(classes.bold); 
    }

    return(
        <div className={classes.Cockpit}> 
            <h1 className="App-title">{props.title}</h1>
            <p className={assigned.join(' ')}>Wow dynamic style updating based on number of persons</p>

            <button
                className={classes.Button + ' ' + btnClass.join(' ')}
                onClick={props.clicked}            
                ref={toggleBtnRef}
            >Toggle persons 
            </button>
            <button onClick={authContext.login}>context Auth = {String(authContext.authenticated)}</button>
        </div>
    );
};


export default React.memo(Cockpit); 