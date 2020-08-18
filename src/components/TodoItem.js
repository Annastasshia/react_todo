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

        // destructuring allows you to pull out props (properties) so that you can have an easier nameing conventions in your return.
        const { id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    {/* When you check the box it looks in your properties list in Todos.js for a "markComplete" method */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                </p>
            </div>
            )
        }
    }

    // Proptypes
    TodoItem.propTypes = {
        todo: PropTypes.object.isRequired
}

export default TodoItem
