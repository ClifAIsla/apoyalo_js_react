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
    console.log("HOLA DESDE JS")
    this.setState({
      age1: this.state.age1 + 1
    })
  }

  render(){

    return (
      <div>
              
          <PersonCard firstName="Jane" lastName="Doe" age={this.state.age1} haircolor="black"/>

          <Boton firstName="Jane" lastName="Doe" happyBirtdhay={this.aumentarEdad1} />


          <PersonCard firstName="John" lastName="Smith" age='88' haircolor="brown"/>

          <PersonCard firstName="Millard" lastName="Filmore" age='50' haircolor="brown"/>

          <PersonCard firstName="Maria" lastName="Smith" age='62' haircolor="brown"/>
      
      </div>
    )
  }
}

export default App;
