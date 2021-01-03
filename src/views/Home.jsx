/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';

// reactstrap components


// core components
import Navbar from 'components/Navbar/Navbar.jsx';

class LandingPage extends React.Component {
	componentDidMount() {
		//alert(document.cookie);
		document.body.classList.toggle('home');

	}
	componentWillUnmount() {
		document.body.classList.toggle('home');
	}
	render() {
		return (
			<>
				<Navbar />
				<div className='wrapper'>
					<div class='myContent'>
						Hello, about me...  Happy New Year!	
					</div>
				</div>
			</>
		);
	}
}

export default LandingPage;
