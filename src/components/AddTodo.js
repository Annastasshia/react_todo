import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
           <form styly={{display:'flex'}}>
               <input type="text" name="title" style= {{ flex: '10', padding: '5px'}} placeholder="Add Todo ..."
               />
               <input type="submit" value="submit" className="btn" style= {{flex: 1}}></input>
           </form>
        )
    }
}

export default AddTodo