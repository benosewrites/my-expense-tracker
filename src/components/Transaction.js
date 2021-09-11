import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
	const { id, type, des, amount } = transaction;
	const { deleteTransaction } = useContext(GlobalContext);
	const onClick = () => {
		deleteTransaction(id);
	};
	return (
		<li className={type === 'inc' ? 'plus' : 'minus'}>
			{des}
			<span>N{amount}</span>
			<button className="delete-btn" onClick={onClick}>
				x
			</button>
		</li>
	);
};

export default Transaction;

Transaction.propTypes = {
	transaction: PropTypes.object.isRequired,
};
