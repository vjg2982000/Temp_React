
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/css/nucleo-icons.css';
import './assets/scss/blk-design-system-react.scss?v=1.0.0';
import './assets/demo/demo.css';

import LandingPage from 'views/Home.jsx';

import Error500 from './views/Error500';
import Error400 from './views/Error404';

import ContactUs from 'views/ContactUs.jsx';


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route
				path='/home'
				render={(props) => <LandingPage {...props} />}
			/>
			
			<Route
				path='/about-me'
				render={(props) => <LandingPage {...props} />}
			/>
	
			<Route
				path='/contact-me'
				render={(props) => <ContactUs {...props} />}
			/>
			
	
			<Route
				path='/404-error'
				render={(props) => <Error400 {...props} />}
			/>
			<Route
				path='/500-error'
				render={(props) => <Error500 {...props} />}
			/>

			<Redirect from='/' to='/home' />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
