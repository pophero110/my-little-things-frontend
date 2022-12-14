import React, { useEffect, useContext } from 'react';
import '../assets/navbar.css';
import $ from 'jquery';
import UserContext from '../auth_context';
const Navbar = (props) => {
	const { isSignedIn, userSignOut, toggleAlert } = useContext(UserContext);
	useEffect(() => {
		$(window).scroll(function () {
			if ($(document).scrollTop() > 3) {
				$('.navbar').addClass('scrolled');
			} else {
				$('.navbar').removeClass('scrolled');
			}
		});
	}, []);
	const signoutHandler = () => {
		toggleAlert('success', 'Sign out Successfully');
		userSignOut();
	};
	return (
		<nav className='navbar fixed-top p-0'>
			<div className='d-flex justify-content-between align-items-center w-100 h-100'>
				<div className='d-flex justify-content-center align-items-center ms-3'>
					<a className='navbar-brand text-dark nav-hover' href='/'>
						MyLittleThings
					</a>
				</div>

				<div className='d-flex justify-content-center align-items-center ms-3 text-center'>
					{isSignedIn ? (
						<div
							className='nav-link text-dark nav-hover'
							onClick={signoutHandler}>
							Sign Out
						</div>
					) : (
						<div
							type='button'
							className='nav-link text-dark nav-hover'
							data-bs-toggle='modal'
							data-bs-target='#staticBackdrop'>
							Sign in
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
