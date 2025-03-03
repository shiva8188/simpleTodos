import './index.css'

const TodoItem = props => {
  const {todo, uniqueNo, onDeleteTodo} = props
  const {title} = todo

  const onDelete = () => {
    onDeleteTodo(uniqueNo)
    console.log(uniqueNo)
  }

  return (
    <li>
      <p>{title}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

export default TodoItem
