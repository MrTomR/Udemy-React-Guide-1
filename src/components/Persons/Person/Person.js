import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
// import Radium from 'radium'; 
//Radium examples commented out so we can have a play with styled-components
// import styled from 'styled-components'; 
// import Aux from '../../../hoc/Aux'; 
import withClass from '../../../hoc/WithClass';
import classes from './Person.css'; 
import AuthContext from '../../../context/auth-context';

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
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    //How to access your context in a class based component outside of the return statement

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus(); 
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...'); 
        return(
            <React.Fragment>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    onChange={this.props.changed} 
                    type="text" 
                    value={this.props.name} 
                    ref={this.inputElementRef}
                />
            </React.Fragment>
            //Aux higher order component allows you to output adjacent content in a component
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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string, 
    age: PropTypes.number,
    changed: PropTypes.func
}; 

export default withClass(Person, classes.Person); 