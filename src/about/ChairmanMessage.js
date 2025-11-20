import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Message from "../components/message";
import CTAButtons from '../components/sticky-button';

import BrochureForm from '../components/brochure-form';
import { useState } from 'react';
import './ChairmanMessage.css';

function Chairman() {
    const [showForm, setShowForm] = useState(false);
    const infoData = {
        name: 'Shri. V K Singh',
        title: 'Chairman',
        message: 'Never before in the history of independent India the need for quality education has been as critical as now when we are witnessing the dawn of globalization in real sense of the term.<br><br>The quality consciousness is seeping through all walks of life, may it be education, training, services or manufacturing activities. Earlier we understand the importance of International quality standards, brighter will be our future.<br><br>With the arrival of multinational enterprises in developing countries, the skilled manpower requirements in the organized industrial sector are being redefined. More stringent standards in technical education and training are being evolved. As a result a new breed of computer professionals, from managers to programmers trained as per the international norms is the immediate need of the industry.<br><br>I am sure that Thakur Institute of Management Studies, Career Development and Research (TIMSCDR) with its marvelous infrastructure and qualified staff will contribute positively towards moulding a new generation of computer professionals worthy of serving the industry in the emerging scenario and participate in the process of nation building.<br><br>I am sure your visit to our campus will be pleasant and fruitful.<br>',
        imageUrl: '/images/chairman.webp'
      };

    return(
        <div className="main-section-message">
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons/>
            {/* <Helmet>
                <title>Chairman's Message | Leadership & Vision at TIMSCDR Mumbai</title>
                <meta name="description" content="Read the Chairman's message at TGBS Mumbai. Explore our vision, leadership, and commitment to shaping future leaders in management. Learn more!" />
                <meta name="keywords" content="Thakur Global Business School" />
                <link rel="canonical" href="https://tgbsmumbai.in/chairman-message" />
            </Helmet> */}
            <Message data={infoData}/>
            <Footer/>
        </div>
    )
}

export default Chairman;