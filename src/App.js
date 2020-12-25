import React from 'react'
import imgSrc from './Montagne.jpg'
import './App.css';

    
  
   class App extends React.Component {
  state = {
    Person: {
      imgSrc: 'Nature',
      BIO: 'Hello',
      FullName:'Walid',
      Profession: 'Manageur',
    },
    show:false
  }
  
  handleShow=()=>{
    this.setState({
      show:!this.state.show
    })
  }
    render(){
  return (
    <div className="App">
      <h1>HELLO</h1>
      <img Src={imgSrc} width="300" alt="Montagne.jpg"/>
      
      <button onClick={this.handleShow} >show</button>
      {
        this.state.show===true? <div>
          <p> {this.state.Person.imgSrc}</p>
          <p>{this.state.Person.BIO}</p>
          <p>{this.state.Person.FullName}</p>
          <p>{this.state.Person.Profession}</p>
        </div> : null
      }
    </div>
  );
}
}

export default App;
