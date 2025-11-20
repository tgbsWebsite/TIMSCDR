import Navbar from "../components/navbar";
import Message from "../components/message";
import CTAButtons from '../components/sticky-button';
// import { Helmet } from 'react-helmet-async';
import BrochureForm from '../components/brochure-form';
import { useState } from 'react';
import Footer from "../components/Footer";

function Ceo() {

    const infoData = {
        name: 'Ms. Karishma Singh',
        title: 'CEO',
        message: 'Today, education plays a vital role in the growth and development of the nation. It has always been at the centre from the time immemorial. In the historic period, it had a job of cultivating and nurturing values in young minds. In the modern period the dimension and scope of education has been changed with the outbreak of industrialization and modernization, giving birth to different disciplines in education including Technical education. Technical education has the power and potential to develop the nation in all regards in many fields. A major transformation came during the information age when India established its position with its strong core competence in information technology.<br><br/>Though India is a developing nation, there are many challenges left in the nation such as poverty, unemployment, development of infrastructure at grass root level and many more. To transform India from a developing nation to a developed nation, we need to concentrate on ICT sector which may majority contribute to India’s GDP growth.<br><br/>Understanding the gravity of the situation, we, at TIMSCDR, are committed to provide the quality technical education and to create socially responsible leaders. To serve this purpose TIMSCDR is well equipped with state-of-the-art infrastructure and a team of motivated, experienced and committed faculty led by visionary, devoted and dedicated Director.<br><br/>“Perfection is a process and we are on our way…"',
        imageUrl: '/images/ceo.webp'
    };

    const [showForm, setShowForm] = useState(false);


    return(
        <div className="main-section-message">
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons/>
            {/* <Helmet>
                <title>CEO's Message | Vision & Leadership at TIMSCDR Mumbai</title>
                <meta name="description" content="Read the CEO's message at TGBS Mumbai. Discover our vision, leadership, and commitment to excellence in management education. Learn more!" />
                <meta name="keywords" content="Management Education" />
                <link rel="canonical" href="https://tgbsmumbai.in/ceo-message" />
            </Helmet> */}
            <Message data={infoData}/>
            <Footer/>
        </div>
    )
}

export default Ceo;