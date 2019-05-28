import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ToDoHeader from './components/layout/ToDoHeader'
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import About from './components/pages/About'
import uuid from 'uuid';
import axios from 'axios';
/* eslint-disable-line */
class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}));
  }


  constructor(props) {
    super(props);
  }
  // Listener for marking todos complete and incomplete by toggle
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {

      if( todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }
//loops to find and delete TODO
  delTodo = (id) => {
  //  axios.delete()
    axios.delete('https://jsonplaceholder.typicode.com/todos' ,{todo: { id: id} });
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id) ]}); // deletes Todo by filtering out selected TODOItem

  }
  addToDo = (title) => {
    // const newTodo = { 
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    //  };
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title:title,
      completed:false
    })
    .then(res => this.setState( {todos: [...this.state.todos, res.data ]} ) ); // this operater copies old state and adds item to it
  }

  render() {
    console.log(this.state.todos)
    return (
      //passing in the array to the TODOS component in ./components/todos as a prop
      <Router>
        <div className="App">
          <div class="container" >
            <ToDoHeader /> 
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo} />
                <Todos todos= {this.state.todos} markComplete={this.markComplete}  delTodo={this.delTodo} />
              </React.Fragment>
            )}/> 
            <Route path="/about" component={About}  />
          </div>
        </div>
      </Router>
   
    );
  }
}

export default App;
