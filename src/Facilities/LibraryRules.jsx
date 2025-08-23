import React, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

// Data object
const libraryStaticData = {
  site: {
    title: "Library Hub",
    footer: "© 2024 Your Institution Name. All Rights Reserved.",
    materialSymbolsHref:
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
  },

  timing: {
    title: "Library Timing",
    note: "Membership required for all services.",
    table: {
      headers: [
        "Category",
        "Reading Hall (Mon to Sat)",
        "Book Issue / Return",
        "Library Circulation",
      ],
      rows: [
        {
          Category: "Students",
          "Reading Hall (Mon to Sat)": "9.00 am to 8.00 pm",
          "Book Issue / Return": "9.00 am to 5.30 pm",
          "Library Circulation": "After Orientation",
        },
        {
          Category: "Staff",
          "Reading Hall (Mon to Sat)": "9.00 am to 8.00 pm",
          "Book Issue / Return": "9.00 am to 5.30 pm",
          "Library Circulation": "After Orientation",
        },
      ],
    },
    imageCard: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfXIA0Ig6omwAQjzL_61C2cgEP1vHHZ15B-vnSjq3wJz6g1lBVhHzjkvnnnYRrnYaDVo6YqsRtUUuUf_1bZnMIyxCsDaNUgnTlpKiaADBf-xeksqMIqEgsyZKQkWoCs5EGImv3UjLMqC3jqzrSMrehr0PwCEoqS8MP_ouuvDF9oYnwLRQXCjQveHhPNsMPQ8kIs1oFFvzHqkMnSPFlGyS-YJ1LdeGDKlGXv2G20fkQ_r01IHYiZevm-s7MRFk7KFz9OncbrS99n4",
      alt: "Bar chart showing library usage statistics from January 2022 to December 2022.",
      title: "Visual Overview: Jan 2022 - Dec 2022",
      desc: "This chart presents a comparative look at library engagement and resource utilization throughout the 2022 calendar year.",
    },
  },

  rules: {
    title: "Library Rules",
    items: [
      { icon: "rule", text: "Each student gets three library cards." },
      { icon: "credit_card", text: "Library card is mandatory." },
      { icon: "no_transfer", text: "Non-transferable cards." },
      { icon: "report", text: "Lost card fine ₹50." },
      { icon: "schedule", text: "15-day issue policy." },
      { icon: "local_library", text: "Book bank: 4–7 books / semester." },
    ],
  },

  instructions: {
    title: "General Instructions",
    items: [
      { icon: "recommend", text: "Recommend books via requisition form." },
      { icon: "event", text: "Annual book exhibitions." },
      { icon: "volume_off", text: "Keep silence — no mobiles." },
      { icon: "no_food", text: "No food or drinks allowed." },
      { icon: "task_alt", text: "Leave books on tables for staff." },
      { icon: "menu_book", text: "Handle materials with care." },
    ],
  },

  // New: Jan–Dec 2023 dataset
  usage2023: {
    title: "Library Usage Statistics – Jan 2023 to Dec 2023",
    table: {
      headers: [
        "Month",
        "Total No. of Faculty Visited Library",
        "Total No. of Students Visited Library",
        "Total No. of Visitors Digital Library",
        "Total Number of Visitors",
        "No of users Digital e-Books",
        "No of users Digital e-Journals",
        "Books Issued Koha",
        "Books Returned Koha",
      ],
      rows: [
        { Month: "Jan-23", "Total No. of Faculty Visited Library": 56, "Total No. of Students Visited Library": 474, "Total No. of Visitors Digital Library": 186, "Total Number of Visitors": 716, "No of users Digital e-Books": 130, "No of users Digital e-Journals": 759, "Books Issued Koha": 416, "Books Returned Koha": 221 },
        { Month: "Feb-23", "Total No. of Faculty Visited Library": 58, "Total No. of Students Visited Library": 343, "Total No. of Visitors Digital Library": 164, "Total Number of Visitors": 565, "No of users Digital e-Books": 72, "No of users Digital e-Journals": 457, "Books Issued Koha": 13, "Books Returned Koha": 60 },
        { Month: "Mar-23", "Total No. of Faculty Visited Library": 56, "Total No. of Students Visited Library": 250, "Total No. of Visitors Digital Library": 99, "Total Number of Visitors": 405, "No of users Digital e-Books": 147, "No of users Digital e-Journals": 392, "Books Issued Koha": 82, "Books Returned Koha": 602 },
        { Month: "Apr-23", "Total No. of Faculty Visited Library": 57, "Total No. of Students Visited Library": 149, "Total No. of Visitors Digital Library": 82, "Total Number of Visitors": 288, "No of users Digital e-Books": 122, "No of users Digital e-Journals": 372, "Books Issued Koha": 285, "Books Returned Koha": 183 },
        { Month: "May-23", "Total No. of Faculty Visited Library": 53, "Total No. of Students Visited Library": 410, "Total No. of Visitors Digital Library": 213, "Total Number of Visitors": 676, "No of users Digital e-Books": 157, "No of users Digital e-Journals": 614, "Books Issued Koha": 121, "Books Returned Koha": 119 },
        { Month: "Jun-23", "Total No. of Faculty Visited Library": 58, "Total No. of Students Visited Library": 254, "Total No. of Visitors Digital Library": 175, "Total Number of Visitors": 487, "No of users Digital e-Books": 153, "No of users Digital e-Journals": 459, "Books Issued Koha": 72, "Books Returned Koha": 66 },
        { Month: "Jul-23", "Total No. of Faculty Visited Library": 75, "Total No. of Students Visited Library": 345, "Total No. of Visitors Digital Library": 186, "Total Number of Visitors": 606, "No of users Digital e-Books": 130, "No of users Digital e-Journals": 266, "Books Issued Koha": 57, "Books Returned Koha": 84 },
        { Month: "Aug-23", "Total No. of Faculty Visited Library": 68, "Total No. of Students Visited Library": 404, "Total No. of Visitors Digital Library": 115, "Total Number of Visitors": 587, "No of users Digital e-Books": 72, "No of users Digital e-Journals": 493, "Books Issued Koha": 11, "Books Returned Koha": 332 },
        { Month: "Sep-23", "Total No. of Faculty Visited Library": 70, "Total No. of Students Visited Library": 526, "Total No. of Visitors Digital Library": 163, "Total Number of Visitors": 759, "No of users Digital e-Books": 147, "No of users Digital e-Journals": 284, "Books Issued Koha": 21, "Books Returned Koha": 72 },
        { Month: "Oct-23", "Total No. of Faculty Visited Library": 70, "Total No. of Students Visited Library": 667, "Total No. of Visitors Digital Library": 310, "Total Number of Visitors": 1047, "No of users Digital e-Books": 122, "No of users Digital e-Journals": 395, "Books Issued Koha": 166, "Books Returned Koha": 59 },
        { Month: "Nov-23", "Total No. of Faculty Visited Library": 64, "Total No. of Students Visited Library": 475, "Total No. of Visitors Digital Library": 271, "Total Number of Visitors": 810, "No of users Digital e-Books": 157, "No of users Digital e-Journals": 768, "Books Issued Koha": 606, "Books Returned Koha": 102 },
        { Month: "Dec-23", "Total No. of Faculty Visited Library": 67, "Total No. of Students Visited Library": 603, "Total No. of Visitors Digital Library": 290, "Total Number of Visitors": 960, "No of users Digital e-Books": 153, "No of users Digital e-Journals": 512, "Books Issued Koha": 74, "Books Returned Koha": 99 },
        { Month: "Total", "Total No. of Faculty Visited Library": 752, "Total No. of Students Visited Library": 4900, "Total No. of Visitors Digital Library": 2254, "Total Number of Visitors": 7906, "No of users Digital e-Books": 1562, "No of users Digital e-Journals": 5771, "Books Issued Koha": 1924, "Books Returned Koha": 1999 },
      ],
    },
    imageCard: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfXIA0Ig6omwAQjzL_61C2cgEP1vHHZ15B-vnSjq3wJz6g1lBVhHzjkvnnnYRrnYaDVo6YqsRtUUuUf_1bZnMIyxCsDaNUgnTlpKiaADBf-xeksqMIqEgsyZKQkWoCs5EGImv3UjLMqC3jqzrSMrehr0PwCEoqS8MP_ouuvDF9oYnwLRQXCjQveHhPNsMPQ8kIs1oFFvzHqkMnSPFlGyS-YJ1LdeGDKlGXv2G20fkQ_r01IHYiZevm-s7MRFk7KFz9OncbrS99n4",
      alt: "Monthly usage bar chart for 2023",
      title: "Usage Chart: 2023",
      desc: "Visitors, e-library users, and circulation trends across 2023.",
    },
  },

  // New: Jan–Dec 2022 dataset
  usage2022: {
    title: "Library Usage Statistics – Jan 2022 to Dec 2022",
    table: {
      headers: [
        "Month",
        "Total No. of Faculty Visited Library",
        "Total No. of Students Visited Library",
        "Total No. of Visitors Digital Library",
        "Total Number of Visitors",
        "No of users Digital e-Books",
        "No of users Digital e-Journals",
        "Books Issued Koha",
        "Books Returned Koha",
      ],
      rows: [
        { Month: "Jan-22", "Total No. of Faculty Visited Library": 46, "Total No. of Students Visited Library": 129, "Total No. of Visitors Digital Library": 10, "Total Number of Visitors": 185, "No of users Digital e-Books": 106, "No of users Digital e-Journals": 385, "Books Issued Koha": 23, "Books Returned Koha": 243 },
        { Month: "Feb-22", "Total No. of Faculty Visited Library": 58, "Total No. of Students Visited Library": 114, "Total No. of Visitors Digital Library": 24, "Total Number of Visitors": 196, "No of users Digital e-Books": 89, "No of users Digital e-Journals": 270, "Books Issued Koha": 598, "Books Returned Koha": 169 },
        { Month: "Mar-22", "Total No. of Faculty Visited Library": 58, "Total No. of Students Visited Library": 77, "Total No. of Visitors Digital Library": 60, "Total Number of Visitors": 195, "No of users Digital e-Books": 118, "No of users Digital e-Journals": 127, "Books Issued Koha": 44, "Books Returned Koha": 42 },
        { Month: "Apr-22", "Total No. of Faculty Visited Library": 57, "Total No. of Students Visited Library": 308, "Total No. of Visitors Digital Library": 25, "Total Number of Visitors": 390, "No of users Digital e-Books": 120, "No of users Digital e-Journals": 140, "Books Issued Koha": 30, "Books Returned Koha": 1000 },
        { Month: "May-22", "Total No. of Faculty Visited Library": 61, "Total No. of Students Visited Library": 274, "Total No. of Visitors Digital Library": 36, "Total Number of Visitors": 371, "No of users Digital e-Books": 113, "No of users Digital e-Journals": 338, "Books Issued Koha": 440, "Books Returned Koha": 75 },
        { Month: "Jun-22", "Total No. of Faculty Visited Library": 51, "Total No. of Students Visited Library": 357, "Total No. of Visitors Digital Library": 44, "Total Number of Visitors": 452, "No of users Digital e-Books": 141, "No of users Digital e-Journals": 86, "Books Issued Koha": 41, "Books Returned Koha": 70 },
        { Month: "Jul-22", "Total No. of Faculty Visited Library": 58, "Total No. of Students Visited Library": 385, "Total No. of Visitors Digital Library": 145, "Total Number of Visitors": 588, "No of users Digital e-Books": 137, "No of users Digital e-Journals": 170, "Books Issued Koha": 19, "Books Returned Koha": 71 },
        { Month: "Aug-22", "Total No. of Faculty Visited Library": 57, "Total No. of Students Visited Library": 300, "Total No. of Visitors Digital Library": 111, "Total Number of Visitors": 468, "No of users Digital e-Books": 111, "No of users Digital e-Journals": 551, "Books Issued Koha": 34, "Books Returned Koha": 607 },
        { Month: "Sep-22", "Total No. of Faculty Visited Library": 57, "Total No. of Students Visited Library": 677, "Total No. of Visitors Digital Library": 184, "Total Number of Visitors": 918, "No of users Digital e-Books": 109, "No of users Digital e-Journals": 499, "Books Issued Koha": 112, "Books Returned Koha": 115 },
        { Month: "Oct-22", "Total No. of Faculty Visited Library": 56, "Total No. of Students Visited Library": 706, "Total No. of Visitors Digital Library": 184, "Total Number of Visitors": 946, "No of users Digital e-Books": 112, "No of users Digital e-Journals": 711, "Books Issued Koha": 109, "Books Returned Koha": 52 },
        { Month: "Nov-22", "Total No. of Faculty Visited Library": 59, "Total No. of Students Visited Library": 465, "Total No. of Visitors Digital Library": 234, "Total Number of Visitors": 758, "No of users Digital e-Books": 129, "No of users Digital e-Journals": 1313, "Books Issued Koha": 27, "Books Returned Koha": 42 },
        { Month: "Dec-22", "Total No. of Faculty Visited Library": 59, "Total No. of Students Visited Library": 369, "Total No. of Visitors Digital Library": 211, "Total Number of Visitors": 1485, "No of users Digital e-Books": 130, "No of users Digital e-Journals": 2333, "Books Issued Koha": 83, "Books Returned Koha": 172 },
        { Month: "Total", "Total No. of Faculty Visited Library": 677, "Total No. of Students Visited Library": 4237, "Total No. of Visitors Digital Library": 1268, "Total Number of Visitors": 6952, "No of users Digital e-Books": 1415, "No of users Digital e-Journals": 6847, "Books Issued Koha": 1560, "Books Returned Koha": 2658 },
      ],
    },
    imageCard: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfXIA0Ig6omwAQjzL_61C2cgEP1vHHZ15B-vnSjq3wJz6g1lBVhHzjkvnnnYRrnYaDVo6YqsRtUUuUf_1bZnMIyxCsDaNUgnTlpKiaADBf-xeksqMIqEgsyZKQkWoCs5EGImv3UjLMqC3jqzrSMrehr0PwCEoqS8MP_ouuvDF9oYnwLRQXCjQveHhPNsMPQ8kIs1oFFvzHqkMnSPFlGyS-YJ1LdeGDKlGXv2G20fkQ_r01IHYiZevm-s7MRFk7KFz9OncbrS99n4",
      alt: "Monthly usage bar chart for 2022",
      title: "Usage Chart: 2022",
      desc: "Visitors, e-library users, and circulation trends across 2022.",
    },
  },

  // Existing: Jul 2023 – Jun 2024 dataset
  monthlyUsage: {
    title: "Monthly Usage: Jul 2023 - Jun 2024",
    table: {
      headers: [
        "Month",
        "Total No. of Faculty Visited Library",
        "Total No. of Students Visited Library",
        "Total No. of Visitors Digital Library",
        "Total Number of Visitors",
        "No of users Digital e-Books",
        "No of users Digital e-Journal",
        "Books Issued Koha",
        "Books Returned Koha",
      ],
      rows: [
        { Month: "Jul-23", "Total No. of Faculty Visited Library": 75, "Total No. of Students Visited Library": 345, "Total No. of Visitors Digital Library": 186, "Total Number of Visitors": 606, "No of users Digital e-Books": 198, "No of users Digital e-Journal": 265, "Books Issued Koha": 57, "Books Returned Koha": 84 },
        { Month: "Aug-23", "Total No. of Faculty Visited Library": 68, "Total No. of Students Visited Library": 404, "Total No. of Visitors Digital Library": 115, "Total Number of Visitors": 587, "No of users Digital e-Books": 180, "No of users Digital e-Journal": 486, "Books Issued Koha": 11, "Books Returned Koha": 332 },
        { Month: "Sep-23", "Total No. of Faculty Visited Library": 70, "Total No. of Students Visited Library": 526, "Total No. of Visitors Digital Library": 163, "Total Number of Visitors": 759, "No of users Digital e-Books": 195, "No of users Digital e-Journal": 276, "Books Issued Koha": 21, "Books Returned Koha": 72 },
        { Month: "Oct-23", "Total No. of Faculty Visited Library": 70, "Total No. of Students Visited Library": 667, "Total No. of Visitors Digital Library": 310, "Total Number of Visitors": 1047, "No of users Digital e-Books": 187, "No of users Digital e-Journal": 386, "Books Issued Koha": 166, "Books Returned Koha": 59 },
        { Month: "Nov-23", "Total No. of Faculty Visited Library": 64, "Total No. of Students Visited Library": 475, "Total No. of Visitors Digital Library": 271, "Total Number of Visitors": 810, "No of users Digital e-Books": 222, "No of users Digital e-Journal": 736, "Books Issued Koha": 606, "Books Returned Koha": 102 },
        { Month: "Dec-23", "Total No. of Faculty Visited Library": 67, "Total No. of Students Visited Library": 603, "Total No. of Visitors Digital Library": 290, "Total Number of Visitors": 960, "No of users Digital e-Books": 210, "No of users Digital e-Journal": 501, "Books Issued Koha": 74, "Books Returned Koha": 99 },
        { Month: "Jan-24", "Total No. of Faculty Visited Library": 67, "Total No. of Students Visited Library": 438, "Total No. of Visitors Digital Library": 188, "Total Number of Visitors": 693, "No of users Digital e-Books": 527, "No of users Digital e-Journal": 340, "Books Issued Koha": 16, "Books Returned Koha": 129 },
        { Month: "Feb-24", "Total No. of Faculty Visited Library": 68, "Total No. of Students Visited Library": 267, "Total No. of Visitors Digital Library": 150, "Total Number of Visitors": 485, "No of users Digital e-Books": 130, "No of users Digital e-Journal": 784, "Books Issued Koha": 43, "Books Returned Koha": 736 },
        { Month: "Mar-24", "Total No. of Faculty Visited Library": 66, "Total No. of Students Visited Library": 357, "Total No. of Visitors Digital Library": 183, "Total Number of Visitors": 606, "No of users Digital e-Books": 906, "No of users Digital e-Journal": 279, "Books Issued Koha": 229, "Books Returned Koha": 218 },
        { Month: "Apr-24", "Total No. of Faculty Visited Library": 65, "Total No. of Students Visited Library": 326, "Total No. of Visitors Digital Library": 156, "Total Number of Visitors": 547, "No of users Digital e-Books": 234, "No of users Digital e-Journal": 557, "Books Issued Koha": 54, "Books Returned Koha": 46 },
        { Month: "May-24", "Total No. of Faculty Visited Library": 66, "Total No. of Students Visited Library": 513, "Total No. of Visitors Digital Library": 270, "Total Number of Visitors": 849, "No of users Digital e-Books": 784, "No of users Digital e-Journal": 248, "Books Issued Koha": 90, "Books Returned Koha": 70 },
        { Month: "Jun-24", "Total No. of Faculty Visited Library": 68, "Total No. of Students Visited Library": 336, "Total No. of Visitors Digital Library": 156, "Total Number of Visitors": 560, "No of users Digital e-Books": 339, "No of users Digital e-Journal": 1896, "Books Issued Koha": 7, "Books Returned Koha": 267 },
        { Month: "Total", "Total No. of Faculty Visited Library": 814, "Total No. of Students Visited Library": 5257, "Total No. of Visitors Digital Library": 2438, "Total Number of Visitors": 8509, "No of users Digital e-Books": 4112, "No of users Digital e-Journal": 6754, "Books Issued Koha": 1374, "Books Returned Koha": 2214 },
      ],
    },
    imageCard: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfXIA0Ig6omwAQjzL_61C2cgEP1vHHZ15B-vnSjq3wJz6g1lBVhHzjkvnnnYRrnYaDVo6YqsRtUUuUf_1bZnMIyxCsDaNUgnTlpKiaADBf-xeksqMIqEgsyZKQkWoCs5EGImv3UjLMqC3jqzrSMrehr0PwCEoqS8MP_ouuvDF9oYnwLRQXCjQveHhPNsMPQ8kIs1oFFvzHqkMnSPFlGyS-YJ1LdeGDKlGXv2G20fkQ_r01IHYiZevm-s7MRFk7KFz9OncbrS99n4",
      alt: "Monthly usage bar chart",
      title: "Usage Chart: 2023",
      desc: "Visitors, e-library users, and circulation trends across the year.",
    },
  },
};

