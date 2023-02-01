import { FormatRawContent } from '../../../../utility';

const Misi = ({ title, dataMisi }) => {
	return (
		<section id="page-about-misi" className="page-about-misi">
			<div className="container" data-aos="fade-up">
				<header className="section-header">
					<h2>{title}</h2>
				</header>

				<div className="row justify-content-center">
					<div className="col-lg-12 text-center page-about-misi-item" data-aos="fade-up" data-aos-delay={200}>



						{/* <p style={{marginTop: '-50px'}} dangerouslySetInnerHTML={FormatRawContent(dataMisi)}></p> */}

						
						<p>
							1. lorem ipsom sum lorem rem lorem lorem ipsum sumlorem
						</p>
						<p>
							2. lorem ipsom sum lorem rem lorem lorem ipsum sumlorem
						</p>
						<p>
							3. lorem ipsom sum lorem rem lorem lorem ipsum sumlorem
						</p>
						
					</div>
				</div>
			</div>
		</section>
	);
}

export default Misi;