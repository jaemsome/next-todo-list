import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const todoListSlice = createSlice({
	name: "todoList",
	initialState,
	reducers: {
		addTodoItem(state, action) {
			const id = Date.now();
			let newState = state.value;

			if (action.payload.length > 0) {
				newState = [
					...state.value,
					{ id, name: action.payload, status: { done: false } },
				];
			}

			state.value = newState;
		},
		deleteTodoItem(state, action) {
			const newState = state.value.filter(
				(item) => item.id !== action.payload.id
			);
			state.value = newState;
		},
		completeTodoItem(state, action) {
			const newState = state.value.map((item) => {
				if (item.id === action.payload.id) item.status.done = true;
				return item;
			});
			state.value = newState;
		},
		deleteItemsByStatus(state, action) {
			const newState = state.value.filter(
				(item) => item.status.done !== action.payload
			);
			state.value = newState;
		},
		deleteAllItems(state, action) {
			state.value = [];
		},
	},
});

export const {
	addTodoItem,
	deleteTodoItem,
	completeTodoItem,
	deleteItemsByStatus,
	deleteAllItems,
} = todoListSlice.actions;

export default todoListSlice.reducer;