// Table component
function Table({ headers, rows, rowClassName }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => {
              const isTotal = (r.Month || r.Category) === "Total";
              return (
                <tr
                  key={idx}
                  className={isTotal ? rowClassName || "conv-total-row" : undefined}
                >
                  {headers.map((h) => (
                    <td key={h}>{r[h]}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

// Icon list
function IconList({ items }) {
  return (
    <ul className="library-list">
      {items.map((it, idx) => (
        <li key={idx}>
          <span className="material-symbols-outlined">{it.icon}</span>
          {it.text}
        </li>
      ))}
    </ul>
  );
}

// Image card
function ImageCard({ card }) {
  return (
    <div className="library-image-card">
      <div className="library-image">{/* <img src={card.src} alt={card.alt} /> */}</div>
      <div className="library-image-meta">
        <h3 className="library-image-title">{card.title}</h3>
        <p className="library-image-desc">{card.desc}</p>
      </div>
    </div>
  );
}

// Page
function LibraryRules() {
  const d = libraryStaticData;
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />

      <div className="library-container-rules">
        <h1 className="heading">Library Timing and Rules</h1>

        {/* Material Symbols */}
        <link href={d.site.materialSymbolsHref} rel="stylesheet" />

        {/* Library Timing */}
        <section className="library-block">
          <div className="library-section">
            <h2 className="library-heading">{d.timing.title}</h2>
            <Table headers={d.timing.table.headers} rows={d.timing.table.rows} />
            <p className="library-note">
              <b>Note:</b> {d.timing.note}
            </p>
            {/* <ImageCard card={d.timing.imageCard} /> */}
          </div>
        </section>

        {/* Rules + Instructions */}
        <section className="library-section library-grid">
          <div>
            <h2 className="library-heading">{d.rules.title}</h2>
            <IconList items={d.rules.items} />
          </div>
          <div>
            <h2 className="library-heading">{d.instructions.title}</h2>
            <IconList items={d.instructions.items} />
          </div>
        </section>

        {/* Usage 2023 */}
        <section className="library-block">
          <div className="library-section">
            <h2 className="library-heading">{d.usage2023.title}</h2>
            <Table
              headers={d.usage2023.table.headers}
              rows={d.usage2023.table.rows}
              rowClassName="conv-total-row"
            />
            <ImageCard card={d.usage2023.imageCard} />
          </div>
        </section>

        {/* Usage 2022 */}
        <section className="library-block">
          <div className="library-section">
            <h2 className="library-heading">{d.usage2022.title}</h2>
            <Table
              headers={d.usage2022.table.headers}
              rows={d.usage2022.table.rows}
              rowClassName="conv-total-row"
            />
            <ImageCard card={d.usage2022.imageCard} />
          </div>
        </section>

        {/* Monthly Usage (Jul 2023 – Jun 2024) */}
        <section className="library-block">
          <div className="library-section">
            <h2 className="library-heading">{d.monthlyUsage.title}</h2>
            <Table
              headers={d.monthlyUsage.table.headers}
              rows={d.monthlyUsage.table.rows}
              rowClassName="conv-total-row"
            />
            <ImageCard card={d.monthlyUsage.imageCard} />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default LibraryRules;
