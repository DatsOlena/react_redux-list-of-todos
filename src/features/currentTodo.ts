import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';
import _ from 'cypress/types/lodash';

const initialState = null as Todo | null;

export const currentTodoSlice = createSlice({
  name: 'currentTodo',
  initialState,
  reducers: {
    setCurrentTodo: (_, action) => {
      return action.payload;
    }
  },
});

export const { setCurrentTodo } = currentTodoSlice.actions;
export default currentTodoSlice.reducer;
