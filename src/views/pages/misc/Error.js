// ** React Imports
import { Link } from 'react-router-dom'

// // ** Reactstrap Imports
// import { Button } from 'reactstrap'

// ** Configs
// import themeConfig from '@configs/themeConfig'

// ** Custom Hooks
// import { useSkin } from '@hooks/useSkin'

// ** Styles
// import '@styles/base/pages/page-misc.scss'
import './page-misc.scss'
// import sectionAbout1Img from '../../../../components/assets/images/section_about_01.png';
import sectionAbout1Img from '../../../components/assets/images/sorry.png';
import logo from '../../../components/assets/images/logo.png';

const Error = () => {
  // ** Hooks
  // const { skin } = useSkin()

  // const illustration = skin === 'dark' ? 'sorry.png' : 'sorry.png',
  // const illustration = 'sorry.png',
  //   source = require(`@src/assets/images/pages/${illustration}`).default
  return (
    <div className="misc-wrapper">
      <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
        <div className="ms-2 mt-2">
          <img
            src={logo}
            height="64"
            alt="logo"
          />
        </div>
      </Link>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1" style={{color:'#fff'}}>Halaman Ini Sedang Dalam Proses Konstruksi</h2>
          <p className="mb-2" style={{color:'#fff'}}>
            Mohon maaf atas ketidaknyamanan anda.
            <br />
            {/* <Button
              tag={Link}
              to="/"
              color="primary"
              className="btn-sm-block mb-2 mt-2"
            >
              Kembali
            </Button> */}
            <Link to="/">
              <button style={{marginTop: '20px', backgroundColor: '#aaaaaa', color: '#fff', padding: '6px 18px', border: 'none' , borderRadius: '.358rem'}}>Kembali</button>
            </Link>
          </p>
          <img className="img-fluid" style={{marginLeft:'-18px'}} src={sectionAbout1Img} alt="Not authorized page" />
        </div>
      </div>
    </div>
  )
}
export default Error
