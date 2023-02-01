import ReactPlayer from 'react-player/lazy';
import panduanKuratorImg from '../../../../components/assets/images/panduan_enggang_kurator.png';

const Kurator = () => {
	return (
		<section id="panduan-kurator" className="panduan-public">
			<div className="container" data-aos="fade-up">
				<div className="row">
					<div className="col-lg-12 d-flex justify-content-center">
						<div className="card mb-5 justify-content-center align-self-center" data-aos="fade-up" data-aos-delay={100}>
							<div className="row g-0">
								<div className="col-md-2 d-none d-lg-block d-xl-block">
									<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanKuratorImg} alt="about_img_01" />
								</div>

								<div className="col-md-5">
									<div className="card-body content-video">
										<ReactPlayer url="https://www.youtube.com/watch?v=POS23UrjVis&feature=youtu.be" controls={true} width="100%" height="269.67px" />
									</div>
								</div>

								<div className="col">
									<div className="card-body content-text">
										<h4 className="card-title">Kurator Bekawan</h4>

										<p className="card-text">
											It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
										</p>
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

export default Kurator;