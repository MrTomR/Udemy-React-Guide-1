import React, { Component } from 'react';
// import Radium from 'radium'; 
//Radium examples commented out so we can have a play with styled-components
// import styled from 'styled-components'; 
import classes from './Person.css'; 

// const StyledDiv = styled.div`
//                     width: 60%; 
//                     margin: 15px auto; 
//                     border: 1px solid #eee; 
//                     box-shadow: 0 2px 3px #ccc; 
//                     padding: 16px; 
//                     text-align: center; 
//                     background-color: blue; 
//                     color: white;

//                     @media screen and (min-width: 500px) {
//                         background-color: white;
//                         color: black;                
//                     }
//                 `; 
// This becomes a callable component in itself without being (props) => because we are pulling in the styled-components library 
// Normally defining in this manner and calling <StyledDiv> as a component wouldnt work.

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...'); 
        return(
            <div className={classes.Person}> 
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} type="text" value={this.props.name} />
            </div>
        )
    }
    // const style = {
        // backgroundColor: 'blue', 
        // color: "white"
        // '@media screen and (min-width: 500px)': {
        //     backgroundColor: 'white',
        //     color: 'black'
        // }
        //Radium examples commented out so we can have a play with styled-components
    // }

    // return (       
        // <StyledDiv>
        // <div className={classes.Person}> 
        //     <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
        //     <p>{props.children}</p>
        //     <input onChange={props.changed} type="text" value={props.name} />
        // </div>
        /* </StyledDiv> */
    // )
};

// export default Radium(Person); 
//Radium examples commented out so we can have a play with styled-components

export default Person; 