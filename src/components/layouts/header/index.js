import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UsePathname } from '../../../utility';
import logo from '../../assets/images/logo.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
	useEffect(() => {
		// alert(`Resolusi: ${window.innerWidth}x${window.innerHeight}`);
		// console.info(`Resolusi: ${window.innerWidth}px x ${window.innerHeight}px`);
	});

	return (
		<header id="header" className="header fixed-top">
			<div className="container-fluid container-xl d-flex align-items-center justify-content-between">

				{/* <Link className="logo d-flex align-items-center" to="/">
					<img src={logo} alt="logo_bekawan" />
				</Link> */}

				<HashLink smooth to="/#hero" className="logo d-flex align-items-center">
				<img src={logo} alt="logo_bekawan" />
				</HashLink>

				<nav id="navbar" className="navbar">
					<ul>
						<li>
							{/* <Link className="nav-link scrollto active" to="/about">Tentang Kami</Link> */}
							<HashLink smooth className={(navData) => (navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto')} to="/#hero">
								Beranda
							</HashLink>
						</li>

						

					

						<li>
							{/* <Link className="nav-link scrollto" to="/hasil-karya">Hasil Karya</Link> */}
							{/* <NavLink className={(navData) => (navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto')} to="/hasil-karya">
								Hasil Karya
							</NavLink> */}
							<HashLink smooth className={(navData) => (navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto')} to="/#values">
								Tentang Kami
							</HashLink>
							
						</li>

						<li>
							{/* <Link className="nav-link scrollto active" to="/about">Tentang Kami</Link> */}
							<HashLink smooth className={(navData) => (navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto')} to="/#testimonials">
								Berita
							</HashLink>
						</li>
						<li>
							{/* <Link className="nav-link scrollto" to="/parenting">Parenting</Link> */}
							<HashLink smooth className={(navData) => (navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto')} to="/#about">
								Pendaftaran
							</HashLink>
						</li>

						<li>
							<HashLink smooth className={(navData) => (navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto')} to="/#footer">
								Hubungi Kami
							</HashLink>
						</li>
{/* 
						
						
						<li>
							{/* <Link className="nav-link scrollto" to="/faq">FAQ</Link> */}
							{/* <NavLink className={(navData) => (navData.isActive ? 'nav-link scrollto active' : 'nav-link scrollto')} to="/faq">
								Admin
							</NavLink>
						</li> */}

						
						{/*
						<li>
							<a className="getstarted primary" href="#register">Daftar</a>
						</li>
						*/}

						<li>
							<Link className="getstarted secondary" to="/Error">Admin</Link>
						</li>
					</ul>
					<i id="mobile-nav-toggle" className="bi mobile-nav-toggle bi-list"></i>
				</nav>

			</div>
		</header>
	);
}

// ** Renders Navbar Scroll to Section


export default Header;