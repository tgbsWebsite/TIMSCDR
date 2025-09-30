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
        message: 'In the present global scenario, with the most favored demographic characteristics and higher growth rates in all macro economic indicators, the world is considered as land of opportunities.<br/><br/>Thakur Global Business School (TGBS) is committed to provide excellent management education with a special focus on ethical and innovative leadership.<br/><br/>TGBS is an institute with world class infrastructure and the best academic resources, is all set to create a new benchmark in management education.<br/><br/>I congratulate you all for daring to dream big and assure you that TGBS will strengthen your dreams to take a leap forward in the glorious future of India, the world and your career.',
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