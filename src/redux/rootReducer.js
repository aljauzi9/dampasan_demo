// ** Reducers Imports
import auth from './authentication';
import main from '../views/pages/main/store';
import about from '../views/pages/about/store';
import faq from '../views/pages/faq/store';
import privacyPolicy from '../views/pages/privacy-policy/store';
import termsCond from '../views/pages/term-condition/store';
import hasilKarya from '../views/pages/karya/store';
import parenting from '../views/pages/parenting/store';
import panduan from '../views/pages/panduan/store';

const rootReducer = {
	auth,
	main,
	about,
	faq,
	privacyPolicy,
  termsCond,
	hasilKarya,
	parenting,
	panduan
}

export default rootReducer;