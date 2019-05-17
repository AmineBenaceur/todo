import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Todos from './Todos'

export class ToDoItem extends Component {
    //function to get the style of the ToDoItem depending if completed or not
    getStyle = () => {
        if(this.props.todo.completed){
            return completedStyle;
        }else{
            return notCompletedStyle;
        }
    }


  render() {
      const{id,title} = this.props.todo; // use this instead of specifying every time
    return (
      <div style={this.getStyle()}>
        <h3> 
        <input type="checkBox" onChange = {this.props.markComplete.bind(this,id)} ></input> 
        {'  '} 
        {title} 
        <button onClick={this.props.delTodo.bind(this,id )} style={btnStyle}> x </button> 
        </h3>
      </div>
    )
  }
}

//proptypes for arguments
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
const btnStyle= {
    background: '#ff0000', //red
    color: "fff", //white
    border: 'none',
    padding: '5px 9px', // 5px for top/bottom, 10px for left right
    borderRadius: '50%', //make it round
    cursor: 'pointer', //makes the mouse a hand-click thing
    float: 'right' //pushes it to the right

}
const completedStyle = { 
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: 'line-through' 
}
const notCompletedStyle = {
    background: '#e3f7e1',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    textDecoration: 'none' 
}



export default ToDoItem
