/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import helloDreamImg from '../../../../components/assets/images/footer_hello_e-dream.png';
import helloDreamImg from '../../../../components/assets/images/footer_hello_e-dream_project.png';
import logoBekawanImg from '../../../../components/assets/images/logo.png';

const Footer = () => {
  return (
		<Fragment>
			<footer id="footer-signin" className="footer-signin">
				<div className="footer-top">
					<div className="container">
						<div className="row gy-4 py-4">
							<div className="col-lg-5 col-md-12 footer-info text-lg-start text-center">
								{/* <Link className="logo d-flex align-items-center" to="/"> */}
								<Link className="logo" to="/">
									<img src={logoBekawanImg} alt="logo_bekawan" />
								</Link>
							</div>

							<div className="col-lg-2 col-md-12 footer-links">
								&nbsp;
							</div>

							<div className="col-lg-5 col-md-12 footer-links text-center">
								{/* <Link className="logo d-flex align-items-center" to="/"> */}
								<Link className="logo" to="/">
									<img className="img-fluid" src={helloDreamImg} alt="Tfooter_hello_e-dream_project.png" style={{ width: '300px' }} />
								</Link>			

					</div>

						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-12">
							<div className="social-links">
								<a href="https://www.instagram.com/miftahul_anwar_dampasan/?hl=id" className="instagram">
									<i className="bi bi-instagram" />
								</a>
								<a href="https://www.facebook.com/ponpesmiftahulanwar/" className="facebook">
									<i className="bi bi-facebook" />
								</a>
								<a href="https://wa.me/628112232312" className="whatsapp">
									<i className="bi bi-whatsapp" />
								</a>
								<a href="https://www.youtube.com/channel/UCXNtkjJ0oQ7xOySWVyfHzpA" className="youtube">
									<i className="bi bi-youtube" />
								</a>
							</div>
						</div>

						<div className="col-lg-7 col">
							<div className="copyright">
								Copright © Dampasan 2022, All Right Reserved.
							</div>
						</div>
					</div>

				</div>
			</footer>

			{/* <a href="#top" className="back-to-top d-flex align-items-center justify-content-center">
				<i className="bi bi-arrow-up-short"></i>
			</a> */}
		</Fragment>
	);
}

export default Footer;