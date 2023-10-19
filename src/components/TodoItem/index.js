// Write your code here

import './index.css'

const TodoItem = props => {
  const {onDelete, todoList} = props
  const {id, title} = todoList

  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todo-list-items">
      <p className={title}>{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
