import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player/lazy';
import { getDataVideoInspirasi } from '../store';
// import { CONSTANT } from '../../../../config/constantApi';
// import sectionVideoThumb from '../../../../components/assets/images/section_video_thumb.png';
// import sectionVideoPlay from '../../../../components/assets/images/section_video_play.png';

const Video = () => {
	// const checkValue = [CONSTANT.CHECK_VALUE_NULL, CONSTANT.CHECK_VALUE_UNDEFINED, CONSTANT.CHECK_VALUE_EMPTY_STRING];
	const dispatch = useDispatch();
	const store = useSelector(state => state.main);
	// console.log('AllStore VideoInspirasi', store.dataVideo);

	// ** Get data on mount
	useEffect(() => {
		dispatch(getDataVideoInspirasi());
	}, [dispatch]);

	return (
		<section id="values" className="values">
			<div className="container" data-aos="fade-up">
				<header style={{marginTop:'70px'}} className="section-header">
					{/* <h2>Video Inspirasi</h2> */}
					<h2>Video Inspirasi</h2>
					<p>Lorem pisum dolor sit amet, 
						consectetur adpisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
						</p>
				</header>

				<div className="row justify-content-center">
					<div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay={200}>
						{/* <ReactPlayer url={store?.dataVideo?.video_inspirasi} controls={true} width="100%" height="480px" /> */}
						<ReactPlayer url="https://www.youtube.com/watch?v=IHUo618dL5Y&feature=youtu.be" controls={true} width="100%" height="480px" />
						{/*
						<img className="img-fluid" src={sectionVideoThumb} alt="thumb_video" />
						<img className="img-fluid" src={sectionVideoPlay} alt="play_video" width={230} />
						*/}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Video;