import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
      value: ''
    };

    this.agregar = this.agregar.bind(this);
    this.change = this.change.bind(this);
  }

  agregar(event){
    if(event.key === 'Enter'){
      this.setState({list: [...this.state.list,event.target.value], value: ''});
      event.preventDefault();
    }
  }

  change(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((element,index) => 
              <li key={index}>{element}</li>
            )}
          </ul>
           <form>
             <input type="text" id="new-task" onChange={this.change} value={this.state.value} onKeyPress={this.agregar} placeholder="Ingresa una tarea y oprime Enter" />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
