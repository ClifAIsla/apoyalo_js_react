import React, {Component} from 'react';

class Boton extends React.Component{

    render(){
        const {firstName, lastName,happyBirtdhay} = this.props;
        
        return(
            <button onClick={ () =>happyBirtdhay()}> 
                    Happy Birthday for {firstName} {lastName} 
            </button>           
        )}
    }

export default Boton;