import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    
  constructor(props) {
    super(props);
  }



  render() {
    
    return this.props.todos.map((todo)  => (//pretty much a foreach, todo is the variable name
        <ToDoItem key= {todo.id} todo = {todo} markComplete={this.props.markComplete} delTodo = {this.props.delTodo} />
    ));
  }
}
//proptypes for arguments
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
