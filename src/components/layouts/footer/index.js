/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logoBekawanImg from '../../assets/images/logo.png';
// import helloDreamImg from '../../assets/images/footer_hello_e-dream.png';
import helloDreamImg from '../../assets/images/footer_hello_e-dream_project.png';

import { HashLink } from 'react-router-hash-link';

const Footer = ({ color }) => {
	return (
		<Fragment>
			<footer id="footer" className="footer">
				

				<div className="footer-top" style={{marginTop:'-10px'}}>
					<div className="container">
						<div className="row gy-4">
							<div className="col-lg-3 col-md-12 footer-info">
								{/* <Link className="logo d-flex align-items-center" to="/">
									<img src={logoBekawanImg} alt="logo_bekawan" />
								</Link> */}

								<HashLink smooth to="/#hero" className="logo d-flex align-items-center">
									<img src={logoBekawanImg} alt="logo_bekawan" />
								</HashLink>

								<p>KAMPUS DAMPASAN PUSAT
									<br/>
									<br/>

								Jln. Pesantren, Ratawangi, Banjarsari, Ciamis, Jawa Barat , 46383

								</p>
							</div>

							<div className="col-lg-2 col-md-12 footer-links">
								<h4>Pondok Kami</h4>
								<ul>
									{/* <li>
										<a href="#about">Belajar Bersama</a>
									</li> */}
									{/* <li>
										<a href="#hero-second">Header</a>
									</li> */}

									<li>
									<HashLink smooth to="/#hero">Siakad</HashLink>
									</li>
									<li>
									<HashLink smooth to="/#hero">E-Rapor</HashLink>
									</li>
									<li>
									<HashLink smooth to="/#about">Profil Pimpinan</HashLink>
									</li>
									<li>
									<HashLink smooth to="/#values">Video Inspirasi</HashLink>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-12 footer-contact text-md-start">
								<h4>Kontak</h4>
								<div className='kontak'>
									Hubungi kami untuk informasi lebih lanjut
									<a href='https://api.whatsapp.com/send?phone=628112232312' target='_blank' rel='noreferrer'>
										<div className='text-footer-info' style={{ marginTop: '5px' }}>+62 811 2232 312</div>
									</a>
									{/* <div className='text-footer-info'>info@bekawan.org</div> */}
								</div>
							</div>

							<div className="col-lg-4 col-md-12 footer-links text-center">
								{/* <Link className="logo" to="/">
									<img className="img-fluid" src={helloDreamImg} alt="Hello e-dream" style={{ width: '300px' }} />
								</Link> */}
								
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
								<a href="https://www.youtube.com/@dampasanmedia189" className="youtube">
									<i className="bi bi-youtube" />
								</a>
							</div>
						</div>

						<div className="col-lg-7 col">
							<div className="copyright">
							Copyright © Miftahul Anwar Dampasan 2023.
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