import React from 'react';
import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	transactions: [],
};

//create the context
export const GlobalContext = createContext(initialState);

//Provider component
//Remember that we are wrapping all the components in App.js with the GlobalProvider.
//These components are the children(props.children)
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	//Actions
	//Delete Transaction
	const deleteTransaction = (id) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	};

	//Add transaction
	const addTransaction = (transaction) => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		});
	};
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
