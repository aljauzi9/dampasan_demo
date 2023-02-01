import { Link } from "react-router-dom";
import heroImg from '../../../components/assets/images/hero_section_beru_hd.png';


const TopPrimary = () => {
	return (
		<section id="hero" className="hero d-flex align-items-center">
			<div className="container">
				<div className="row">
					<div className="w-100">
						<img data-aos="fade-up-left" className='img-flyng-beru img-fluid' src={heroImg} alt="hero" />
					</div>
					<div className="col-lg-6 d-flex flex-column justify-content-center">
						{/* <h1 data-aos="fade-down">
							bekawan.<span>org</span>
						</h1>
						<h2 data-aos="fade-up" style={{marginTop: '-14px', fontSize: '30px'}}>
							Sahabat Membangun Peradaban
						</h2> */}

						{/* <p data-aos="zoom-in-up" data-aos-delay={400}>
							Memberikan ruang belajar mengajar menjadi lebih sesuai dengan kebutuhan setiap peserta didik di masing - masing sekolah.
							<br />
							<br />
							Selamat Berkarya, mari kita bangun peradaban menjadi semakin lebih baik!
						</p> */}
						<p data-aos="zoom-in-up" data-aot-delay={400}>
							Dalam Kurun waktu satu setengah dekade ini PPMA Dampasan Mengajak Ummat Kembali 
							kepada nilai-nilai ke islaman dan keindonesian ditengah kondisi sosial-politik-ekonomi bangsa ini yang 
							sedang tidak baik-baik saja, 
							dieksploitasi oleh kepentingan elit! 
							Dampasan hadir sebagai lembaga yang tanpa pamrih mendidik sdan menyiapkan kader pemimpin dimasa yang akan 
							datang untuk kepentingan Ummat dan bangsa.
						</p>

						<div data-aos="zoom-in-down" data-aos-delay={600}>
							<div className="text-center text-lg-start">
								{/* <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
									<span>Belajar Sekarang</span>
								</a> */}
								<Link to="https://www.dampasan.siakadponpes.com/login.php" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
									<span>E-RAPOR</span>
								</Link>
								
								<Link to="https://www.dampasan.siakadponpes.com/login.php" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center " style={{marginLeft:'18px'} }>
									<span>SIAKAD</span>
								</Link>
							</div>
						</div>
					</div>

					{/*
					<div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay={200}>
						<img src={heroImg} className="img-fluid" alt="hero_img" />
					</div>
					*/}
				</div>
			</div>
		</section>
	);
}

export default TopPrimary;