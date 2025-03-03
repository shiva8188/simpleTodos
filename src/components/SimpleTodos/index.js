import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosArray: initialTodosList}

  onDeleteTodo = uniqueNo => {
    const {todosArray} = this.state
    const filteredArray = todosArray.filter(each => each.id !== uniqueNo)
    this.setState({todosArray: filteredArray})
  }

  render() {
    const {todosArray} = this.state
    return (
      <div className="main-container">
        <div className="todo-container">
          <h1>Simple Todos</h1>
          <ul>
            {todosArray.map(each => (
              <TodoItem
                todo={each}
                key={each.id}
                uniqueNo={each.id}
                onDeleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
