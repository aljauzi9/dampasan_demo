import { Fragment } from 'react';
import Header from '../../../components/layouts/header';
import TopSecondary from '../../components/top-secondary';
import Main from './section/main';
import Footer from '../../../components/layouts/footer';

const Panduan = () => {
	return (
		<Fragment>
			<Header />
			<TopSecondary />

			<Main />

			<Footer color="#fffcf7" />
		</Fragment>
	);
}

export default Panduan;