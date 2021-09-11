import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	//Get Incomes
	const incs = transactions.filter((transaction) => transaction.type === 'inc');
	//Get incomes amount  and put in an array
	const incsAmt = incs.map((inc) => inc.amount);
	const totalIncome = incsAmt.reduce((acc, inc) => acc + inc, 0);

	//Get Expenses
	const exps = transactions.filter((transaction) => transaction.type === 'exp');
	//Get expenses amount  and put in an array
	const expsAmt = exps.map((exp) => exp.amount);
	const totalExpense = expsAmt.reduce((acc, exp) => acc + exp, 0);

	//Calculate Balance
	const Balance = totalIncome - totalExpense;

	return (
		<div className="balance">
			<h4>Your Balance</h4>
			<h2>N{Balance}</h2>
		</div>
	);
};

export default Balance;
