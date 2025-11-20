import Navbar from "../components/navbar";
import Message from "../components/message";
import CTAButtons from '../components/sticky-button';
// import { Helmet } from 'react-helmet-async';
import BrochureForm from '../components/brochure-form';
import { useState } from 'react';
import Footer from "../components/Footer";

function Director() {

    const infoData = {
        name: 'Prof. Sonu Gupta',
        title: 'Dy. Director',
        message: '<b>“What we want is to see the child in pursuit of knowledge, and not knowledge in pursuit of the child."</b><br><br/>At TIMSCDR, we believe in building foundation on a wide base of knowledge which includes the elements of professional, subjective, practical and spiritual base. We believe that in today’s competitive and fast changing environment, it is time of complete knowledge. In our academic program , we are sworn to excellence. It is a passion shared equally by the institute’s faculty, students, corporate sponsors and alumni. Transcending effectively the ever changing business horizon is the key challenge for today’s IT professionals. It is our consistent endeavor at TIMSCDR to identity the evolving leadership / managerial imperatives of industry and pursue a multidisciplinary approach to harness & channelise the latent potential of our budding IT professionals accordingly.<br><br/>We consistently focus on experiential learning and thoughtful consideration on how to develop business leaders with a sense of commitment to work quality and sense of drive in life that can effectively motivate and coordinate team based approach in challenging business environment. To this end, we ensure a conducive environment where in budding professionals unlock their entire human asset potential and develop their inherent skills and insight to facilitate them to do the leadership roles in their own right.',
        imageUrl: '/images/director.webp'
      };
      const [showForm, setShowForm] = useState(false);
    return(
        <div className="main-section-message">
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons/>
            {/* <Helmet> */}
                <title>Director's Message | Guiding Vision at TGBS Mumbai</title>
                <meta name="description" content="Read the Director's message at TGBS Mumbai. Discover our commitment to academic excellence, leadership, and industry-focused education. Learn more!" />
                <meta name="keywords" content="Thakur Global Business School" />
                <link rel="canonical" href="https://tgbsmumbai.in/director-message" />
            {/* </Helmet> */}
            <Message data={infoData}/>
            <Footer/>
        </div>
    )
}

export default Director;