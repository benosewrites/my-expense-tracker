import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncExp = () => {
	const { transactions } = useContext(GlobalContext);

	//Filtering out income
	const incs = transactions.filter((transaction) => transaction.type === 'inc');

	//Calculating Total Income
	let totalInc = 0;
	incs.forEach((inc) => {
		totalInc += inc.amount;
	});

	//Filtering out Expense
	const exps = transactions.filter((transaction) => transaction.type === 'exp');

	//Calculating Total Expense
	let totalExp = 0;
	exps.forEach((exp) => {
		totalExp += exp.amount;
	});

	return (
		<div className="inc-exp-container">
			<div>
				<h4>INCOME</h4>
				<p id="money-plus" className="money plus">
					N{totalInc}
				</p>
			</div>
			<div>
				<h4>EXPENSE</h4>
				<p id="money-minus" className="money minus">
					N{totalExp}
				</p>
			</div>
		</div>
	);
};

export default IncExp;
