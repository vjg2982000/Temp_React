/*!

* Copyright 2019 Symto Inc.

*/
import React from 'react';

// core components
import Navbar from 'components/Navbars/Navbar.jsx';
import IndexHeader from 'components/Headers/IndexHeader.jsx';
import Footer from 'components/Footer/Footer.jsx';

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Basic from './IndexSections/Basic.jsx';
import Navbars from './IndexSections/Navbars.jsx';
import Tabs from './IndexSections/Tabs.jsx';
import Pills from './IndexSections/Pills.jsx';
import Pagination from './IndexSections/Pagination.jsx';
import Notifications from './IndexSections/Notifications.jsx';
import PreFooter from './IndexSections/PreFooter.jsx';
import Footers from './IndexSections/Footers.jsx';
import Typography from './IndexSections/Typography.jsx';
import ContentAreas from './IndexSections/ContentAreas.jsx';
import Cards from './IndexSections/Cards.jsx';
import PlainCards from './IndexSections/PlainCards.jsx';
import JavaScript from './IndexSections/JavaScript.jsx';
import NucleoIcons from './IndexSections/NucleoIcons.jsx';

class Index extends React.Component {
	componentDidMount() {
		document.body.classList.add('index-page');
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		this.refs.wrapper.scrollTop = 0;
	}
	componentWillUnmount() {
		document.body.classList.remove('index-page');
	}
	render() {
		return (
			<>
				<Navbar />
				<div className='wrapper' ref='wrapper'>
					<IndexHeader />
					<div className='main'>
						<Basic />
						<Navbars />
						<Tabs />
						<Pills />
						<Pagination />
						<Notifications />
						<PreFooter />
						<Footers />
						<Typography />
						<ContentAreas />
						<Cards />
						<PlainCards />
						<JavaScript />
						<NucleoIcons />
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

export default Index;
