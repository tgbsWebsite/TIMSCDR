import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='main-container-footer'>
            <div className='footer-container'>
                <div className='footer-logo-container'>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.746050642683!2d72.87145682511212!3d19.206291047869513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x3be7b70c257276b9%3A0x15ee980e87a0bb9f!2sTIMSCDR%20-%20Thakur%20Institute%20of%20Management%20Studies%2C%20Career%20Development%20%26%20Research!5e0!3m2!1sen!2sin!4v1754377663830!5m2!1sen!2sin"
  class="gmap"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

                    <div className='footer-socials'>
                        <a href='https://www.facebook.com/timscdrmumbai.in'><img src='/images/icons/facebook.webp' alt='Facebook - TIMSCDR' /></a>
                        <a href='https://www.instagram.com/timscdr.official'><img src='/images/icons/instagram.webp' alt='Instagram - TIMSCDR' /></a>
                        <a href='https://www.linkedin.com/school/thakurinstituteofmanagementstudiescareerdevelopmentandresearch/posts/?feedView=all'><img src='/images/icons/linkedin.webp' alt='Linkedin - TIMSCDR' /></a>
                        <a href='https://www.youtube.com/@TIMSCDR.mumbai'><img src='/images/icons/youtube.webp' alt='Youtube - TIMSCDR' /></a>
                    </div>
                </div>
                <div className='footer-contact-container'>
                    <h2 className='footer-header'>Contact Us</h2>
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
                    <h2>Quick Links</h2>
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
                <p>Copyright © 2025 Thakur Institute of Management Studies, Career Development & Research (An Institute under Thakur Educational Trust)</p>
            </div>
        </div>
    )
}
export default Footer;