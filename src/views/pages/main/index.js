import { Fragment } from 'react';
import Header from '../../../components/layouts/header';
import TopPrimary from '../../components/top-primary';
import Footer from '../../../components/layouts/footer';

import SectionAbout from './section/about';
import SectionVideo from './section/videoInspirasi';
import SectionKarya from './section/karyaBekawan';
import SectionParenting from './section/parenting';

const Main = () => {
  return (
		<Fragment>
			<Header />
			<TopPrimary />

			<main id="main">
			<SectionParenting />
			
			<SectionVideo />

				<SectionAbout />

				

				<SectionKarya />

				
			</main>

			<Footer />
		</Fragment>
	);
}

export default Main;