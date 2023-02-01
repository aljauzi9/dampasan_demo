/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Navigation } from "swiper";
import { getDataHasilKarya } from "../store";
import { CONSTANT } from "../../../../config/constantApi";
import { FormatRawContent } from "../../../../utility";


import sectionAbout6Img from '../../../../components/assets/images/section_parenting.png';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Karya = () => {
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state.main);
  // // console.log("AllStore Hasil Karya", store.dataHasilKarya);

  // // ** Get data on mount
  // useEffect(() => {
  //   dispatch(getDataHasilKarya());
  // }, [dispatch, store.dataHasilKarya.length]);

  // const renderSectionList = ({ i, row }) => {
  //   // console.log(`renderSectionList ${i + 1}`, row);

  //   return (
  //     <SwiperSlide key={i}>
  //       <div className="testimonial-item">
  //         <div className="profile mt-auto">
  //           <img
  //             className="testimonial-img"
  //             src={`${CONSTANT.API_MANAGEMENT_HOST_S3_IMAGE}/${row?.gambar}`}
  //             alt={row?.judul_postingan}
  //           />
  //           <h3>
  //             <Link to={`/hasil-karya/${row.blog_id}`}>
  //               {row?.judul_postingan.length > 35
  //                 ? row?.judul_postingan.slice(0, 35) + "..."
  //                 : row?.judul_postingan}
  //             </Link>
  //           </h3>
  //         </div>

  //         {/* <p className='px-4' style={{textAlign: 'justify'}} dangerouslySetInnerHTML={FormatRawContent(row.deskripsi)}></p> */}
  //         <div style={{ height: "92px", overflow: "hidden" }} className="mb-4">
  //           <p
  //             className="px-4"
  //             style={{ textAlign: "justify" }}
  //             dangerouslySetInnerHTML={FormatRawContent(row.deskripsi)}
  //           ></p>
  //         </div>
  //       </div>
  //     </SwiperSlide>
  //   );
  // };

  return (
    <section id="testimonials" className="testimonials">
      {/* <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>
            Berita <span>Terbaru</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet de alberueruque la lorem ipsum.
          </p>
        </header>

        <div
          className="testimonials-slider swiper mt-5"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={30}
            // slidesPerGroup={3}
            lazy={true}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Lazy, Navigation]}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            style={{
              "--swiper-navigation-color": "#F16521",
            }}
          >
            {Array.isArray(store?.dataHasilKarya) &&
              store.dataHasilKarya.map((row, i) =>
                renderSectionList({ i, row })
              )}
          </Swiper>

          <div className="swiper-pagination" />
        </div>
      </div> */}
 <header className="section-header">
          <h2>
            Berita <span>Terbaru</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet de alberueruque la lorem ipsum.
          </p>
        </header>
<div className='desktop-only row' style={{marginLeft:'200px', gap:'35px',marginTop:'50px'}}>  
<Card style={{ width: '28rem' }}>
<img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" ,marginTop:'10px' ,marginRight:"0rem" }} src={sectionAbout6Img} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/hasil-karya" variant="secondary">Selengkapnya</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '28rem' }}>
    <img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" ,marginTop:'10px' , marginRight:"0rem" }} src={sectionAbout6Img} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/hasil-karya" variant="secondary">Selengkapnya</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '28rem' }}>
    <img className="img-fluid"style={{width:'100rem', marginBottom:"0rem", marginTop:'10px' , marginRight:"0rem" }} src={sectionAbout6Img} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/hasil-karya" variant="secondary">Selengkapnya</Button>
      </Card.Body>
    </Card>

    {/* /hasil-karya */}

				</div>



        {/* mobile */}




        <div className='mobile row container' style={{marginLeft:'0px', gap:'35px',marginTop:'50px'}}>  
<Card style={{ width: '28rem' }}>
<img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" ,marginTop:'10px' ,marginRight:"0rem" }} src={sectionAbout6Img} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/hasil-karya" variant="secondary">Selengkapnya</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '28rem' ,marginTop:'30px' }}>
    <img className="img-fluid"style={{width:'100rem', marginBottom:"0rem" ,marginTop:'10px' , marginRight:"0rem" }} src={sectionAbout6Img} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/hasil-karya" variant="secondary">Selengkapnya</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '28rem' ,marginTop:'30px'}}>
    <img className="img-fluid"style={{width:'100rem', marginBottom:"0rem", marginTop:'10px' , marginRight:"0rem" }} src={sectionAbout6Img} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button href="/hasil-karya" variant="secondary">Selengkapnya</Button>
      </Card.Body>
    </Card>

    {/* /hasil-karya */}

				</div>
    </section>
  );
};

export default Karya;
