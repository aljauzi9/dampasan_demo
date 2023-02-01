/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store';
import { 
	FormatRawContent,
} from '../../../../utility';

const TermsConditions = () => {
	// ** Store Vars
  const dispatch = useDispatch();
  const store = useSelector(state => state.termsCond);
	// console.log('AllStore TermsConditions', store);

	// ** Get data on mount
  useEffect(() => {
		dispatch(getData());
  }, [dispatch, store.total]);

	return (
		<main id="main">
			<section id="faq" className="faq">
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-12 entries">
							<article className="entry entry-single">
								{/* <div className="entry-meta">
									<ul>
										<li className="d-flex align-items-center">
											<i>Terakhir diperbarui:</i>
											<a className="date">
												<time dateTime="2020-01-01">{FormatDatetime(store.data.updated_at, 'optionIdCustom1')}</time>
											</a>
										</li>
									</ul>
								</div> */}

								<div className="entry-content" dangerouslySetInnerHTML={FormatRawContent(store.data.isi_halaman)}>

								</div>
							</article>
						</div>

					</div>
				</div>
			</section>
		</main>
	);
}

export default TermsConditions;