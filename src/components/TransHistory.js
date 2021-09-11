import React from 'react';
import { useContext } from 'react';

import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

const TransHistory = () => {
	const context = useContext(GlobalContext);
	const { transactions } = context;

	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	);
};

export default TransHistory;
