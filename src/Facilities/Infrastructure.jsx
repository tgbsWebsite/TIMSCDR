import React, { useState } from "react";
import "./infrastructure.css";

import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function Infrastructure() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <main>
        <section className="section-padding">
          <div className="">
            <div className="intro-text">
              <h1 className="heading">Infrastructure</h1>
              <p>
                TIMSCDR MCA private institute boasts an excellent infrastructure
                that supports the all-round development of its students. Our
                state-of-the-art facilities include well-equipped laboratories,
                two Computer Centres, a comprehensive Library, a Cafeteria, and
                a Hostel. The relevant and the sophisticated hardware and
                software in the Laboratories help the students to sharpen their
                logical and programming skills. The institute is having
                Microsoft Software campus agreement and other Licensee software.
              </p>
            </div>

            {/* Facility Cards */}
            {[
              {
                title: "Computer Labs",
                description:
                  "The Institute has Four state-of-the-art Laboratories and connected in LAN. Computer Lab 1 & Computer Center 2 are i5 machines for a batch size of 30 in each lab are exclusively used for database programming and application programming. It has Oracle 9i & 11g, IBM Rational Suit, C, C++, Java installed in the client server environment. It has Window 7 operating system installed.",
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBiBbC39x32J6WuW5hP2q1JY_w3bsIWFkOg484JzkAQwpP8HsU_e4m-PpNtMySr3xmmXQAMm5wEhmMDwhwuPw-W46fCf9M2mkUE8PRpXlxg5Hc9UK9NuXJok2k_HcJCxfdGZn-z0FuGgo-ofLIWJ8gUlGogHOc7csMsGtCwuu3iCtuM-m6bRuTRRl_AbwOnXUonP5VoqlN83mDRYx3EkYos9GZMMNXN8mgvu4hjetJsmcbE7f_6DpNeBnR1yXcT__by8mRGSVZgt3r3",
                reverse: false,
              },
              {
                title: "Library",
                description: `The Institute Library is enriched with Books, e-Books, e-Journals, Journals (National & International), Magazine & Newspapers. There are 13483 books related to Computers, 4200 e-book, 6 National Journals and International Journals, 190 IEEE ASPP International (e-journals), 1200 CD’s and students project reports catering to the needs of students in research and project areas.

                The Digital Library is fully air-conditioned with 9 Terminals (Dell opti-plex i3 18.5 inches LCD monitor) 4 access points for Laptops and high-speed internet connection (@ 50 Mbps) to accesses e-resources ie. E-Books – EBSCOhost-e-Book ITCore Collection, e-Journals – IEEE International, NPTEL, Swayam, NDL, Koha – OPAC, soft copy of question papers and syllabus.
                
                The Library is fully air-conditioned & well furnished with seating capacity of 100 seats. Journals display rack and tables for study and news paper reading. Library is computerised with Koha software. Book Bank facility is available for all students. Book Exhibition is organized every year to enhance and update Library collection.`,
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbM_XCFmssTznr-J1dRi7biePuuuEolseIFERuCludS9g-8a-dWN_npcp1dMbHpYG-Ii469V7VfKUMUvcr28OiPtLdYw6JBXlqO94ImAGXKEyYPS33uqyMR6P7eHXdr5Q0lCSR5spWiCKLg_nZ346-kDqX_jLXGfZG9MRP6lyOOUGax9gz0fLluwCBiuGbRdBW29cmSbVwLmpwFB7mZnM7Dw2DQHtmoC04P5u5MBYnW333fI17gPm-tKQ9TjwYhJNCE_xQGn_Z63Y",
                reverse: true,
              },
              {
                title: "Class Rooms",
                description:
                  "The Institute has spacious classrooms, which are fully air-conditioned. They possess all necessary teaching aids like LCD, Overhead Projector, Internet Communication and LAN Supported Systems for teaching purposes. Classrooms are well designed so that teaching can take place in peaceful and comfortable conditions.",
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBwxO9VXZ7EUd8xLk4YF3ze4yDCqyQPeW98FtKkIZiY1cqybLvbc9XwD43Bl-oMfCP7hben7u8xLXznd9WbyQxHXzCvx0DNNapigBE2Q3B7WEhc83TQRgZo0s8qQVczeL0huIuwbawGXF0-3L_rEHhj1zYj8iKV_JbAiCDeOHs2hratB9eo9ovjS7rhP2uHGG0P8mMZJ3azdyiKNgE94XOtpZy4BNUH_ywE0V87dtZmeYSmRT1wH3Xn0mI_SQ1qBi1axjrxt_uTLx3s",
                reverse: false,
              },
              {
                title: "Computer Center",
                description:
                  "This Laboratory is used for in-house project development by the students. The computers with Linux and Windows 10 operating system have Visual Studio, Java, Oracle, .Net technology, Crystal Report, J Builder and Macromedia packages installed. The broadband Internet connectivity of 32 Mbps is provided in this laboratory.",
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmFDTYXistgfxrHt8yEzz3ASlHDRgc3aF1a_rZ2vk-jnbSdb7s6V-SFrXzirawNCAT05ZofU2dMM-9beaxJwvBmXu436dxLl-9rA6zcRy3I8TCsc6SRGM7jZLXJKq25s5skWo1FQprN6e_NDjDAmgIOrnjV_d6Y0kyI8Qv0qh6I7FnJu3b5UixL0_LjiZE63sUmMXRFatpRyy6rcfEtAAjPvCafZwfhbb3soaTd5fpZT0L4XGXxom9Fws-us6o1qh_vr_xcW9w9hAF",
                reverse: true,
              },
              {
                title: "Seminar Hall",
                description:
                  "The Institute has spacious Seminar Hall, which is fully air-conditioned. It possess all necessary teaching aids like LCD, Overhead Projector, Internet Communication and LAN Supported Systems for training and teaching purposes. It is well designed so that activities, events, workshops, seminars and teaching can take place in peaceful and comfortable conditions.",
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6MgVPnXbNqzX1W2-LuyzlfdHeIrlu8twAPnkJfLxDXxjemah7uYu_W4y_frGiEugy6-wWPSs5Qzwwjn199oZce4Z4S0ic86x5uoad6nvdwAJm2SmMW8xO-030X-h-LBOB28i1xeccpNQ1xlCFjMiZwxaXzpGC9O-VfHaMroD8mNuLOXSXyFx6RlqA43PEu4xmY09MvedjSM_s4rng7F890M1D0Ygt54oFP3N-Ktp75bDSwnzIH3PKIWMWj6jSFn6qD1sdKdFA2xcu",
                reverse: false,
              },
              {
                title: "Hostel",
                description:
                  "Thakur Institute of Management Studies, Career Development and Research provide the facility of boys hostel. Well furnished, spacious, airy comfortable rooms, water facilities and recreational activities make students feel at home.",
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA46HWIJyCTlZ9-hb7dBvlbyBjkn9W38YE_Mz7pUz1gpgRWAKkeFkICVbuuBLweXUetsd56cxGCnxta_uZWnoZktnkXqcEUCKUty7536ncUk_8iHpskhqUVyjGvj2orP6cuALXkPUn-KF1gGE7TWK55cDTtwSz_S-ZYNkw5EFaT25pD2Y_mWk2ltr4K1wSrudJvNXQiPixTVofAaICqcN4inDhj3K1--QcV2wXLnIXK1Y4g1dUa0nYeJxDqkZKs9ucUUL-YeB79cjm0",
                reverse: true,
              },
              {
                title: "Common Room",
                description:
                  "To recharge the students with energy, there is a gymkhana for them. It includes indoor games varying from chess, carom and table tennis.",
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAK_bnObP7la8MrFpeKLD22fYIxE5aQLXQtaqpy8Hb_iU65pzAm1vjn7W5fk1rfiJrd1vXCvoPvmyRrlU3mXDWKY3B7uViVFmJTrfE5prGQ8C21e9ldrUGjHYURqSrW4yLQ7IfIpUVvvi40XGW4KMUsr3K1jk5EiN3RzNPNuE4kpJMncTigyziFrf3xrM803dKgOpGtR5B0U2EIMbh6i9m-VIGyXfu4vc_0dL2RlN5mJAVEheShGvjtg32ZX66h4k5CGdaxZuNvdNHO",
                reverse: false,
              },
              {
                title: "Sick Room",
                description:
                  "There is a medical room in the campus where the students can take rest, if they are unwell.",
                imageUrl:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCA922NSjBTu7U1CqXeT-mB6k8oLJQPHx9dQxlTA1u9kt35JH3GvLZz_dYkuwXjXuByzpdYsrvNjx1UlH_OziJIruN_tUM_HbRN9o23MhtzyDAQUH_K9NqVOxHkpFfC52cGMmdnDb5C6LWS3iIAoIvppOSNlk1GNgbdv4XIAppl2ugnQOkUqYQSbaix6N8mDe44hYOf8gAHf1Jlra0TtIKavOj2DkMlv61P8vKxv9RDEQVAkDGKpya0TZpjkEQ2u8nqwhK2eWd5Mpmx",
                reverse: true,
              },
            ].map(({ title, description, imageUrl, reverse }, i) => (
              <div
                key={i}
                className={`facility-card ${reverse ? "reverse" : ""}`}
              >
                <div className="facility-text">
                  <h2 className="facility-title">{title}</h2>
                  <p
                    className="facility-description"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {description}
                  </p>
                </div>
                <div className="facility-image">
                  <img src={imageUrl} alt={title} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
