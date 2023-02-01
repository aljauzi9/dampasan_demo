import { Fragment, useEffect } from 'react';
import { BackTop } from '../../../utility';
import Footer from '../../../components/layouts/footer';
import Header from '../../../components/layouts/header';
import TopSecondary from '../../components/top-secondary';
import Main from './section/terms-conditions';

const TermsConditions = () => {
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

export default TermsConditions;