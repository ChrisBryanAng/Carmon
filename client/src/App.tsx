// @ts-nocheck
import { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Home, Login, SignUp, Browse } from './pages';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-6 border-b border-b-[#e6ebf4]'>
				<div className='flex'>
					<Link to='/'>
						<img alt='logo' src='' className='w-28 object-contain' />
					</Link>
					<Link
						to='/browse'
						className='font-inter font-medium text-gray-500 px-4 py-2 rounded-md'
					>
						Browse
					</Link>
				</div>

				<div>
					<Link
						to='/login'
						className='font-inter font-medium text-gray-500 px-4 py-2 rounded-md'
					>
						Sign In
					</Link>
					<Link
						to='/sign-up'
						className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'
					>
						Sign Up
					</Link>
				</div>
			</header>
			<main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/browse' element={<Browse />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
