import "./infrastructure.css";
import React, { useEffect,  useState } from 'react';
import Footer from '../components/Footer';
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import PageHeader from '../about/PageHeader';


const Infrastructure = () => {
      const [showForm, setShowForm] = useState(false);
  
  return (
      <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
    <div className="inf-page bg-light dark-bg">


      {/* <section className="inf-hero">
        <div className="inf-hero-bg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO3GAfSONUseYXWj3qvIPw_UZZxYABaRoE9US0IkigLUDdzb4aD9W-Sse9tKlSvp6Pk8YC4zK7hx9UUmnhIQVhKCPvC_Sh6LDJE4yp_9xyGf-4dyzTks_ienhU9VsSLkjYPg0sJY1_cwMYEq1sE6R7MwZ63jDJUCXuw8CSt7B6FRQaQxocTRd1xMRqJhaQvtTFV3t_hJLFQW1zOcjKf1NMz2bs-tSAHL6c3gquNGu0LDBA2ryOyk1lDXRrlaxoYtPEVIYG_HNFdSw"
            alt="Modern campus buildings and green spaces"
            className="inf-hero-img"
          />
        </div>
        <div className="inf-hero-content">
          <h1 className="inf-hero-title">
            Empowering Futures Through World-Class Infrastructure
          </h1>
          <p className="inf-hero-sub">
            Explore our state-of-the-art facilities designed to foster
            innovation, learning, and holistic development.
          </p>
          <a href="#" className="inf-btn inf-btn-gradient inf-hero-cta">
            Discover Our Facilities
          </a>
        </div>
      </section> */}

      <main className="inf-container inf-main">
         <PageHeader
                title="Infrastructure"
                crumbs={[
                  { label: 'Home', href: '/' },
                  { label: 'Infrastructure' }, // current page (no href)
                ]}
              />
        

        <div className="inf-sections">
          {/* Computer Labs */}
          <div className="inf-card inf-row">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtwfE3-OWkIPx4r6afhk5Xzndj_F5JjYV4PS7bvRsquWxFFomIK-Ta-1A2oHQQ_hzYXMS2Sc86QNTcyGsuvSWsznZeqQqSTuPczjHIaNsckW5H2VvZ9tgpVzYhRjyqzfTvad1sOEyqcW_5wiI4fAPSNe3sYKfYH0p8zWkvhstgLj6I13Uzdk2IaKajO0UNX98vvNRg3pq6998K0nO8FBi6gp8jsQzEtldP5PXISmKyJ8bwOTGL4Kc0CmtaTYp9J_mweTnWYsCbUHU"
                alt="Computer Labs setup"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Computer Labs</h2>
              <p className="inf-card-text">
                The Institute has Four state-of-the-art Laboratories, connected
                through LAN. Computer Lab 1 &amp; Computer Center 2 are
                provided with latest software for conducting practical's which
                are a part of the curriculum such as Python, R, Java
                Programming. It has Oracle 9i &amp; 11g, IBM Rational Suit, C,
                C++, Java installed in the client server environment. It has
                hardware connections for IoT as well.
              </p>
              <p className="inf-card-text">
                The Institute gives greater emphasis towards an experiential and
                project based learning for the all-round development of its
                students. Our state-of-the-art facilities include well equipped
                laboratories, two Computer Centres, a comprehensive Library, a
                Cafeteria, and a Hostel. The relevant and latest software is
                made available to the students to be well-versed with the
                changes taking place in the current day programming world. The
                Institute is having Microsoft Software campus agreement and
                other Licenses software.
              </p>
            </div>
          </div>

          {/* Library */}
          <div className="inf-card inf-row inf-row-reverse">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu9gz6ONwTM-sOZ5S0K2wUq_lle0TPVRdBP0On8g_RKpNilMWOKFmSC5VJioaN_iN-4Cv7BcX4LaFYFBCUs5AUiOmZoRFN8nyLGXXpRDgGNTatTNU0Ieb6P_WMtq5-NP8wQhtJmNktX3TW_RUx6FTjqIBGXWBCUlCyFcDgPcm557MamErWuzrER4fWCA-EFgQpqGt0VZ4DejXjDOjsH0JpIAvR5rmGVPC9A7-Fc2uwrDpxrLIHLRotTPQnaAJ6LofKWSAyaE_NT9A"
                alt="Well-stocked library shelves"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Library</h2>
              <p className="inf-card-text">
                The Institute Library is enriched with Books, e-Books,
                e-Journals, Journals (National &amp; International), Magazine
                &amp; Newspapers. It has large collection of reference books,
                text books, professional books and general books. The Institute
                subscribes to various e-Journals (like J-Gate, Proquest, IEEE),
                with 1200 CDs and students project reports referring to the
                needs of students in research and project areas.
              </p>
              <p className="inf-card-text">
                The Institute has provided with internet facilities to the
                students with a speed of 19 x 2 (leased line). It has more than
                50 LAN points for Laptops and high speed internet connection (90
                Mbps) to access e-resources in Library. It also has 50 Wi-Fi
                points for Laptop and internet connection for accessing
                e-resources. All areas are under CCTV surveillance.
              </p>
              <p className="inf-card-text">
                The Library is fully air-conditioned &amp; well furnished with
                seating capacity of 100 seats. Journals display rack and book
                rack are provided in library. Separate sections for Text books,
                Reference books, Periodicals and Reading Rooms are provided for
                all students. Its environment is peaceful and calm which will
                help the students to study well.
              </p>
            </div>
          </div>

          {/* Class Rooms */}
          <div className="inf-card inf-row">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8hqHS03Az2ugRGg0KRIeq74SzgaN_xq6zKoA2ZkAz3jOy3WRtcPKea1_isM3LLlE8IouJ2pVX6ubbA3yKZ80AJ6OIFPkOWkKwuAD-74qT31vLDfrhm4cfAiX-GCEAnX0r6ur8s3VX0v5j3V6-ceAVzuoBzTHZHd1f1QbPgeWDrhW3sfAGfjJCqdAh_AcKaFoYS6dOOXndCFKVT4TBcRze77Y97pBECkjr9-8DxszESiFIOAxq0HtVRlu2q7VSDBwuB3h6j4JuKCI"
                alt="Modern classroom with projector"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Class Rooms</h2>
              <p className="inf-card-text">
                The Institute has spacious classrooms, which are fully
                air-conditioned. They possess all necessary teaching aids like
                LCD multimedia projectors, Internet and Intranet connectivity
                and a public address system for lecture purposes. Classrooms are
                well designed so that teaching can take place in peaceful and
                comfortable conditions.
              </p>
            </div>
          </div>

          {/* Computer Center */}
          <div className="inf-card inf-row inf-row-reverse">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7QxGG-IUzkvzeMS5mpU6cnmDf3awPp37higsoU3uwdmwyqSim6ij8L4HZErT0JZiHFyU8aKaVmdYrsnLkTx8leCBGB6hSqfx-BHRRGMBC1w2CfYkImdzSGQeTEbqextjXWwlnXYUaOD_1z-qa3o1Kewh2aGgN6RgCT4kj0RVzYYsKolA6vNeE8vFzMuiCVN7T-Y7cEz7a_OEgD64IWQJFj3k3yNnu8MVoSLRuyM7Np-lnbpQEJmZS6eHUajDM7f3Wo4M9wyOadOs"
                alt="Computer center with multiple workstations"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Computer Center</h2>
              <p className="inf-card-text">
                This Laboratory is used for in-house project development by the
                students. The computers with Linux and Windows Operating System
                installed in the lab and are connected to Internet through a
                leased line. It has various Macromedia packages installed. The
                broadband Internet connectivity of 32 Mbps is provided in this
                laboratory.
              </p>
            </div>
          </div>

          {/* Seminar Hall */}
          <div className="inf-card inf-row">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjd7dVCJghQFNO1R2Mu62dCDuelmRhxPuEPH7U9ItNDXsu0tSm0JTvENSpBI_mWFrD_kyUJiDwKaQzJOs9TnnMfSq8pcrKGsTi3wZoKbotacUXtCsbu8pcqowJrPX9hD_caH5OKbowfX9JtCURI5np_1-cuiNXDT2NjfBHdnnPo7YSF86NACVdn7qHG2JLXq6QLqGWGQAmJ17tze1CZjF_La6qYhjGX66qX0UE5CeWIRaXlFfDuz8uzpQlyth4Z9bDkWZ05yO15ck"
                alt="Spacious seminar hall with seating"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Seminar Hall</h2>
              <p className="inf-card-text">
                The institute has spacious Seminar Hall, which is fully
                air-conditioned. It possess all necessary teaching aids like LCD
                multimedia projectors, Internet and Intranet connectivity and a
                public address system for lecture purposes. It is well designed
                so that various events like seminars, webinars and meetings can
                take place in a peaceful and comfortable conditions.
              </p>
            </div>
          </div>

          {/* Hostel */}
          <div className="inf-card inf-row inf-row-reverse">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYRqzkXdCKicYs2MWWTgVlZ6VF1HP6bUcaqdfE1eu2R_OYgUEtiRNEAWXmZPJvNfid-kqT9p7V5MB0-ch7NW0D2QwXDV3tGbMP5RhPdu2KtoqyHIh8yjjGatn8d9Bpde4D6VZAvh_mTbN4MxeuymMWFK1KwDe6MiqXEu9Z1CcpKLvroLonJiPA4RyHwmrx0XqMFznrtjzg3ZqFNFe3J65qri3yJ7J19w-3eWzFx8m11vsEOospsldreU2X5I9O_09_jZhOdtglGuI"
                alt="Comfortable hostel room"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Hostel</h2>
              <p className="inf-card-text">
                Thakur Institute of Management Studies, Career Development and
                Research provide the facility of boys hostel with well
                furnished, spacious, airy, comfortable rooms, water facilities
                and recreational activities make students feel at home.
              </p>
            </div>
          </div>

          {/* Common Room */}
          <div className="inf-card inf-row">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxXZZiYvPS7_UWl9Al3UKt6M5lREYBHimZsdwI5sxzTBZgQRZ5bks_67HzIBImmyC2eHwvR7rsB6T-zVqrGTGVVpKMCIOL2lKRDLRfXDSPuxw8XFAZWQ16FcMUZ84mbvqAWPkSvNN5X5RZ5jrS8j5-X-1SrvcW4pJMkD0OaDDJiYa2QRlXH8ibkXmHyB7cQbyGtlrzK63csdAgfUOYWDlwxwtvVxkdhleVQ82pXwTCuhot2UHpe-gvaJxw9TQJbLfVF2d5Kmy_sLQ"
                alt="Common room with games table"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Common Room</h2>
              <p className="inf-card-text">
                To recharge the students with energy, there is a common room for
                them. It includes indoor games varying from chess, carom and
                table tennis.
              </p>
            </div>
          </div>

          {/* Sick Room */}
          <div className="inf-card inf-row inf-row-reverse">
            <div className="inf-col">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjbqLg9e7y7rtQh2TovrzIchqZxVsllGDT4TVwryoevJmyO2eVnDABl1F-U85KQUQtZrslI3WekRYQXMmkg2kyoTfdXzGBeMMTll_E8rJ7vKNzvYAuMg6M0RPkgNcvU4_QRea19OdntgQfuukgtxIsCMc2Jq7srDm1VMVBPx_rHxOkC8OBatlMfspjMQ_zWSY-gxvXBh5-fcwr_P6018YRqxUIdCW5bd82Im18foaPjXzfwLYbn25ZukKHo53OQzwPvc0nodCn9vc"
                alt="Medical room with a bed"
                className="inf-card-img"
              />
            </div>
            <div className="inf-col">
              <h2 className="inf-card-title">Sick Room</h2>
              <p className="inf-card-text">
                There is a medical room in the campus where the students can
                take rest, if they are unwell.
              </p>
            </div>
          </div>
        </div>
      </main>


    </div>
        <Footer/>
    </>

  );
};

export default Infrastructure;
