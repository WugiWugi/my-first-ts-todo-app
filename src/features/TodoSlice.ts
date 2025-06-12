import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  id: number
  text: string
  completed: boolean
}

type TodoState = {
  list: Todo[]
  completedList: Todo[]
}



const initialState: TodoState = {
  list: [],
  completedList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }
      state.list.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.list.find(x => x.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
        state.completedList.push(todo)
        state.list = state.list.filter(x => x.id !== todo.id)
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(x => x.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer