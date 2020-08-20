import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // Grabs the input in the targeted name field and assigns it the value being typed out
    onChange = (event) => this.setState({[event.target.name]: event.target.value});

    // Handling the submission of the form, it first prevents the site from reloading, then sets the state of the title to what was input in the title field, and lastly resets the state back to blank after its been submitted.
    onSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
        }

    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display:'flex'}}>
               <input type="text" name="title" style= {{ flex: '10', padding: '5px'}} placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange}
               />
               <input type="submit" value="submit" className="btn" style= {{flex: 1}}></input>
           </form>
        )
    }
}

export default AddTodo
