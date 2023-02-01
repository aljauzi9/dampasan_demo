import ReactPlayer from 'react-player/lazy';
import { Link } from 'react-router-dom';
import panduanSiswaImg from '../../../../components/assets/images/panduan_dugong_siswa.png';

const Siswa = () => {
	return (
		<section id="panduan-siswa" className="panduan-public">
			<div className="container" data-aos="fade-up">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<div className="card mb-5 justify-content-center align-self-center" data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0">
								<div className="col-md-2 d-none d-lg-block d-xl-block">
									<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanSiswaImg} alt="about_img_01" />
								</div>

								<div className="col-md-5">
									<div className="card-body content-video">
										<ReactPlayer url="https://www.youtube.com/watch?v=POS23UrjVis&feature=youtu.be" controls={true} width="100%" height="269.67px" />
									</div>
								</div>

								<div className="col">
									<div className="card-body content-text">
										<h4 className="card-title">Siswa Bekawan</h4>

										<p className="card-text">
											It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
										</p>

										<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
											<Link to={`/panduan`} className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center">
												<span>Website</span>
											</Link>

											<Link to={`/panduan`} className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center">
												<span>Aplikasi</span>
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

export default Siswa;