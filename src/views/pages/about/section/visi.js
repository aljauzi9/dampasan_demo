import { FormatRawContent } from '../../../../utility';

const Visi = ({ title, dataVisi }) => {
	return (
		<section id="page-about-visi" className="page-about-visi">
			<div className="container" data-aos="fade-up">
				<header className="section-header">
					<h2>{title}</h2>
				</header>

				<div className="row justify-content-center">
					<div className="col-lg-12 text-center page-about-visi" data-aos="fade-down" data-aos-delay={200}>
						{/* <p style={{marginTop: '-50px'}} dangerouslySetInnerHTML={FormatRawContent(dataVisi)}></p> */}

						
						<p>
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
						</p>
						
					</div>
				</div>
			</div>
		</section>
	);
}

export default Visi;