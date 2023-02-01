/* eslint-disable jsx-a11y/anchor-is-valid */
import { /* useState, */ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryBlogId, getData, getTags } from '../store';
import { CheckValueArray, FormatDatetime, FormatRawContent } from '../../../../utility';
import { CONSTANT } from '../../../../config/constantApi';
import { ReactComponent as KaryaAllIcon } from '../../../../components/assets/images/KategoriTags01.svg';
import { ReactComponent as KaryaGuruIcon } from '../../../../components/assets/images/KategoriTags02.svg';
import { ReactComponent as KaryaSiswaIcon } from '../../../../components/assets/images/KategoriTags03.svg';

import { HashLink } from 'react-router-hash-link';

const Main = () => {
	// ** Store Vars
	const checkValue = [CONSTANT.CHECK_VALUE_NULL, CONSTANT.CHECK_VALUE_UNDEFINED, CONSTANT.CHECK_VALUE_EMPTY_STRING];
	const dispatch = useDispatch();
	const store = useSelector(state => state.hasilKarya);
	// const [currentTagId, setCurrentTagId] = useState(null);
	console.log('AllStore Hasil Karya', { store });

	// ** Get data on mount
	useEffect(() => {
		dispatch(getData({ tag: store.categoryBlogId }));
		// dispatch(getData({ tag: currentTagId }));
	}, [dispatch, store.data?.length, store.categoryBlogId]);

	useEffect(() => {
		dispatch(getTags());
	}, [dispatch]);

	// NOTE Render Blog Tag
	const renderTag = ({ i, row }) => {
		// console.log(`renderTag ${i + 1}`, row);
		let styleBadge = null;
		if ((row.tag.tag).toLowerCase() === 'karya guru') {
			styleBadge = (
				<div className="badge-category badge-secondary">
					<span>{!checkValue.includes(row?.tag?.tag) ? row.tag.tag : '-'}</span>
				</div>
			);
		}
		else {
			styleBadge = (
				<div className="badge-category badge-primary">
					<span>{!checkValue.includes(row?.tag?.tag) ? row.tag.tag : '-'}</span>
				</div>
			);
		}

		return (
			<li className="d-flex align-items-center" key={row?.tag_id}>
				{styleBadge}
			</li>
		);
	}

	// NOTE Render Section Blog
	const renderSection = ({ i, row }) => {
		// console.log(`renderSection ${i + 1}`, row);

		return (
			<div className="col-md-6" key={i + 1}>
				<article className="entry" style={{ overflow: 'hidden' }}>
					<div className="entry-img">
						<img className="img-fluid" src={`${CONSTANT.API_MANAGEMENT_HOST_S3_IMAGE}/${row?.gambar}`} alt={row?.judul_postingan} />
					</div>

					<h2 className="entry-title">
						<HashLink smooth to={`/hasil-karya/${row.blog_id}/#hero-second`} onClick={() => handleAssignedToChange(null)}>
							{row.judul_postingan}
						</HashLink>

						{/* <Link to={`/hasil-karya/${row.blog_id}`} onClick={() => handleAssignedToChange(null)}>
							{row.judul_postingan}
						</Link> */}
					</h2>

					<div className="entry-meta">
						<ul>
							<li className="d-flex align-items-center">
								<i>Oleh</i>{" "}
								<a className="name" href="#">
									{/* {!checkValue.includes(row?.admin?.nama_superadmin) ? row.admin.nama_superadmin : '-'} */}
									{row?.admin === null ? row?.kurator?.nama_kurator : row?.admin?.nama_superadmin}
								</a>
							</li>
							<span className="vertical-line"></span>
							<li className="d-flex align-items-center">
								<a className="date" href="#">
									<time dateTime="2020-01-01">{FormatDatetime(row.updated_at, 'optionIdCustom2')}</time>
								</a>
							</li>
						</ul>
					</div>

					<div className="entry-category">
						<ul>
							{CheckValueArray(row.blog_tag) && row.blog_tag.map((row, i) =>
								renderTag({ i, row })
							)}
						</ul>
					</div>

					<div className="entry-content">
						{/* <p dangerouslySetInnerHTML={FormatRawContent(row.deskripsi)}></p> */}
						<div style={{ maxHeight: '70px', overflow: 'hidden' }}>
							<p dangerouslySetInnerHTML={FormatRawContent(row.deskripsi)}></p>
						</div>

						<div className="read-more">
							<HashLink to={`/hasil-karya/${row.blog_id}/#hero-second`} onClick={() => handleAssignedToChange(null)}>
								Baca Semua
							</HashLink>

							{/*
							<button
								type="button"
								className="btn btn-link"
								onClick={() => handleViewDetailBlog(row.blog_id)}
							>
								Baca Semua
							</button>
							*/}
						</div>
					</div>
				</article>
			</div>
		);
	}

	// NOTE Render List Recent Update
	const renderRecentUpdateList = ({ i, row }) => {
		// console.log(`renderRecentUpdateList ${i + 1}`, row);

		return (
			<div className="post-item clearfix" key={i + 1}>
				<img src={`${CONSTANT.API_MANAGEMENT_HOST_S3_IMAGE}/${row?.gambar}`} alt={row?.judul_postingan} />
				<h4>
					<Link to={`/hasil-karya/${row.blog_id}`} onClick={() => handleAssignedToChange(null)}>
						{!checkValue.includes(row?.judul_postingan) ? row.judul_postingan : '-'}
					</Link>
				</h4>
				<time dateTime="2020-01-01">{FormatDatetime(row.updated_at, 'optionIdCustom2')}</time>
			</div>
		);
	}

	const renderCategoriesTag = ({ i, row }) => {
		// console.log(`renderCategoriesTag ${i + 1}`, row);
		let iconCategoriesTag = null;
		if ((row.tag).toLowerCase() === 'karya guru') {
			iconCategoriesTag = (<KaryaGuruIcon />);
		}
		else if ((row.tag).toLowerCase() === 'karya siswa') {
			iconCategoriesTag = (<KaryaSiswaIcon />);
		}
		else {
			iconCategoriesTag = (<KaryaAllIcon />);
		}

		return (
			<li key={i + 1}>
				<button
					type="button"
					className="btn btn-link"
					onClick={() => handleAssignedToChange(row.tag_id)}
				>
					{iconCategoriesTag} {!checkValue.includes(row?.tag) ? row.tag : '-'}
				</button>
			</li>
		)
	}

	// ** Function to filter Category Tags
	const handleAssignedToChange = val => {
		console.clear();
		console.log('tag_id', val);
		// setCurrentTagId(val);
		dispatch(categoryBlogId(val))
	}

	return (
		<main id="main">
			<section id="blog" className="blog">
				<div className="container" data-aos="fade-up">
					<div className="row gy-4">
						<div className="col-lg-8 entries">
							<div className="row gy-4">
								{CheckValueArray(store.data) && store.data.map((row, i) =>
									renderSection({ i, row })
								)}

								{/* NOTE Disable Blog Pagination
								<div className="blog-pagination">
									<ul className="justify-content-center">
										<li>
											<a href="#">1</a>
										</li>

										<li className="active">
											<a href="#">2</a>
										</li>

										<li>
											<a href="#">3</a>
										</li>
									</ul>
								</div>
								*/}
							</div>
						</div>

						<div className="col-lg-4">
							<div className="sidebar">
								<h3 className="sidebar-title">Unggahan Terbaru</h3>
								<div className="sidebar-item recent-posts">
									{CheckValueArray(store.data) && store.data.slice(0, 4).map((row, i) =>
										renderRecentUpdateList({ i, row })
									)}

									{/*
									<div className="post-item clearfix">
										<img src={RecentUpdateImg} alt="" />
										<h4>
											<Link to={`/hasil-karya`}>Protect Culture and Children</Link>
										</h4>
										<time dateTime="2020-01-01">14 Mei 2022</time>
									</div>

									<div className="post-item clearfix">
										<img src={RecentUpdateImg} alt="" />
										<h4>
											<Link to={`/hasil-karya`}>Why Should Forget Facebook?</Link>
										</h4>
										<time dateTime="2020-01-01">14 Mei 2022</time>
									</div>

									<div className="post-item clearfix">
										<img src={RecentUpdateImg} alt="" />
										<h4>
											<Link to={`/hasil-karya`}>Why Should Forget Facebook?</Link>
										</h4>
										<time dateTime="2020-01-01">14 Mei 2022</time>
									</div>

									<div className="post-item clearfix">
										<img src={RecentUpdateImg} alt="" />
										<h4>
											<Link to={`/hasil-karya`}>Protect Culture and Children</Link>
										</h4>
										<time dateTime="2020-01-01">14 Mei 2022</time>
									</div>
									*/}
								</div>

								<h3 className="sidebar-title">Kategori</h3>
								<div className="sidebar-item categories">
									<ul>
										{CheckValueArray(store.dataCategoryTags) && store.dataCategoryTags.map((row, i) =>
											renderCategoriesTag({ i, row })
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;