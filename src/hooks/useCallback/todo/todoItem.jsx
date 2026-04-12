import { memo } from "react";

const TodoItem = ({ item, handleDeleteTodo, handleToggleTodo }) => {
  return (
      <li key={item.id}
        style={{
          textDecoration: item.completed
            ? 'line-through'
            : 'none',
          marginBottom: '10px'
        }}
      >
        {item.name}

        <button
          style={{ marginLeft: '10px' }}
          onClick={() => handleToggleTodo(item.id)}
        >
          {item.completed ? 'Pending' : 'Complete'}
        </button>

        <button
          style={{ marginLeft: '10px' }}
          onClick={() => handleDeleteTodo(item.id)}
        >
          Delete
        </button>
      </li>
  )
}

export default memo(TodoItem);
