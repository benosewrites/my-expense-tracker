import React, { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

const AddTrans = () => {
	const [description, setDescription] = useState('');
	const [type, setType] = useState('');
	const [amount, setAmount] = useState('');

	//Error State
	const [descriptionError, setDescriptionError] = useState('');
	const [typeError, setTypeError] = useState('');
	const [amountError, setAmountError] = useState('');

	const onChangeDescription = (e) => {
		setDescription(e.target.value);
	};

	const onChangeType = (e) => {
		setType(e.target.value);
	};

	const onChangeAmount = (e) => {
		setAmount(e.target.value);
	};

	//Get the addTransaction Function
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();
		//Convert amount from string to integer
		const amountInt = parseFloat(amount);

		//Error Handling
		if (description === '') {
			setDescriptionError('Please enter transaction description!');
			return;
		} else setDescriptionError('');

		if (type === '') {
			setTypeError('Please pick transaction type!');
			return;
		} else setTypeError('');

		if (isNaN(amountInt)) {
			setAmountError('Please enter a valid amount!');
			return;
		} else setAmountError('');

		//Getting random id for each transaction
		const id = uuidv4();

		//Transaction
		const transaction = { id, des: description, type, amount: amountInt };

		//Call the addTransaction Function
		addTransaction(transaction);

		// clear Inputs
		setDescription('');
		setType('');
		setAmount('');
	};

	return (
		<>
			<h3>Add New Transaction</h3>
			<form action="" onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="description">
						<h4>Description</h4>
					</label>
					<input
						type="text"
						name="description"
						id="description"
						placeholder="Enter Description..."
						value={description}
						onChange={onChangeDescription}
					/>
					{descriptionError && <div className="error">{descriptionError}</div>}
				</div>

				<div className="inc-exp">
					<label htmlFor="inc" className="inc">
						Income
						<input
							type="radio"
							name="type"
							id="inc"
							value="inc"
							onChange={onChangeType}
						/>
						<span className="radiomark"></span>
					</label>
					<label htmlFor="exp" className="exp">
						Expense
						<input
							type="radio"
							name="type"
							id="exp"
							value="exp"
							onChange={onChangeType}
						/>
						<span className="radiomark"></span>
					</label>
					{typeError && <div className="error">{typeError}</div>}
				</div>

				<div className="form-control">
					<label htmlFor="amount">
						<h4>Amount</h4>
					</label>
					<input
						type="text"
						name="amount"
						id="amount"
						placeholder="Enter Amount..."
						value={amount}
						onChange={onChangeAmount}
					/>
					{amountError && <div className="error">{amountError}</div>}
				</div>
				<input type="submit" value="Add Transaction" className="btn" />
			</form>
		</>
	);
};

export default AddTrans;
