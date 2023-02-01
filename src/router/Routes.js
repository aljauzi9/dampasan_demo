// ** Router imports
import { lazy } from 'react';

// ** Router imports
import { useRoutes } from 'react-router-dom';

// ** Components Views
const Main = lazy(() => import('../views/pages/main'));
const About = lazy(() => import('../views/pages/about'));
const Karya = lazy(() => import('../views/pages/karya'));
const KaryaDetail = lazy(() => import('../views/pages/karya/section/detail'));
const Parenting = lazy(() => import('../views/pages/parenting'));
const ParentingDetail = lazy(() => import('../views/pages/parenting/section/detail'));
const Panduan = lazy(() => import('../views/pages/panduan'));
const PanduanDetail = lazy(() => import('../views/pages/panduan/section/detail'));
const Faq = lazy(() => import('../views/pages/faq'));
const PrivacyPolicy = lazy(() => import('../views/pages/privacy-policy'));
const TermsConditions = lazy(() => import('../views/pages/term-condition'));
const SignIn = lazy(() => import('../views/pages/signin'));
const Error = lazy(() => import('../views/pages/misc/Error'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <Main />
    },
    {
      path: '*',
      index: true,
      element: <Error />
    },
    {
      path: '/about',
      element: <About />
    },
		{
			path: '/hasil-karya',
			element: <Karya />
		},
		{
			path: '/hasil-karya/:karyaId',
			element: <KaryaDetail />
		},
		{
			path: '/parenting',
			element: <Parenting />
		},
		{
			path: '/parenting/:parentingId',
			element: <ParentingDetail />
		},
		{
			path: '/panduan',
			element: <Panduan />
		},
		{
			path: '/panduan/:panduanId/:kategoriPanduan',
			element: <PanduanDetail />
		},
		{
			path: '/faq',
			element: <Faq />
		},
		{
			path: '/privacy-policy',
			element: <PrivacyPolicy />
		},
		{
			path: '/term-conditions',
			element: <TermsConditions />
		},
		{
			path: '/signin',
			element: <SignIn />
		}
  ]);

  return routes;
}

export default Router;
