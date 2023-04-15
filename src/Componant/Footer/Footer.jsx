import React from 'react';
import '@popperjs/core';
import "mdb-react-ui-kit";
import './Footer.css'
// import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <div className='footer'>
        <MDBFooter className='text-center'>
          <div className="footer-icon-root">
            <LinkedInIcon fontSize='large' />
            {/* <FacebookIcon fontSize='large'/> */}
            <GitHubIcon fontSize='large' />
            <InstagramIcon fontSize='large' />
            <TwitterIcon fontSize='large' />
          </div>

          <div className='text-center-copy'>
            © 2023 Copyright:
            <a className='text-dark' href='https://mdbootstrap.com/'>
              varsha@0309.com
            </a>
          </div>


        </MDBFooter>
      </div>

    </>
  );
}

