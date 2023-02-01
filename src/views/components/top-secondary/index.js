import { UsePathname } from '../../../utility';

const TopSecondary = () => {
	return (
		<section id="hero-second" className="hero-second d-flex align-items-center">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 d-flex flex-column justify-content-center">
						<h1 data-aos="fade-up">
							{renderTitleText(UsePathname())}
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}

// ** Renders Top Title Text
const renderTitleText = pathname => {
	if (pathname.includes('/hasil-karya')) {
		return ('Hasil Karya');
	}
	else if (pathname.includes('/parenting')) {
		return ('Keluarga Bekawan');
	}
	else if (pathname.includes('/panduan')) {
		return ('Panduan');
	}
	else if (pathname.includes('/faq')) {
		return ('Frequently Asked Question (FAQ)');
	}
	else if (pathname.includes('/privacy-policy')) {
		return ('Privacy Policy');
	}
	else if (pathname.includes('/term-conditions')) {
		return ('Terms & Conditions');
	}
	else {
		return null;
	}
}

export default TopSecondary;