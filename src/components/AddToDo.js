import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddToDo extends Component {

    state = {
        title: ''
    }

    onChangeMethod = (e) => this.setState({title: e.target.value});
    
    onSubmit= (e) => {
        e.preventDefault(); //prevent default action
        this.props.addToDo(this.state.title);
        this.setState({ title:''}); //resets state after
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display : 'flex'}}> 
            <input type="text" 
            name="title" 
            placeholder="Add To Do... "
            style={{flex : '10', padding: '5px' }}
            value= {this.state.title}
            onChange={this.onChangeMethod}
            />  

            <input type="submit"
            value="Submit"
            className="btn" 
            style={{flex : '1'}}  
            />
         </form> 
      </div>
    )
  }
}

//proptypes for arguments
AddToDo.propTypes = {
  AddToDo: PropTypes.func.isRequired,

}

export default AddToDo
