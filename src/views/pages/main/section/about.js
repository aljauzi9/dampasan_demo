import { Link } from 'react-router-dom';
import sectionAbout1Img from '../../../../components/assets/images/section_about_01.png';
import sectionAbout2Img from '../../../../components/assets/images/section_about_02.png';
import sectionAbout3Img from '../../../../components/assets/images/section_about_03.png';
import sectionAbout4Img from '../../../../components/assets/images/section_about_04.png';
import sectionAbout5Img from '../../../../components/assets/images/section_about_05.png';

import Card from 'react-bootstrap/Card';


const About = () => {
	return (
		<section id="about" className="about">
				<header className="section-header">
					
				</header>

			<div className="desktop-only container card mb-8" style={{marginBottom:'25px'}}  data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0">
								<div className="col-md-4 text-center">
									<img className="img-fluid"style={{marginLeft:'-25px'}} src={sectionAbout1Img} alt="about_img_01" />
								</div>

								<div className="col-md-8">
									<div className="card-body">
										<h4 className="card-title">
										Profil Pendiri Pondok Pesantren Miftahul Anwar Dampasan
											</h4>

										<p className="card-text">
										Ky. Aminudin Azis, M.Ag
										</p>

										<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="/about/#hero-second" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Profil Lengkap</span>
											{/* </a> */}
											</Link>
										</div>

									</div>
								</div>
							</div>
						</div>
			<div className="desktop-only container" data-aos="fade-up">
				<header className="section-header">
					<h2>Kontak <span>Layanan</span></h2>
					{/* <p>Nikmati fitur menarik dari Bekawan yang membantu proses belajar mengajar Anda</p> */}
					<p>Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscpit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</header>

				</div>

				<div className='row desktop-only' style={{marginLeft:'200px'}}>  
				<Card style={{ width: '22rem',  }}>
				<img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" , marginRight:"0rem" }} src={sectionAbout4Img} alt="about_img_04" />
      <Card.Body>
        <Card.Title>Pusat Informasi</Card.Title>
        <Card.Text style={{marginTop:'38px'}}>
		Ust. Yusril Sidik
        </Card.Text>
        <div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="https://wa.me/628112232312" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>
      </Card.Body>
    </Card>  


	<Card style={{ width: '22rem', marginLeft:'30px' }}>
				<img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" , marginRight:"0rem" }} src={sectionAbout2Img} alt="about_img_02" />
      <Card.Body>
        <Card.Title>Administrasi Keuangan</Card.Title>
        <Card.Text>
		Ust. Wafaul Umam
        </Card.Text>
        <div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="https://wa.me/6282126827690" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>
      </Card.Body>
    </Card>

	<Card style={{ width: '22rem', marginLeft:'30px' }}>
				<img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" , marginRight:"0rem" }} src={sectionAbout3Img} alt="about_img_03" />
      <Card.Body>
        <Card.Title>Staff KMI</Card.Title>
        <Card.Text style={{marginTop:'38px'}}>
		Ust. Idan Fikri Dzakiyan
        </Card.Text >
        <div  className="card-button d-grid gap-2 d-md-flex justify-content-md-start" >
											<Link to="https://wa.me/6281284645713" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>
      </Card.Body>
    </Card>

	<Card style={{ width: '22rem', marginLeft:'30px' }}>
				<img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" , marginRight:"0rem" }} src={sectionAbout5Img} alt="about_img_05" />
      <Card.Body>
        <Card.Title>STAFF PENGASUHAN SANTRI</Card.Title>
        <Card.Text>
        Ust. Abd. Azis N Kamilin
        </Card.Text>
        <div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="https://wa.me/6282123720626" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>
      </Card.Body>
    </Card>
				</div>




				{/* mobile */}




				<div className="mobile container" data-aos="fade-up">
				

				<div className="row gy-5">
					<div className="col-lg-12">
						<div className="card mb-5" data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0">
								<div className="col-md-4 text-center">
									<img className="img-fluid" src={sectionAbout1Img} alt="about_img_01" />
								</div>

								<div className="col-md-8">
									<div className="card-body">
										<h4 className="card-title">Profil Pendiri Pondok Pesantren Miftahul Anwar Dampasan</h4>

										<p className="card-text">
										Ky. Aminudin Azis, M.Ag
										</p>

										<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="/about/#hero-second" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Profil Lengkap</span>
											{/* </a> */}
											</Link>
										</div>

									</div>
								</div>
							</div>
						</div>

						<header className="section-header">
						<h2>Kontak <span>Layanan</span></h2>
					{/* <p>Nikmati fitur menarik dari Bekawan yang membantu proses belajar mengajar Anda</p> */}
					<p>Lorem pisum dolor sit amet, consectetur adpisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
				</header>

						<div className="card mb-5" data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0 column-reverse">
								<div className="col-md-8">
									<div className="card-body">
										<h4 className="card-title">Pusat Informasi</h4>

										<p className="card-text">
										Ust. Yusril Sidik
										</p>

										<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="https://wa.me/628112232312" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>

									</div>
								</div>

								<div className="col-md-4 text-center">
									<img className="img-fluid" src={sectionAbout4Img} alt="about_img_04" />
								</div>
							</div>
						</div>

						<div className="card mb-5" data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0">
								<div className="col-md-4 text-center">
									<img className="img-fluid" src={sectionAbout2Img} alt="about_img_02" />
								</div>

								<div className="col-md-8">
									<div className="card-body">
										<h4 className="card-title">Administrasi Keuangan</h4>

										<p className="card-text">
										Ust. Wafaul Umam
										</p>

										<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="https://wa.me/6282126827690" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>

									</div>
								</div>

								
							</div>
						</div>


						<div className="card mb-5" data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0 column-reverse">
								<div className="col-md-8">
									<div className="card-body">
										<h4 className="card-title">Staff KMI</h4>

										<p className="card-text">
										Ust. Idan Fikri Dzakiyan
										</p>

										<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="https://wa.me/6281284645713" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>

									</div>
								</div>

								<div className="col-md-4 text-center">
									<img className="img-fluid" src={sectionAbout3Img} alt="about_img_03" />
								</div>
							</div>
						</div>

						<div className="card mb-5" data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0">
								<div className="col-md-4 text-center">
									<img className="img-fluid" src={sectionAbout5Img} alt="about_img_05" />
								</div>

								<div className="col-md-8">
									<div className="card-body">
										<h4 className="card-title">STAFF PENGASUHAN SANTRI</h4>

										<p className="card-text">
										Ust. Abd. Azis N Kamilin
										</p>

										<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to="https://wa.me/6282123720626" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
											{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"> */}
												<span>Kontak WA</span>
											{/* </a> */}
											</Link>
										</div>

									</div>
								</div>

								
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	);
}

export default About;
