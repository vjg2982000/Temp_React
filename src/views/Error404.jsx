/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import Navbar from 'components/Navbar/Navbar.jsx';
import Footer from 'components/Footer/Footer.jsx';

class Error400 extends React.Component {
	componentDidMount() {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.wrapper.scrollTop = 0;
		document.body.classList.add('error-page');
	}
	componentWillUnmount() {
		document.body.classList.remove('error-page');
	}
	render() {
		return (
			<>
				<Navbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header error-page header-filter'>
						<div
							className='page-header-image'
							style={{
								backgroundImage:
									'url(' +
									require('assets/img/braden-collum.jpg') +
									')',
							}}
						/>
						<Container>
							<Row>
								<Col md='12'>
									<h1 className='title'>404</h1>
									<h2 className='description'>
										Page not found :(
									</h2>
									<h4 className='description'>
										Ooooups! Looks like you got lost.
									</h4>
								</Col>
							</Row>
						</Container>
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default Error400;
