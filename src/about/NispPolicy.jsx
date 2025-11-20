import React, { useState } from "react";

import "../components/table.css"; // existing global table styles
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import "../components/nisp-policy.css";




export default function NispPolicyPage() {
  const [showForm, setShowForm] = useState(false);
  const committeeMembers = [
    { no: 1, name: "Dr. Vinita Gaikwad", designation: "Director, TIMSCDR", position: "Chairperson" },
    { no: 2, name: "Dr. Suresh Shan", designation: "Global Technology Powered India (Author Researcher Speaker Simplify RuralTech.CySec) BFSI NBFC Enterprise Architect Creative Innovator", position: "Member" },
    { no: 3, name: "Mr. Ashish Garde", designation: "Director, MAGIC (Marathwada Accelerator for Growth & Incubation Council)", position: "Member" },
    { no: 4, name: "Mr. Nikunj Jakhotia", designation: "Accenture Alumni TIMSCDR", position: "Member" },
    { no: 5, name: "Mr. Shirshendu Maitra", designation: "Asst. Professor", position: "Member" },
    { no: 6, name: "Ms. Rashmi Vipat", designation: "Asst. Professor", position: "Member" },
    { no: 7, name: "Ms. Shweta Waghmare", designation: "Asst. Professor", position: "Member" }
  ];

  return (

    <>

      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="Education-Policies-container common-section">
        <h1 className="page-title">TIMSCDR Startup Policy</h1>
        <header className="policy-hero">

          <p>
            The ‘National Innovation and Startup Policy (NISP) 2019’ is a guiding framework to envision an educational system oriented towards start-ups and entrepreneurship opportunities for student and faculties. The guidelines provide ways to Indian HEIs for developing entrepreneurial agenda, managing Intellectual Property Rights (IPR) ownership, technology licensing and equity sharing in Startups or enterprises established by faculty and students.</p>



           <p>On the basis of NISP guidelines TIMSCDR constituted a committee to formulate detailed guidelines for various aspects related to innovation, Startup and entrepreneurship management. The Institution Innovation and Startup Committee at TIMSCDR comprising of people associated with delivering incubation and pre-incubation services and facilities, alumni, innovators, entrepreneurs, startup founders etc. The committee consists of the following members:     </p>    

        </header>

        <section>
          <h2>Committee Members</h2>
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Research Committee Position</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map((m) => (
                <tr key={m.no}>
                  <td>{m.no}</td>
                  <td>{m.name}</td>
                  <td>{m.designation}</td>
                  <td>{m.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        {/* Download Button */}
        <a
          href="/pdf/about/Timscdr-startup-policy.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          Download TIMSCDR Startup Policy
        </a>

        {/* Policy Content Sections */}
        <section>
          <ol type="number">
            <li> Strategies and Governance</li>
            <li> Startups Enabling Institutional Infrastructure</li>
            <li> Nurturing Innovations and Startups</li>
            <li> Product Ownership Rights for Technologies Developed at Institute</li>
            <li> Organizational Capacity, Human Resources and Incentives</li>
            <li> Creating Innovation Pipeline and Pathways for Entrepreneurs at Institute Level</li>
            <li> Norms for Faculty Startups</li>
            <li> Pedagogy and Learning Interventions for Entrepreneurship Development</li>
            <li> Collaboration, Co-creation, Business Relationships and Knowledge Exchange</li>
            <li> Entrepreneurial Impact Assessment</li>
          </ol>

          <p>The National Innovation and Startup Policy 2019 for students and faculty of Higher Education Institutions (HEIs) is a guiding framework to enable the institutes to actively engage students, faculties and staff in innovation and entrepreneurship related activities.</p>
        </section>

        <section>
          <h2>Strategies and Governance</h2>
          <ul>
            <li>Entrepreneurship promotion and development should be one of the major dimensions of the HEIs strategy. To facilitate development of an entrepreneurial ecosystem in the organization, specific objectives and associated performance indicators should be defined for assessment.</li>
            <li>Implementation of entrepreneurial vision at the institute should be achieved through mission statements rather than stringent control system. The entrepreneurial agenda should be the responsibility of a senior person at the level of dean/ director/ equivalent position to bring in required commitment and must be well understood by the higher authorities. However, one must understand that promoting entrepreneurship requires a different type of mindset as compared to other academic activities. Therefore, this person should be very carefully chosen from someone who understands the industry and above all business.</li>
            <li>Resource mobilisation plan should be worked out at the institute for supporting pre-incubation, incubation infrastructure and facilities. A sustainable financial strategy should be defined in order to reduce the organizational constraints to work on the entrepreneurial agenda.</li>
            <li>For expediting the decision making, hierarchical barriers should be minimized and individual autonomy and ownership of initiatives should be promoted.</li>
            <li>Importance of innovation and entrepreneurial agenda should be known across the institute and should be promoted and highlighted at institutional programs such as conferences, convocations, workshops, etc.</li>
            <li>Student and faculty startup Policy and action plan should be formulated at university level, which is in line with the current document along with well-defined short-term and long-term goals. Micro action plan should also be developed by the affiliated institutes to accomplish the policy objectives.</li>
            <li>Institute should develop and implement I & E strategy and policy for the entire institute in order to integrate the entrepreneurial activities across various centers, departments, faculties, within the institutes, thus breaking the silos.</li>
            <li>Product to market strategy for startups should be developed by the institute on case to case basis.</li>
            <li>Development of entrepreneurship culture should not be limited within the boundaries of the institution.</li>
          </ul>
          {/* If you have subsections, use <ul> or sub-headings */}
        </section>

        {/* Repeat for all major sections in your policy text */}
        {/* ...Nurturing Innovations and Startups, Product Ownership Rights, etc... */}

        <section>
          <h2>Startups Enabling Institutional Infrastructure</h2>
          <p>Creation of pre-incubation and incubation facilities for nurturing innovations and startups in HEIs institutions should be undertaken. Incubation and Innovation need to be organically interlinked. Without innovation, new enterprises are unlikely to succeed. The goal of the effort should be to link INNOVATION to ENTREPRISES to FINANCIAL SUCCESS.</p>
          <ul>
            <li>All HEIs are advised to create facilities within their institution for supporting pre-incubation (e.g. IICs as per the guidelines by MHRD’s Innovation Cell, EDC, IEDC, New-Gen IEDC, Innovation Cell, Startup Cell, Student Clubs, etc.) and incubation/acceleration by mobilizing resources from internal and external sources.</li>
            <li>This Pre-Incubation/Incubation facility should be accessible 24×7 to students, staff and faculty of all disciplines and departments across the institution.</li>
            <li>Pre-incubation facilities may or may not be a separately registered entity or Special Purpose Vehicle (SPV), but it is recommended that an ‘Incubation cum Technology Commercialization Unit’ (ITCU) should be a separate entity preferably registered under Section-8 of the Company Act 2013 or ‘Society’ registered under Society Registration Act with an independent governance structure.</li>
            <li>This will allow more freedom to incubators in decision-making with less administrative hassles for executing programs related to innovation, IPR, and startups, and will ensure better accountability towards investors supporting the incubation facility.</li>
            <li>HEIs may offer mentoring and other relevant services through pre-incubation/incubation units in return for fees, equity sharing, and/or on a zero payment basis.</li>
            <li>The modalities regarding equity sharing in startups supported through these units will depend upon the nature of services offered by the units.</li>

          </ul>
        </section>
        {/* /*Nurturing Innovations and Startups */}
        <section>
          <h2>Nurturing Innovations and Startups</h2>
          <ul>
            <li>HEIs are expected to establish processes and mechanisms for easy creation and nurturing of start-ups/enterprises by students (UG, PG, Ph.D.), staff (including temporary or project staff), faculty, alumni, and potential start-up applicants even from outside the institutions.</li>
            <li>Students who are under incubation but are pursuing some entrepreneurial ventures while studying should be allowed to use their address in the institute to register their company with due permission from the institution.</li>
            <li>Student entrepreneurs should be allowed to sit for the examination, even if their attendance is less than the minimum permissible percentage, with due permission from the institute.</li>
            <li>HEIs should allow their students to take a semester/year break (or even more depending upon the decision of review committee constituted by the institute) to work on their start ups and re-join academics to complete the course. Student entrepreneurs may earn academic credits for their efforts while creating an enterprise. Institute should set up a review committee for review of start up by students, and based on the progress made, it may consider giving appropriate credits for academics.</li>
            <li>The institute should explore provision of accommodation to the entrepreneurs within the campus for some period of time.</li>
            <li>Allow faculty and staff to take off for a semester / year (or even more depending upon the decision of review committee constituted by the institute) as sabbatical/ unpaid leave/ casual leave/ earned leave for working on startups and come back. Institution should consider allowing use of its resource to faculty/students/staff wishing to establish start up as a fulltime effort. The seniority and other academic benefits during such period may be preserved for such staff or faculty.</li>
            <li>Start a part-time/full-time MS/MBA/PGDM (Innovation, Entrepreneurship, and Venture Development) program where one can get a degree while incubating and nurturing a start-up company. AICTE has already issued guidelines for a similar program.</li>
            <li>Institute will facilitate the startup activities/ technology development by allowing students/ faculty/ staff to use institute infrastructure and facilities, as per the choice of the potential entrepreneur.</li>
            <li>In return of the services and facilities, institute may take 2% to 9.5% equity/ stake in the startup/ company, based on brand used, faculty contribution, support provided and use of institute’s IPR (a limit of 9.5% is suggested so that institute has no legal liability arising out of startup. The institute should normally take much lower equity share, unless its full-time faculty/ staff have substantial shares). Other factors for consideration should be space, infrastructure, mentorship support, seed funds, support for accounts, legal, patents etc.</li>
            <li>The institute should also provide services based on mixture of equity, fee-based and/ or zero payment model. So, a startup may choose to avail only the support, not seed funding, by the institute on rental basis.</li>
            <li>Institute could extend this startup facility to alumni of the institute as well as outsiders.</li>
            <li>Participation in start uprelated activities needs to be considered as a legitimate activity of faculty in addition to teaching, R&D projects, industrial consultancy and management duties and must be considered while evaluating the annual performance of the faculty. Every faculty may be encouraged to mentor at least one startup.</li>
            <li>Product development and commercialization as well as participating and nurturing of startups would now be added to a bucket of faculty-duties and each faculty would choose a mix and match of these activities (in addition to minimum required teaching and guidance) and then respective faculty are evaluated accordingly for their performance and promotion.</li>
            <li>Institutions might also need to update/change/revise performance evaluation policies for faculty and staff as stated above.</li>
            <li>Institute should ensure that at no stage any liability accrue to it because of any activity of any startup.</li>
            <li>Where a student/ faculty startup policy is pre-existing in an institute, then the institute may consider modifying their policy in spirit of these guidelines.</li>
          </ul>
        </section>

        <section>
          <h2>Product Ownership Rights for Technologies Developed at Institute</h2>
          <ul>
            <li>When institute facilities / funds are used substantially or when IPR is developed as a part of curriculum/ academic activity, IPR is to be jointly owned by inventors and the institute.</li>
            <li>On the other hand, if product/ IPR is developed by innovators not using any institute facilities, outside office hours (for staff and faculty) or not as a part of curriculum by student, then product/ IPR will be entirely owned by inventors in proportion to the contributions made by them. In this case, inventors can decide to license the technology to third parties or use the technology the way they deem fit.</li>
            <li>If there is a dispute in ownership, a minimum five membered committee consisting of two faculty members (having developed sufficient IPR and translated to commercialisation), two of the institute’s alumni/ industry experts (having experience in technology commercialisation) and one legal advisor with experience in IPR, will examine the issue after meeting the inventors and help them settle this, hopefully to everybody’s satisfaction. Institute can use alumni/ faculty of other institutes as members, if they cannot find sufficiently experienced alumni / faculty of their own.</li>
            <li>Institute IPR cell or incubation center will only be a coordinator and facilitator for providing services to faculty, staff and students. They will have no say on how the invention is carried out, how it is patented or how it is to be licensed. If institute is to pay for patent filing, they can have a committee which can examine whether the IPR is worth patenting. The committee should consist of faculty who have experience and excelled in technology translation. If inventors are using their own funds or non-institute funds, then they alone should have a say in patenting.</li>
            <li>All institute’s decision-making body with respect to incubation / IPR / technology-licensing will consist of faculty and experts who have excelled in technology translation. Other faculty in the department / institute will have no say, including heads of department, heads of institutes, deans or registrars.</li>
            <li>Interdisciplinary research and publication on startup and entrepreneurship should be promoted by the institutions.</li>
          </ul>

        </section>

        <section>
          <h2>Organizational Capacity, Human Resources and Incentives</h2>
          <ul>
            <li>Institute should recruit staff that have a strong innovation and entrepreneurial/ industrial experience, behaviour and attitude. This will help in fostering the I&E culture.</li>
            <li>Faculty and departments of the institutes have to work in coherence and cross-departmental linkages should be strengthened through shared faculty, cross-faculty teaching and research in order to gain maximum utilization of internal resources and knowledge.</li>
            <li>Periodically some external subject matter experts such as guest lecturers or alumni can be engaged for strategic advice and bringing in skills which are not available internally.</li>
            <li>Faculty and staff should be encouraged to do courses on innovation, entrepreneurship management and venture development.</li>
            <li>In order to attract and retain right people, institute should develop academic and non-academic incentives and reward mechanisms for all staff and stakeholders that actively contribute and support entrepreneurship agenda and activities.</li>
          </ul>

        </section>

        <section>
          <h2>Creating Innovation Pipeline and Pathways for Entrepreneurs at Institute Level</h2>
          <ul>
            <li>To ensure exposure of maximum students to innovation and pre incubation activities at their early stage and to support the pathway from ideation to innovation to market, mechanisms should be devised at institution level.</li>
            <li>The institute should link their start-ups and companies with wider entrepreneurial ecosystem and by providing support to students who show potential, in pre-startup phase. Connecting student entrepreneurs with real life entrepreneurs will help the students in understanding real challenges which may be faced by them while going through the innovation funnel and will increase the probability of success.</li>
            <li>The institute should establish Institution’s Innovation Councils (IICs) as per the guidelines of MHRD’s Innovation Cell and allocate appropriate budget for its activities. IICs should guide institutions in conducting various activities related to innovation, startup and entrepreneurship development. Collective and concentrated efforts should be undertaken to identify, scout, acknowledge, support and reward proven student ideas and innovations and to further facilitate their entrepreneurial journey.</li>
            <li>For strengthening the innovation funnel of the institute, access to financing must be opened for the potential entrepreneurs.</li>
            <li>Institute must develop a ready reckoner of Innovation Tool Kit, which must be kept on the homepage on institute’s website to answer the doubts and queries of the innovators and enlisting the facilities available at the institute.</li>
          </ul>

        </section>
        <section>
          <h2>Norms for Faculty Startups</h2>
          <ul>
            <li>For better coordination of the entrepreneurial activities, norms for faculty to do startups should be created by the institutes. Only those technologies should be taken for faculty startups which originate from within the same institute.</li>
            <li>In case the faculty/ staff holds the executive or managerial position for more than three months in a startup, they will go on sabbatical/ leave without pay/ utilize existing leave.</li>
            <li>Faculty must clearly separate and distinguish on-going research at the institute from the work conducted at the startup/ company.</li>
            <li>In case of selection of a faculty start up by an outside national or international accelerator, a maximum leave (as sabbatical/ existing leave/ unpaid leave/ casual leave/ earned leave) of one semester/ year (or even more depending upon the decision of review committee constituted by the institute) may be permitted to the faculty.</li>
            <li>Faculty must not accept gifts from the startup.</li>
            <li>Faculty must not involve research staff or other staff of institute in activities at the startup and vice-versa.</li>
            <li>Human subject related research in startup should get clearance from ethics committee of the institution.</li>
          </ul>

        </section>

        <section>
          <h2>Pedagogy and Learning Interventions for Entrepreneurship Development</h2>
          <ul>
            <li>Diversified approach should be adopted to produce desirable learning outcomes, which should include cross disciplinary learning using mentors, labs, case studies, games, etc. in place of traditional lecture-based delivery.</li>
            <li>Entrepreneurship education should be imparted to students at curricular/ co-curricular/ extracurricular level through elective/ short term or long-term courses on innovation, entrepreneurship and venture development. Validated learning outcomes should be made available to the students.</li>
            <li>Pedagogical changes need to be done to ensure that maximum number of student projects and innovations are based around real life challenges. Learning interventions developed by the institutes for inculcating entrepreneurial culture should be constantly reviewed and updated.</li>
          </ul>

        </section>
        <section>
          <h2>Collaboration, Co-creation, Business Relationships and Knowledge Exchange</h2>
          <ul>
            <li>Stakeholder engagement should be given prime importance in the entrepreneurial agenda of the institute. Institutes should find potential partners, resource organizations, micro, small and medium sized enterprises (MSMEs), social enterprises, schools, alumni, professional bodies and entrepreneurs to support entrepreneurship and co-design the programs.</li>
            <li>The institute should develop policy and guidelines for forming and managing the relationships with external stakeholders including private industries.</li>
            <li>Knowledge exchange through collaboration and partnership should be made a part of institutional policy and institutes must provide support mechanisms and guidance for creating, managing and coordinating these relationships.</li>
          </ul>

        </section>
        <section>
          <h2>Entrepreneurial Impact Assessment</h2>
          <ul>
            <li>Impact assessment of institute’s entrepreneurial initiatives such as pre-incubation, incubation, entrepreneurship education should be performed regularly using well defined evaluation parameters</li>
            <li>Formulation of strategy and impact assessment should go hand in hand. The information on impact of the activities should be actively used while developing and reviewing the entrepreneurial strategy.</li>
            <li>Impact assessment for measuring the success should be in terms of sustainable social, financial and technological impact in the market. For innovations at pre-commercial stage, development of sustainable enterprise model is critical. COMMERCIAL success is the ONLY measure in long run.</li>
          </ul>

        </section>

        <footer>
          <p>
            Source: <a href="https://www.aicte-india.org/sites/default/files/AICTE%20Brochure_10.09.19.PDF" target="_blank" rel="noopener noreferrer">
              All India Council for Technical Education (AICTE)
            </a>
          </p>
        </footer>
        {/* You can continue with other sections of the policy here */}
      </div>
      <Footer />
    </>
  );
}
