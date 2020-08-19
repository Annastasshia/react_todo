import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ? 'line-through' : 'none'
                }
            }
    

    render() {

        // destructuring allows you to pull out props (properties) so that you can have an easier naming conventions in your return instead of having to call this.props.todo every time.
        const { id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    {/* When you check the box it looks in your properties list in Todos.js for a "markComplete" method */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button onClick= {this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
            )
        }
    }

    // Proptypes
    TodoItem.propTypes = {
        todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}
export default TodoItem
