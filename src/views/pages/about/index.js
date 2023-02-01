import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './store';
import Header from '../../../components/layouts/header';
import Footer from '../../../components/layouts/footer';
import TopSecondary from '../../components/top-secondary';
import SectionAbout from './section/about';
import SectionVisi from './section/visi';
import SectionMisi from './section/misi';
import bgAboutImg from '../../../components/assets/images/top_about.png';

const About = () => {
	// ** Store Vars
  const dispatch = useDispatch();
  const store = useSelector(state => state.about);
	console.log('AllStore About', store);

	// ** Get data on mount
  useEffect(() => {
		dispatch(getData());

  	// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
		<Fragment>
			<Header />
			<TopSecondary />

			<main id="main">
				<div>
					<img src={bgAboutImg} className="img-page-about" alt="Page About" />
				</div>

				<SectionAbout title={'Tentang Kami'} dataTentang={store.data.tentang} />
				<SectionVisi title={'Visi'} dataVisi={store.data.visi} />
				<SectionMisi title={'Misi'} dataMisi={store.data.misi} />
			</main>

			<Footer />
		</Fragment>
	);
}

export default About;