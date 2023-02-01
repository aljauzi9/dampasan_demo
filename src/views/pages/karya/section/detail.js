/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getData, getTags, getDetail, categoryBlogId } from '../store';
import { CONSTANT } from '../../../../config/constantApi';
import { CheckValueArray, FormatDatetime, FormatRawContent } from '../../../../utility';
import Header from '../../../../components/layouts/header';
import TopSecondary from '../../../components/top-secondary';
import Footer from '../../../../components/layouts/footer';
import { ReactComponent as KaryaAllIcon } from '../../../../components/assets/images/KategoriTags01.svg';
import { ReactComponent as KaryaGuruIcon } from '../../../../components/assets/images/KategoriTags02.svg';
import { ReactComponent as KaryaSiswaIcon } from '../../../../components/assets/images/KategoriTags03.svg';

const Detail = () => {
  let { karyaId } = useParams();
	const checkValue = [CONSTANT.CHECK_VALUE_NULL, CONSTANT.CHECK_VALUE_UNDEFINED, CONSTANT.CHECK_VALUE_EMPTY_STRING];
	const dispatch = useDispatch();
	const store = useSelector(state => state.hasilKarya);

	// ** Get data on mount
	useEffect(() => {
		dispatch(getDetail(karyaId));
	}, [dispatch, karyaId]);

	useEffect(() => {
		dispatch(getData({ tag: store.categoryBlogId }));
		dispatch(getTags());
	}, [dispatch, store.categoryBlogId, store.data?.length]);

	// NOTE Render Blog Tag
	const renderTags = ({ i, row }) => {
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
			<li className="d-flex align-items-center" key={i}>
				{styleBadge}
			</li>
		);
	}

	// NOTE Render List Recent Update
	const renderRecentUpdateList = ({ i, row }) => {
		return (
			<div className="post-item clearfix" key={i+1}>
				<img src={`${CONSTANT.API_MANAGEMENT_HOST_S3_IMAGE}/${row?.gambar}`} alt={row?.judul_postingan}/>
				<h4>
					<Link to={`/hasil-karya/${row.blog_id}`} onClick={() => dispatch(categoryBlogId(null))}>
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
			<li key={i+1}>
				<Link to={`/hasil-karya`} onClick={() => dispatch(categoryBlogId(row.tag_id))}>
					{iconCategoriesTag} {row.tag}
				</Link>
			</li>
		);
	}

  return (
		<Fragment>
			<Header />
			<TopSecondary />

			<main>
				<section id="blog" className="blog">
					<div className="container" data-aos="fade-up">
						<div className="row">
							<div className="col-lg-8 entries">
								<article className="entry entry-single">
									<div className="entry-img-detail">
										<img className="img-fluid" src={`${CONSTANT.API_MANAGEMENT_HOST_S3_IMAGE}/${store?.selectedBlog?.gambar}`} alt={store?.selectedBlog?.judul_postingan} />
									</div>

									<h3 className="entry-title-detail">
										{!checkValue.includes(store?.selectedBlog?.judul_postingan) ? store.selectedBlog.judul_postingan : 'Tidak ada judul'}
									</h3>

									<div className="entry-meta-detail">
										<ul>
											<li className="d-flex align-items-center">
												<i>Oleh</i>
												<a className="name" href="#">
													{!checkValue.includes(store?.selectedBlog?.admin?.nama_superadmin) ? store.selectedBlog.admin.nama_superadmin : '-'}
												</a>
											</li>
											<span className="vertical-line"></span>
											<li className="d-flex align-items-center">
												<a className="date" href="#">
													<time dateTime="2020-01-01">{FormatDatetime(store?.selectedBlog?.updated_at, 'optionIdCustom1')}</time>
												</a>
											</li>
										</ul>
									</div>

									<div className="entry-category-detail">
										<ul>
											{CheckValueArray(store.selectedBlog.blog_tag) && store.selectedBlog.blog_tag.map((row, i) =>
												renderTags({ i, row })
											)}
										</ul>
									</div>

									<div className="entry-content-detail">
										<p dangerouslySetInnerHTML={FormatRawContent(store?.selectedBlog?.deskripsi)}></p>
									</div>

									{/* <div className="entry-footer-detail text-end">
										<i className="bi bi-share" />
									</div> */}
								</article>
							</div>
							{/* End blog entries list */}

							<div className="col-lg-4">
								<div className="sidebar">
									<h3 className="sidebar-title">Unggahan Terbaru</h3>
									<div className="sidebar-item recent-posts">
										{CheckValueArray(store.data) && store.data.slice(0, 4).map((row, i) =>
											renderRecentUpdateList({ i, row })
										)}
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
							{/* End blog sidebar */}
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</Fragment>
	);
}

export default Detail;