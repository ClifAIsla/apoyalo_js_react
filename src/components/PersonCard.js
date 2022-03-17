import React, {Component} from 'react';

class PersonCard extends Component{
    
    render(){
        const {firstName, lastName, age, haircolor} = this.props;


        return(
            <div>
                <h1>
                    {lastName}, {firstName}
                </h1>
                <p>
                    Age: {age}
                </p>
                <p>
                    Hair color: {haircolor}
                </p>
            </div>
        )
    }
}

export default PersonCard;