import PersonCard from "./components/PersonCard";
import Boton from "./components/Boton";
import React from "react";

class App extends React.Component{
  
  constructor(props) {
  super(props)
  this.state = {
    age1: 45,
    age2: 88,
    age3: 50,
    age4: 62
    }
  }
      
  aumentarEdad1 = () => {
    this.setState({
      age1: this.state.age1 + 1
    })
  }

  aumentarEdad2 = () => {
    this.setState({
      age2: this.state.age2 + 1
    })
  }

  aumentarEdad3 = () => {
    this.setState({
      age3: this.state.age3 + 1
    })
  }

  aumentarEdad4 = () => {
    this.setState({
      age4: this.state.age4 + 1
    })
  }

  render(){

    return (
      <div>
              
          <PersonCard firstName="Jane" lastName="Doe" age={this.state.age1} haircolor="black"/>

          <Boton firstName="Jane" lastName="Doe" happyBirtdhay={this.aumentarEdad1} />


          <PersonCard firstName="John" lastName="Smith" age={this.state.age2} haircolor="brown"/>

          <Boton firstName="John" lastName="Smith" happyBirtdhay={this.aumentarEdad2} />

          <PersonCard firstName="Millard" lastName="Filmore" age={this.state.age3} haircolor="brown"/>

          <Boton firstName="Millard" lastName="Filmore" happyBirtdhay={this.aumentarEdad3} />

          <PersonCard firstName="Maria" lastName="Smith" age={this.state.age4} haircolor="brown"/>

          <Boton firstName="Maria" lastName="Smith" happyBirtdhay={this.aumentarEdad4} />
      
      </div>
    )
  }
}

export default App;
