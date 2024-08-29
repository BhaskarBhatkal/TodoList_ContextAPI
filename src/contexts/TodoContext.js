import { createContext, useContext } from "react";

// 1st creating a context
export const TodoContext = createContext({
  todos: [
    {
      id: Number,
      todo: String,
      completed: Boolean,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// We xported TodoContext as useTodo
export const useTodo = () => {
  return useContext(TodoContext);
};

// directly here written provider for TodoContext
export const TodoProvider = TodoContext.Provider;
