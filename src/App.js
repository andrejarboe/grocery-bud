import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		message: '',
		type: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			//display alert
			showAlert(true, 'danger', 'Enter a value');
		} else if (name && isEditing) {
			// deal with edit
		} else {
			showAlert(true, 'success', 'item added to the list');
			const newItem = {
				id: new Date().getTime().toString(),
				title: name,
			};
			setList([...list, newItem]);
			setName('');
		}
	};

	const showAlert = (show = false, type = '', message = '') => {
		setAlert({ show, type, message });
	};

	return (
		<section className="section-center">
			<div className="grocery-container">
				<form className="grocery-form" onSubmit={handleSubmit}>
					{alert.show && <Alert {...alert} removeAlert={showAlert} />}
					<h3>grocery bud</h3>
					<div className="form-control">
						<input
							type="text"
							className="grocery"
							placeholder="e.g. Bacon"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<button type="submit" className="submit-btn">
							{isEditing ? 'edit' : 'submit'}
						</button>
					</div>
				</form>
				{list.length > 0 && (
					<div className="grocery-container">
						<List items={list} />
						<button className="clear-btn">clear items</button>
					</div>
				)}
			</div>
		</section>
	);
}

export default App;
