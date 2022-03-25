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

    render() {

      console.table(this.state.items)

        return (
            <div className="Todo">
              <h1>Nueva Tarea</h1>
            </div>
        );
  }
}
