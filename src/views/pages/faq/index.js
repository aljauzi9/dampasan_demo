import { Fragment, useEffect } from 'react';
import { BackTop } from '../../../utility';
import Header from '../../../components/layouts/header';
import TopSecondary from '../../components/top-secondary';
import Footer from '../../../components/layouts/footer';
import Main from './section/faq';

const Static = () => {
	useEffect(() => {
		BackTop();
	}, []);

	return (
		<Fragment>
			<Header />
			<TopSecondary />

			<Main />

			<Footer />
		</Fragment>
	);
}

export default Static;