import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player/lazy';
import { CheckValueArray, FormatRawContent } from '../../../../utility';
import { getData } from '../store';
import CONSTANT from '../../../../config/constantApi';
import Title from './title';
import panduanSuperadminImg from '../../../../components/assets/images/panduan_beka_superadmin.png';
import panduanKuratorImg from '../../../../components/assets/images/panduan_enggang_kurator.png';
import panduanSekolahImg from '../../../../components/assets/images/panduan_beka_sekolah.png';
import panduanGuruImg from '../../../../components/assets/images/panduan_enggang_guru.png';
import panduanSiswaImg from '../../../../components/assets/images/panduan_dugong_siswa.png';
import panduanPublicImg from '../../../../components/assets/images/panduan_beru_public.png';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
/*
import Guru from './guru';
import Kurator from './kurator';
import Public from './public';
import Sekolah from './sekolah';
import Siswa from './siswa';
import Superadmin from './superadmin';
*/

const Main = () => {
	// ** Store Vars
	const checkValue = [CONSTANT.CHECK_VALUE_NULL, CONSTANT.CHECK_VALUE_UNDEFINED, CONSTANT.CHECK_VALUE_EMPTY_STRING];
	const dispatch = useDispatch();
	const store = useSelector(state => state.panduan);

	// ** Get data on mount
	useEffect(() => {
		dispatch(getData());
	}, [dispatch, store.data?.length]);

	const renderPanduanList = ({ i, row }) => {
		// console.log(`renderPanduanList ${i + 1}`, row);
		let iconPanduan = null;
		if ((row.tipe).toLowerCase() === 'superadmin') {
			iconPanduan = (
				<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanSuperadminImg} alt={`icon_panduan_${row.nama_panduan}`} />
			);
		}
		else if ((row.tipe).toLowerCase() === 'kurator') {
			iconPanduan = (
				<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanKuratorImg} alt={`icon_panduan_${row.nama_panduan}`} />
			);
		}
		else if ((row.tipe).toLowerCase() === 'adminsekolah') {
			iconPanduan = (
				<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanSekolahImg} alt={`icon_panduan_${row.nama_panduan}`} />
			);
		}
		else if ((row.tipe).toLowerCase() === 'guru') {
			iconPanduan = (
				<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanGuruImg} alt={`icon_panduan_${row.nama_panduan}`} />
			);
		}
		else if ((row.tipe).toLowerCase() === 'siswa') {
			iconPanduan = (
				<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanSiswaImg} alt={`icon_panduan_${row.nama_panduan}`} />
			);
		}
		else {
			iconPanduan = (
				<img className="img-fluid position-absolute top-0 start-0 translate-middle" src={panduanPublicImg} alt={`icon_panduan_${row.nama_panduan}`} />
			);
		}

		return (
			<section id={`panduan-${(row.tipe).toLowerCase()}`} className="panduan-public" key={i + 1}>
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-12 d-flex justify-content-center">
							<div className="card mb-5 justify-content-center align-self-center" data-aos="fade-up" data-aos-delay={100}>
								<div className="row g-0">
									<div className="col-lg-2 d-none d-lg-block d-xl-block">
										{/* <img className="img-fluid position-absolute top-0 start-0 translate-middle" src={row.icon} alt={`icon_${row.panduan_id}`} /> */}
										{iconPanduan}
									</div>

									<div className="col-md-6 col-lg-5">
										<div className="card-body content-video">
											<ReactPlayer url={!checkValue.includes(row?.link) ? row.link : 'https://www.youtube.com/watch?v=POS23UrjVis&feature=youtu.be'} /* url="https://www.youtube.com/watch?v=POS23UrjVis&feature=youtu.be" */ controls={true} width="100%" height="269.67px" />
										</div>
									</div>

									<div className="col-md-6 col-lg-5">
										<div className="card-body content-text">
											<h4 className="card-title">{row?.nama_panduan ? row.nama_panduan : '-'}</h4>
											<p className="card-text" dangerouslySetInnerHTML={FormatRawContent(row?.keterangan)}></p>
											<div className='text-center' style={{ marginRight: '20px' }}>
												<div className='row px-4'>
													{row?.total_web !== 0 ? (
														<div className='col-6'>
															<HashLink className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center mb-1" to={`/panduan/${row?.panduan_id}/web/#hero-second`} rel="noreferrer">
																<span>Website</span>
															</HashLink>
														</div>
													) : ''}
													{row?.total_app !== 0 ? (
														<div className='col-6'>
															<HashLink className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center mb-1" to={`/panduan/${row?.panduan_id}/app/#hero-second`} rel="noreferrer">
																<span>Aplikasi</span>
															</HashLink>
														</div>
													) : ''}
												</div>
											</div>

											{/* {(!checkValue.includes(row?.link_web) || !checkValue.includes(row?.link_app)) &&
												<div className="card-button d-grid gap-2 d-md-flex justify-content-md-start">
													{!checkValue.includes(row?.link_web) &&
														<a className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center" href={`${row?.link_web}`} target="_blank" rel="noreferrer">
															<span>Website</span>
														</a>
													}

													{!checkValue.includes(row?.link_app) &&
														<a className="btn-get-started d-inline-flex align-items-center justify-content-center align-self-center" href={`${row?.link_app}`} target="_blank" rel="noreferrer">
															<span>Aplikasi</span>
														</a>
													}
												</div>
											} */}
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

	return (
		<main id="main">
			<Title />

			{CheckValueArray(store.data) && store.data.map((row, i) =>
				renderPanduanList({ i, row })
			)}

			{/*
			<Public />
			<Guru />
			<Siswa />
			<Sekolah />
			<Kurator />
			<Superadmin />
			*/}
		</main>
	);
};

export default Main;