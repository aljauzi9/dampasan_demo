/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataParenting } from '../store';
import sectionParentingImg from '../../../../components/assets/images/iklan.png';
import { CONSTANT } from '../../../../config/constantApi';
import { FormatDatetime, FormatRawContent } from '../../../../utility';

const Parenting = () => {
	// ** Store Vars
	const checkValue = [CONSTANT.CHECK_VALUE_NULL, CONSTANT.CHECK_VALUE_UNDEFINED, CONSTANT.CHECK_VALUE_EMPTY_STRING];
	const dispatch = useDispatch();
	const store = useSelector(state => state.main);
	// console.log('AllStore Parenting', store.dataParenting);

	// ** Get data on mount
	useEffect(() => {
		dispatch(getDataParenting());
	}, [dispatch, store.dataParenting.length]);

	// const renderListLeft = ({ i, row }) => {
	// 	return (
	// 		<div className="card-left mb-3" key={i}>
	// 			<div className="row g-0">
	// 				<div className="col-md-5">
	// 					<div className="card-head">
	// 						<div className="head-img">
	// 							<img className="img-fluid" src={`${CONSTANT.API_MANAGEMENT_HOST_S3_IMAGE}/${row?.gambar}`} alt={row?.judul_postingan} />
	// 						</div>

	// 						<div className="head-info">
	// 							<p>
	// 								Diunggah pada {FormatDatetime(row.updated_at, 'optionIdCustom2')}
	// 								<br />
	// 								Oleh {!checkValue.includes(row?.admin?.nama_superadmin) ? row.admin.nama_superadmin : '-'}
	// 							</p>
	// 						</div>

	// 					</div>
	// 				</div>

	// 				<div className="col-md-7">
	// 					<div className="card-body">
	// 						<h5 className="card-title">
	// 							{!checkValue.includes(row?.judul_postingan) ? row.judul_postingan : '-'}
	// 						</h5>
	// 						<div className='' style={{ maxHeight: '140px', overflow: 'hidden' }}>
	// 							<p className="card-text" dangerouslySetInnerHTML={FormatRawContent(row.deskripsi)}></p>
	// 						</div>

	// 						<p className="card-text">
	// 							<Link to={`/parenting/${row.blog_id}`}>
	// 								<small className="text-muted">Lihat Semua</small>
	// 							</Link>
	// 						</p>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// const renderListRight = ({ i, row }) => {
	// 	return (
	// 		<div className="card-right mb-3" key={i}>
	// 			<div className="row g-0 column-reverse">
	// 				<div className="col-md-7">
	// 					<div className="card-body">
	// 						<h5 className="card-title">
	// 							{!checkValue.includes(row?.judul_postingan) ? row.judul_postingan : '-'}
	// 						</h5>
	// 						<div className='' style={{ maxHeight: '140px', overflow: 'hidden' }}>
	// 							<p className="card-text" dangerouslySetInnerHTML={FormatRawContent(row.deskripsi)}></p>
	// 						</div>

	// 						<p className="card-text">
	// 							<Link to={`/parenting/${row.blog_id}`}>
	// 								<small className="text-muted">Lihat Semua</small>
	// 							</Link>
	// 						</p>
	// 					</div>
	// 				</div>

	// 				<div className="col-md-5">
	// 					<div className="card-head">
	// 						<div className="head-img">
	// 							<img className="img-fluid" src={`${CONSTANT.API_MANAGEMENT_HOST_S3_IMAGE}/${row?.gambar}`} alt={row?.judul_postingan} />
	// 						</div>

	// 						<div className="head-info">
	// 							<p>
	// 								Diunggah pada {FormatDatetime(row.updated_at, 'optionIdCustom2')}
	// 								<br />
	// 								Oleh {!checkValue.includes(row?.admin?.nama_superadmin) ? row.admin.nama_superadmin : '-'}
	// 							</p>
	// 						</div>

	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// const renderSectionList = ({ i, row }) => {
	// 	// console.log(`renderSectionList ${i + 1}`, row);

	// 	if (i === 0) {
	// 		return renderListLeft({ i, row });
	// 	}
	// 	else {
	// 		return renderListRight({ i, row });
	// 	}
	// }

	return (
		<section id="parenting" className="parenting">

<img src={sectionParentingImg} className="img-fluid" alt="parenting" />
			{/* <div className="container" data-aos="fade-up">
				<header className="section-header">
					<h2>Keluarga Bekawan</h2>
					<p>Sumber pengetahuan keluarga berkualitas dan holistik dalam proses pendidikan sepanjang hayat sebagai bentuk adaptasi atas perubahan dan perkembangan ekologi dan teknologi global.</p>
				</header>

				{Array.isArray(store.dataParenting) && store.dataParenting.map((row, i) =>
					renderSectionList({ i, row })
				)}

				
				<div className="card-left mb-3">
					<div className="row g-0">
						<div className="col-md-5">
							<div className="card-head">
								<div className="head-img">
									<img src={sectionParentingImg} className="img-fluid" alt="parenting" />
								</div>

								<div className="head-info">
									<p>
										Diunggah pada 14 maret 2022
										<br />
										Oleh Bernadia Lovita
									</p>
								</div>

							</div>
						</div>

						<div className="col-md-7">
							<div className="card-body">
								<h5 className="card-title">
									Peran Orang Tua sebagai Pembangun Prestasi Anak
								</h5>

								<p className="card-text">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
								</p>

								<p className="card-text">
									<small className="text-muted">Lihat Semua</small>
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="card-right mb-3">
					<div className="row g-0">
						<div className="col-md-7">
							<div className="card-body">
								<h5 className="card-title">
									Peran Orang Tua sebagai Pembangun Prestasi Anak
								</h5>

								<p className="card-text">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
								</p>

								<p className="card-text">
									<small className="text-muted">Lihat Semua</small>
								</p>
							</div>
						</div>

						<div className="col-md-5">
							<div className="card-head">
								<div className="head-img">
									<img src={sectionParentingImg} className="img-fluid" alt="parenting" />
								</div>

								<div className="head-info">
									<p>
										Diunggah pada 14 maret 2022
										<br />
										Oleh Bernadia Lovita
									</p>
								</div>

							</div>
						</div>
					</div>
				</div>
				
			</div> */}
		</section>
	);
}

export default Parenting;