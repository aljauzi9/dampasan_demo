import { Fragment, useEffect } from 'react';
import Header from '../../../components/layouts/header';
import TopSecondary from '../../components/top-secondary';
import Footer from '../../../components/layouts/footer';
import Main from './section/privacy-policy';

const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
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

export default PrivacyPolicy;