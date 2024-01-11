import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const inititalState = {
  loading: false,
  error: false,
  data: [] as Todo[],
};

interface ApiTodo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  const filteredTodos = todos.slice(0, 10).map((todo: ApiTodo) => ({
    id: todo.id,
    text: todo.title,
    completed: todo.completed,
  }));
  return filteredTodos;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: inititalState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.data.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.data.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.data.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
