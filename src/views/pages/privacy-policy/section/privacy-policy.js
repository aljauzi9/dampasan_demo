/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CONSTANT from "../../../../config/constantApi";
import { FormatRawContent } from "../../../../utility";
import { getData } from "../store";

const PrivacyPolicy = () => {
	// ** Store Vars
	// const checkValue = [
	// 	CONSTANT.CHECK_VALUE_NULL,
	// 	CONSTANT.CHECK_VALUE_UNDEFINED,
	// 	CONSTANT.CHECK_VALUE_EMPTY_STRING,
	// ];
	const dispatch = useDispatch();
	const store = useSelector((state) => state.privacyPolicy);
	console.log("AllStore Privacy Policy", store);

	// **Get data on mount
	useEffect(() => {
		dispatch(getData());
	}, [dispatch, store.data.length]);

	// const renderAcordionList = ({ i, row }) => {
	// 	console.log(`renderAcordionList ${i + 1}`, row);

	// 	return (
	// 		<div className="accordion-item" key={i + 1}>
	// 			<h2 className="accordion-header">
	// 				<button
	// 					type="button"
	// 					className="accordion-button collapsed"
	// 					data-bs-toggle="collapse"
	// 					data-bs-target={`#faq-content-${row.halaman_statis_id}`}
	// 				>
	// 					{!checkValue.includes(row?.judul_halaman) ? row.judul_halaman : "-"}
	// 				</button>
	// 			</h2>

	// 			<div
	// 				id={`faq-content-${row.halaman_statis_id}`}
	// 				className="accordion-collapse collapse"
	// 				data-bs-parent="#privacylist1"
	// 			>
	// 				<div
	// 					className="accordion-body"
	// 					dangerouslySetInnerHTML={FormatRawContent(row?.isi_halaman)}
	// 				></div>
	// 			</div>
	// 		</div>
	// 	);
	// };

	return (
		<main id="main">
			<section id="faq" className="faq">
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-12 entries">
							<article className="entry entry-single">
								<div className="entry-content" dangerouslySetInnerHTML={FormatRawContent(store.data.isi_halaman)}></div>
								{/* <div className="entry-content">
									<div className="col-lg-12 mt-5 mb-5">
										<div className="accordion accordion-flush" id="privacylist1">
											{Array.isArray(store.data) &&
												store.data.map((row, i) =>
													renderAcordionList({ i, row })
												)}
										</div>
									</div>
								</div> */}
							</article>
							{/* NOTE DISABLED
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

											*/}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default PrivacyPolicy;


