import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    input: false,
    checked: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    input: false,
    checked: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    input: false,
    checked: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    input: false,
    checked: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    input: false,
    checked: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    input: false,
    checked: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    input: false,
    checked: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    input: false,
    checked: false,
  },
]

class SimpleTodos extends Component {
  state = {
    todosArray: initialTodosList,
    inputValue: '',
    activeId: false,
  }

  onDeleteTodo = uniqueNo => {
    const {todosArray} = this.state
    const filteredArray = todosArray.filter(each => each.id !== uniqueNo)
    this.setState({todosArray: filteredArray})
  }

  onChangeInputValue = e => {
    this.setState({inputValue: e.target.value})
  }

  onChangeCheckedStatus = id => {
    this.setState(prev => ({
      todosArray: prev.todosArray.map(each => {
        if (each.id === id) {
          return {...each, checked: !each.checked}
        }
        return each
      }),
    }))
  }

  onAddTodo = () => {
    const {inputValue} = this.state
    const parts = inputValue.trim().split(' ')
    const lastPart = parts[parts.length - 1]
    const num = /^\d+$/.test(lastPart) ? parseInt(lastPart, 10) : 1
    const title = /^\d+$/.test(lastPart)
      ? parts.slice(0, -1).join(' ')
      : inputValue
    const newTodo = {
      id: uuid(),
      title,
      input: false,
      checked: false,
    }
    if (inputValue) {
      if (title.trim()) {
        const newTodos = Array.from({length: num}, () => ({
          ...newTodo,
          id: uuid(),
        }))
        this.setState(prev => ({
          todosArray: [...prev.todosArray, ...newTodos],
          inputValue: '',
        }))
      } else {
        this.setState(prev => ({
          todosArray: [...prev.todosArray, newTodo],
          inputValue: '',
        }))
      }
    }
  }

  onShowInput = id => {
    this.setState(prev => ({
      todosArray: prev.todosArray.map(each => {
        if (each.id === id) {
          return {...each, input: !each.input}
        }
        return each
      }),
    }))
  }

  onChangeEditInputValue = e => {
    this.setState(prev => ({
      todosArray: prev.todosArray.map(each => {
        if (each.id === e.id) {
          return {...each, title: e.target.value}
        }
        return each
      }),
    }))
  }

  render() {
    const {todosArray, inputValue, activeId} = this.state
    return (
      <div className="main-container">
        <div className="todo-container">
          <h1>Simple Todos</h1>
          <div className="inputContainer">
            <input
              type="text"
              className="addInput"
              value={inputValue}
              onChange={this.onChangeInputValue}
            />
            <button type="button" className="inputBtn" onClick={this.onAddTodo}>
              Add
            </button>
          </div>
          <ul>
            {todosArray.map(each => (
              <TodoItem
                todo={each}
                key={each.id}
                uniqueNo={each.id}
                onDeleteTodo={this.onDeleteTodo}
                onShowInput={this.onShowInput}
                activeId={each.id === activeId}
                onChangeEditInputValue={this.onChangeEditInputValue}
                onChangeCheckedStatus={this.onChangeCheckedStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
