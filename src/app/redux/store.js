import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import todolistReducer from "./slices/todolistSlice";

const reducersList = combineReducers({
	todoList: todolistReducer,
});

export const store = configureStore({
	reducer: reducersList,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
	// devTools: process.env.NODE_ENV !== 'production'
	devTools: true,
});

setupListeners(store.dispatch);
