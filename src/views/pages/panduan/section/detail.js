import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../../../components/layouts/header';
import TopSecondary from '../../../components/top-secondary';
// import Main from './main';
import Footer from '../../../../components/layouts/footer';
import ReactPlayer from 'react-player/lazy';

import './style_panduan_detail.scss'
import { getDataPanduanDetail } from '../store';
import { useParams } from 'react-router-dom';

const Panduan = () => {
   const dispatch = useDispatch()
   const { panduanId, kategoriPanduan } = useParams()
   const store = useSelector(state => state.panduan)
   const [link, setLink] = useState('')
   const [title, setTitle] = useState('')

   useEffect(() => {
      dispatch(getDataPanduanDetail({ panduan_id: panduanId, kategori: kategoriPanduan }))
   }, [])

   const setActivePanduan = (link, title) => {
      setLink(link)
      setTitle(title)
   }

   useEffect(() => {
      if (store.panduanDetail.length !== 0) {
         setActivePanduan(store.panduanDetail[0]['link'] || '', store.panduanDetail[0]['judul'] || '')
      }
   }, [store])


   const tipepanduan = (data) => {
      if (data === 'public') {
         return 'Publik'
      } else if (data === 'guru') {
         return 'Guru'
      } else if (data === 'siswa') {
         return 'Siswa'
      } else if (data === 'adminsekolah') {
         return 'Sekolah'
      } else if (data === 'superadmin') {
         return 'Superadmin'
      } else if (data === 'kurator') {
         return 'Kurator'
      } else {
         return 'Belum terdefinisi'
      }
   }

   const titleDetailPanduan = () => {
      return (
         <div className='detail-panduan' id=''>
            <div className='row text-center'>
               <div className='col-md-4 offset-md-4'>
                  <div className='row' data-aos="fade-up">
                     <div className='col-md-4'>
                        <img className="title-image" src={store?.selectedData?.icon} alt='icon-panduan-detail' />
                     </div>
                     <div className='col-md-8'>
                        <div className='title-text'>
                           {kategoriPanduan === 'web' ? 'Website' : 'Aplikasi'} {tipepanduan(store?.selectedData?.tipe)}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='container' data-aos="fade-up">
               <div className='row'>
                  <div className='col-md-8 my-5 panduan-detail-player'>
                     <ReactPlayer url={link} controls={true} width="100%" height="505px" />
                     <h3 className='mt-2 title-player'>{title}</h3>
                  </div>
                  <div className='col-md-4 playlist-detail my-5'>
                     <h3>Playlist</h3>
                     {store?.panduanDetail.map((row, i) => {
                        return (
                           <div className='card-panduan-detail' onClick={async () => await setActivePanduan(row?.link, row?.judul)} key={i + 1}>
                              <div className={link === row?.link ? 'card active' : 'card'}>
                                 <div className='card-body'>
                                    <div className='playlist-title'>
                                       {row?.judul}
                                       <div className='description'>
                                          {row?.keterangan}
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </div>
         </div>
      )
   }

   return (
      <Fragment>
         <Header />
         {/* <TopSecondary /> */}
         <section id="hero-second" className="hero-second d-flex align-items-center">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 d-flex flex-column justify-content-center">
                     <h1 data-aos="fade-up">
                        Video Panduan
                     </h1>
                  </div>
               </div>
            </div>
         </section>

         {/* <Main /> */}

         {titleDetailPanduan()}

         <Footer color="#fffcf7" />
      </Fragment>
   );
}

export default Panduan;