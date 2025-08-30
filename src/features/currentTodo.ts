import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

type CurrentTodoState = Todo | null;

const initialState: CurrentTodoState = null;

export const currentTodoSlice = createSlice({
  name: 'currentTodo',
  initialState,
  reducers: { 
    setCurrentTodo: (_, action) => {
      return action.payload;
    },
    clearCurrentTodo: () => null,
  },
});

export const { setCurrentTodo, clearCurrentTodo } = currentTodoSlice.actions;
export default currentTodoSlice.reducer;
