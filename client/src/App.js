import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

import Navbar from './Components/Partials/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Error from './Components/Pages/Error/Error';

export default function App() {
	return (
		<Router>
			<Navbar />
			
			<div className='container py-5'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />

					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</Router>
	)
}