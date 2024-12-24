import React from 'react'
import icon from './car-repair-svgrepo-com.svg'
import './footer.css'
import instagram from'./instagram.png'
import facebook from'./facebook.png'
import twitter from'./twitter.svg'
import telegram from'./telegram.svg'
import { FiMail } from 'react-icons/fi'
import { FcCalendar, FcClock, FcPhone } from 'react-icons/fc'
import apple from './apple.svg'
import android from './android.svg'




function Foot() {
  return (
    <footer>
       

        <div className='connect-me'>
          <div className="icon-div">
          <FiMail className='icon'/><p>carserv@gmail.com</p>
          </div>
          <div className="icon-div">
          <FcPhone className='icon'/><p>carserv@gmail.com</p>
          </div>
          <div className="icon-div">
          <FcCalendar className='icon'/><p>carserv@gmail.com</p>
          </div>
          <div className="icon-div">
          <FcClock className='icon'/><p>carserv@gmail.com</p>
          </div>

        </div>

        <div>
            <div className="footer-logo">
                <h2>CarServe</h2>
                <img src={icon} alt="" />
            </div>
            <p>Complete Repiring Online Solution <br /> For Assist All Models Cars</p>
            <p>Kerala , India</p>
        </div>

       

        

        <div className='mobile-app'>

        <div className='footer-social-media'>
          
          <img src={instagram} alt="" className="social-media-icon" />
          <img src={facebook} alt="" className="social-media-icon" />
          <img src={twitter} alt="" className="social-media-icon" />
          <img src={telegram} alt="" className="social-media-icon" />

        </div>

          <div className='app-div'>
            <span>Apple Store</span>
          <img src={apple} alt="" className="mobile-icon" />
          </div>

          <div className='app-div'>
          <img src={android} alt="" className="mobile-icon" />
          <span>Google Play</span>
          </div>
        </div>
    </footer>
  )
}

export default Foot