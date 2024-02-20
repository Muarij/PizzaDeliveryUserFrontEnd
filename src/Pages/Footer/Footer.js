import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import './Footer.css';
import facebook from '../../images/facebook.png';
import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';
import ios from '../../images/ios.svg';
import playstore from '../../images/playstore.png';
import fssai from '../../images/fssai.svg';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className='footer' style={{ overflowX: 'hidden' }}>
      <br />
      <div className='row linkRow'>
        <div className='col'>
          <table className='table-responsive'>
            <thead>
              <tr>
                <th><h5>About</h5></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a className='footerLink' onClick={() => navigate('/FAQs')}>FAQ's</a></td>
              </tr>
              <tr>
                <td><a className='footerLink' onClick={() => navigate('/aboutUs')}>About Us</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col'>
          <table>
            <thead>
              <tr>
                <th><h5>Legal</h5></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a className='footerLink' onClick={() => navigate('/Terms-and-condition')}>Terms and Conditions</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col'>
          <table>
            <thead>
              <tr>
                <th><h5>Social Media</h5></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a className='footerLink' href='https://www.facebook.com/' target='_blank'><img src={facebook} alt='Facebook' /></a></td>
                <td><a className='footerLink' href='https://www.youtube.com/' target='_blank'><img src={youtube} alt='Youtube' /></a></td>
                <td><a className='footerLink' href='https://www.instagram.com/' target='_blank'><img src={instagram} alt='Instagram' /></a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div align="center">
        <a href='#' target='_blank'>
          <img src={ios} alt='ios' style={{ height: '50px' }} />&nbsp;&nbsp;
        </a>
        <a href='#' target='_blank'>
          <img src={playstore} alt='Playstore' style={{ height: '50px' }} />
        </a>
      </div>
      <br />
      <div align="center">
        <h6 className='feedbackRow'>
          <motion.button
            className='feedbackBtn'
            whileHover={{ backgroundColor: 'gray', color: 'white' }}
            onClick={() => navigate('/Feedback')} 
          >
            Give Feedback
          </motion.button>
        </h6>
      </div>
      <br />
      <div>
       
        <h6 className='info'>Project Group: 6, CDAC ACTS</h6>
      </div>
      <br />
      <div style={{ marginLeft: '45%', marginBottom: '2%' }}>
       
      </div>
    </div>
  );
}
