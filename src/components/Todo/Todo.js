import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid';

export default class Todo extends Component {

  constructor(){
    super();
        
    this.state = {
      task: '',
      items: [
        {
          id: uuidv4(),
          task: 'Estudiar Web',
          complete: false,
        },
              
        {
          id: uuidv4(),
          task: 'Hacer Tarea',
          complete: false,
        },

        {
          id: uuidv4(),
          task: 'Ver One Piece',
          complete: false,
        },
      ],
    }
  }
    
  handleOnChange = e => {
    const {target:{value}} = e;

    this.setState({
      task: value,
      items: [...this.state.items]
    })
  }

  handleOnSubmit = e => {
    e.preventDefault();

    if(this.state.task.trim() != ''){ //que no sea null
      this.setState({
        task: '',//hace referencia al de arriba nomas hace que se haga vacio cuando acabas
        item: [//estan alterando la lista
          ...this.state.items,//copia toda la lista de arriba y agrega una mas
          {
            id: uuidv4(),
            task: this.state.task,
            complete: false
          }
        ]
      })
    }
  }

  render() {

    console.log(this.state.items)
    //console.table(this.state.task);
 
    return (
    <div className="Todo">
      <h1>Nueva Tarea</h1>
      <form onSubmit = {this.handleOnSubmit}>
        <input
          type = "text"
          value = {this.state.task}
          onChange = {this.handleOnChange}
        />
        </form>

        <ul>
          {
            this.state.items.map( (item) => (
              <li>
                {item.task}
                <div>
                  <span>icon check </span>
                  <span>icono basurero</span>
                </div>
              </li>
            ) )
          }
        </ul>
    </div>
    );
  }
}
