import { Link } from 'react-router-dom';
import logoBekawanImg from '../../../../components/assets/images/logo.png';

const Header = () => {
  return (
		<header id="header-signin" className="header-signin fixed-top">
			<div className="container-fluid container-xl d-flex align-items-center justify-content-between">
				<Link className="logo d-flex align-items-center" to="/">
					<img src={logoBekawanImg} alt="logo_bekawan" />
				</Link>
			</div>
		</header>
	);
}

export default Header;