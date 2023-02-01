/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CONSTANT from '../../../../config/constantApi';
import { FormatRawContent } from '../../../../utility';
import { getData } from '../store';


const Faq = () => {
	// ** Store Vars
	const checkValue = [CONSTANT.CHECK_VALUE_NULL, CONSTANT.CHECK_VALUE_UNDEFINED, CONSTANT.CHECK_VALUE_EMPTY_STRING];
	const dispatch = useDispatch();
	const store = useSelector(state => state.faq);

	// ** Get data on mount
	useEffect(() => {
		dispatch(getData());
	}, [dispatch, store.data.length]);

	const renderAcordionList = ({ i, row }) => {

		return (
			<div className="accordion-item" key={i + 1}>
				<h2 className="accordion-header">
					<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#faq-content-${row.halaman_statis_id}`}>
						{!checkValue.includes(row?.judul_halaman) ? row.judul_halaman : '-'}
					</button>
				</h2>

				<div id={`faq-content-${row.halaman_statis_id}`} className="accordion-collapse collapse" data-bs-parent="#faqlist1">
					<div className="accordion-body" dangerouslySetInnerHTML={FormatRawContent(row?.isi_halaman)}></div>
				</div>
			</div>
		);
	}

	return (
		<main id="main">
			<section id="faq" className="faq">
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-12 entries">
							<article className="entry entry-single">
								<div className="entry-meta">
									{/* <ul>
										<li className="d-flex align-items-center">
											<i>Last Updated:</i>
											<a className="date">
												<time dateTime="2020-01-01">10 Juli 2022</time>
											</a>
										</li>
									</ul> */}
								</div>

								<div className="entry-content">
									{/* <p>
										Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</p> */}
									<p>
										Kami menemukan pertanyaan yang sering diajukan pengguna platform Bekawan.
									</p>

									{/* <p>
										Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</p> */}

									<div className="col-lg-12 mt-5 mb-5">
										<div className="accordion accordion-flush" id="faqlist1">

											{Array.isArray(store.data) && store.data.map((row, i) =>
												renderAcordionList({ i, row })
											)}

											{/*
											<div className="accordion-item">
												<h2 className="accordion-header">
													<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
														Information Collection and Use
													</button>
												</h2>

												<div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
													<div className="accordion-body">
														Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat
														lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla
														urna porttitor rhoncus dolor purus non.
													</div>
												</div>
											</div>

											<div className="accordion-item">
												<h2 className="accordion-header">
													<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
														Content Collection and Use
													</button>
												</h2>

												<div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
													<div className="accordion-body">
														Dolor sit amet consectetur adipiscing elit pellentesque habitant
														morbi. Id interdum velit laoreet id donec ultrices. Fringilla
														phasellus faucibus scelerisque eleifend donec pretium. Est
														pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
														cursus turpis massa tincidunt dui.
													</div>
												</div>
											</div>

											<div className="accordion-item">
												<h2 className="accordion-header">
													<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
														Device Information and Log Data
													</button>
												</h2>

												<div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
													<div className="accordion-body">
														Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
														orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
														diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
														Lectus urna duis convallis convallis tellus. Urna molestie at
														elementum eu facilisis sed odio morbi quis
													</div>
												</div>
											</div>

											<div className="accordion-item">
												<h2 className="accordion-header">
													<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
														Cookies
													</button>
												</h2>

												<div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
													<div className="accordion-body">
														Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
														orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
														diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
														Lectus urna duis convallis convallis tellus. Urna molestie at
														elementum eu facilisis sed odio morbi quis
													</div>
												</div>
											</div>

											<div className="accordion-item">
												<h2 className="accordion-header">
													<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
														Service Provider
													</button>
												</h2>

												<div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
													<div className="accordion-body">
														Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
														orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
														diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
														Lectus urna duis convallis convallis tellus. Urna molestie at
														elementum eu facilisis sed odio morbi quis
													</div>
												</div>
											</div>

											<div className="accordion-item">
												<h2 className="accordion-header">
													<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
														Security
													</button>
												</h2>

												<div id="faq-content-6" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
													<div className="accordion-body">
														Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
														orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
														diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
														Lectus urna duis convallis convallis tellus. Urna molestie at
														elementum eu facilisis sed odio morbi quis
													</div>
												</div>
											</div>

											<div className="accordion-item">
												<h2 className="accordion-header">
													<button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-content-7">
														Other Links and Sites
													</button>
												</h2>

												<div id="faq-content-7" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
													<div className="accordion-body">
														Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
														orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
														diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
														Lectus urna duis convallis convallis tellus. Urna molestie at
														elementum eu facilisis sed odio morbi quis
													</div>
												</div>
											</div>
											*/}
										</div>
									</div>

									<p>
										Semoga pertanyaan dan jawaban di atas dapat membantu Anda dalam menggunakan platform Bekawan.
									</p>
								</div>
							</article>
						</div>

					</div>
				</div>
			</section>
		</main>
	);
}

export default Faq;