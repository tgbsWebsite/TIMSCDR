import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='main-container-footer'>
            <div className='footer-container'>
                <div className='footer-logo-container'>
 

                    <div className='footer-socials'>
                        <a href='https://www.facebook.com/timscdrmumbai.in'><img src='/images/icons/facebook.webp' alt='Facebook - TIMSCDR' /></a>
                        <a href='https://www.instagram.com/timscdr.official'><img src='/images/icons/instagram.webp' alt='Instagram - TIMSCDR' /></a>
                        <a href='https://www.linkedin.com/school/thakurinstituteofmanagementstudiescareerdevelopmentandresearch/posts/?feedView=all'><img src='/images/icons/linkedin.webp' alt='Linkedin - TIMSCDR' /></a>
                        <a href='https://www.youtube.com/@TIMSCDR.mumbai'><img src='/images/icons/youtube.webp' alt='Youtube - TIMSCDR' /></a>
                    </div>
                </div>
                <div className='footer-contact-container'>
                    <div className='footer-header'>Contact Us</div>
                    <div className='footer-phone-container'>
                        <img src='/images/icons/phone.webp' alt='Phone - TIMSCDR' />
                        <div className='footer-phone'>
                            <a href="tel:+919920214191">+91 99202 14191</a>
                            <a href="tel:+919324855822">+91 93248 55822</a>
                            <a href="tel:+022-67308098">+022 2884 0484/91</a>
                        </div>
                    </div>
                    <div className='footer-mail-container'>
                        <img src='/images/icons/email.webp' alt='Email - TIMSCDR' />
                        <a href="mailto:TIMSCDR@thakureducation.org">timscdr@thakureducation.org</a>
                    </div>
                    <div className='footer-location-container'>
                        <img src='/images/icons/location.webp' alt='Location - TIMSCDR' />
                        <a href="https://maps.app.goo.gl/1R6FwbUpLXa4bCbd6">Thakur Institute of Management Studies, Career Development & Research Thakur Educational Campus, Shyamnarayan Thakur Marg, Thakur Village, Kandivali (E), Mumbai – 400 101.</a>
                    </div>
                </div>
                <div className='footer-links-container'>
                    <div className='footer-header'>Quick Links</div>
                    <div className='links-container'>
                        <a href='/awards-recognition'>AICTE Feedback</a>
                        <a href='/feedback'>Women’s Grievance Redressal Committee</a>
                        <a href='https://thakureducation.org'>Class Improvement MCA</a>
                        <a href='/mandatory-disclosure'>University of Mumbai</a>
                        <a href='/aicte-eoa'>Downloads</a>
                        <a href='/sponsorship'>Feedback</a>
                        <a href='/contact-us'>Grievance Redressal Committee</a>
                        <a href='/newsletter'>Mandatory Disclosure</a>
                        <a href='/blog'>RTI</a>
                        <a href='/terms-conditions'>AICTE</a>
                        <a href='/terms-conditions'>Content Policy</a>
                        <a href='/terms-conditions'>Disclaimer</a>

                    </div>
                </div>
            </div>
            <div className='bottom-footer'>
                <div className='bottom-footer-text'>Copyright © 2025 Thakur Institute of Management Studies, Career Development & Research (An Institute under Thakur Educational Trust)</div>
            </div>
        </div>
    )
}
export default Footer;