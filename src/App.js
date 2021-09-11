//import css file
//import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncExp from './components/IncExp';
import TransHistory from './components/TransHistory';
import AddTrans from './components/AddTrans';

import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncExp />
				<TransHistory />
				<AddTrans />
			</div>
		</GlobalProvider>
	);
}

export default App;
