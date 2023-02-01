import { Fragment } from 'react';
import Header from '../../../components/layouts/header';
import Main from './section/main';
import Footer from '../../../components/layouts/footer';
import TopSecondary from '../../components/top-secondary';

const Parenting = () => {
	return (
		<Fragment>
			<Header />
			<TopSecondary />

			<Main />

			<Footer />
		</Fragment>
	);
}

export default Parenting;