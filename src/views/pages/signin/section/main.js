import signIn01 from '../../../../components/assets/images/SignIn_Enggang.png';
import signIn02 from '../../../../components/assets/images/SignIn_Duyung.png';

const Main = () => {
	const urlSignInGuru = `${process.env.REACT_APP_URL_SIGNIN_GURU}`,
		urlSignInSiswa = `${process.env.REACT_APP_URL_SIGNIN_SISWA}`;

	return (
		<main id="main">
			<section id="signin" className="signin d-flex align-items-center">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="signin-header">
								<h4>Masuk sebagai</h4>
							</div>
						</div>

						{/* <div className="col-lg-6 text-end"> */}
						<div className="col-lg-6">
							<div className="signin-guru">
								<a className="instagram" href={urlSignInGuru} rel="noopener noreferrer">
									<img src={signIn01} className="img-fluid" alt="Signin Guru" />
									<p>GURU</p>
								</a>
							</div>
						</div>

						{/* <div className="col-lg-6 text-start"> */}
						<div className="col-lg-6">
							<div className="signin-siswa">
								<a className="instagram" href={urlSignInSiswa} rel="noopener noreferrer">
									<img src={signIn02} className="img-fluid" alt="Signin Siswa" />
									<p>SISWA</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Main;