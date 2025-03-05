import './index.css'

const TodoItem = props => {
  const {
    todo,
    uniqueNo,
    onDeleteTodo,
    onShowInput,
    onChangeEditInputValue,
    onChangeCheckedStatus,
  } = props
  const {title, id, input, checked} = todo

  const onDelete = () => {
    onDeleteTodo(uniqueNo)
  }

  const onClickEdit = () => {
    onShowInput(id)
  }

  const onChangeAnotherInput = e => {
    onChangeEditInputValue({...e, id})
  }

  const onChangeStatusCheck = () => {
    onChangeCheckedStatus(id)
  }

  return (
    <li>
      <div className="checkboxContainer">
        <input
          type="checkbox"
          className="checkbox"
          value={checked}
          onChange={onChangeStatusCheck}
        />
        {input ? (
          <input
            type="text"
            value={title}
            onChange={onChangeAnotherInput}
            className="anotherInput"
          />
        ) : (
          <p className="title">{title}</p>
        )}
      </div>
      <div className="btn-container">
        <button type="button" className="editBtn" onClick={onClickEdit}>
          {input ? 'Save' : 'Edit'}
        </button>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
