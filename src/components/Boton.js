import React, {Component} from 'react';

class Boton extends React.Component{

    render(){
        const {firstName, lastName} = this.props;
        
        return(
            <button onClick={ () =>this.props.happyBirtdhay()}> 
                    Happy Birthday for {firstName} {lastName} 
            </button>           
        )}
    }

export default Boton;