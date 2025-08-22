import React from "react";

// Data object extracted from your JSX
const libraryStaticData = {
  site: {
    title: "Library Hub",
    footer: "© 2024 Your Institution Name. All Rights Reserved.",
    materialSymbolsHref:
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  },
  timing: {
    title: "Library Timing",
    note: "Membership required for all services.",
    table: {
      headers: ["Category", "Reading Hall (Mon to Sat)", "Book Issue / Return", "Library Circulation"],
      rows: [
        {
          Category: "Students",
          "Reading Hall (Mon to Sat)": "9.00 am to 8.00 pm",
          "Book Issue / Return": "9.00 am to 5.30 pm",
          "Library Circulation": "After Orientation"
        },
        {
          Category: "Staff",
          "Reading Hall (Mon to Sat)": "9.00 am to 8.00 pm",
          "Book Issue / Return": "9.00 am to 5.30 pm",
          "Library Circulation": "After Orientation"
        }
      ]
    },
    imageCard: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfXIA0Ig6omwAQjzL_61C2cgEP1vHHZ15B-vnSjq3wJz6g1lBVhHzjkvnnnYRrnYaDVo6YqsRtUUuUf_1bZnMIyxCsDaNUgnTlpKiaADBf-xeksqMIqEgsyZKQkWoCs5EGImv3UjLMqC3jqzrSMrehr0PwCEoqS8MP_ouuvDF9oYnwLRQXCjQveHhPNsMPQ8kIs1oFFvzHqkMnSPFlGyS-YJ1LdeGDKlGXv2G20fkQ_r01IHYiZevm-s7MRFk7KFz9OncbrS99n4",
      alt: "Bar chart showing library usage statistics from January 2022 to December 2022.",
      title: "Visual Overview: Jan 2022 - Dec 2022",
      desc: "This chart presents a comparative look at library engagement and resource utilization throughout the 2022 calendar year."
    }
  },
  rules: {
    title: "Library Rules",
    items: [
      { icon: "rule", text: "Each student gets three library cards." },
      { icon: "credit_card", text: "Library card is mandatory." },
      { icon: "no_transfer", text: "Non-transferable cards." },
      { icon: "report", text: "Lost card fine ₹50." },
      { icon: "schedule", text: "15-day issue policy." },
      { icon: "local_library", text: "Book bank: 4–7 books / semester." }
    ]
  },
  instructions: {
    title: "General Instructions",
    items: [
      { icon: "recommend", text: "Recommend books via requisition form." },
      { icon: "event", text: "Annual book exhibitions." },
      { icon: "volume_off", text: "Keep silence — no mobiles." },
      { icon: "no_food", text: "No food or drinks allowed." },
      { icon: "task_alt", text: "Leave books on tables for staff." },
      { icon: "menu_book", text: "Handle materials with care." }
    ]
  },
  // Replaced with your July 2023 – June 2024 data
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
        "Books Returned Koha"
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
        { Month: "Total", "Total No. of Faculty Visited Library": 814, "Total No. of Students Visited Library": 5257, "Total No. of Visitors Digital Library": 2438, "Total Number of Visitors": 8509, "No of users Digital e-Books": 4112, "No of users Digital e-Journal": 6754, "Books Issued Koha": 1374, "Books Returned Koha": 2214 }
      ]
    },
    imageCard: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfXIA0Ig6omwAQjzL_61C2cgEP1vHHZ15B-vnSjq3wJz6g1lBVhHzjkvnnnYRrnYaDVo6YqsRtUUuUf_1bZnMIyxCsDaNUgnTlpKiaADBf-xeksqMIqEgsyZKQkWoCs5EGImv3UjLMqC3jqzrSMrehr0PwCEoqS8MP_ouuvDF9oYnwLRQXCjQveHhPNsMPQ8kIs1oFFvzHqkMnSPFlGyS-YJ1LdeGDKlGXv2G20fkQ_r01IHYiZevm-s7MRFk7KFz9OncbrS99n4",
      alt: "Monthly usage bar chart",
      title: "Usage Chart: 2023",
      desc: "Visitors, e-library users, and circulation trends across the year."
    }
  }
};

function Table({ headers, rows, rowClassName }) {
  return (
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
              <tr key={idx} className={isTotal ? (rowClassName || "conv-total-row") : undefined}>
                {headers.map((h) => (
                  <td key={h}>{r[h]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

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

function ImageCard({ card }) {
  return (
    <div className="library-image-card">
      <div className="library-image">
        {/* <img src={card.src} alt={card.alt} /> */}
      </div>
      <div className="library-image-meta">
        <h3 className="library-image-title">{card.title}</h3>
        <p className="library-image-desc">{card.desc}</p>
      </div>
    </div>
  );
}

function LibraryRules() {
  const d = libraryStaticData;

  return (
    <div className="library-container">
      {/* Material Symbols (icons) */}
      <link href={d.site.materialSymbolsHref} rel="stylesheet" />

      {/* Library Timing — image below the table */}
      <section className="library-block">
        <div className="library-section">
          <h2 className="library-heading">{d.timing.title}</h2>
          <Table headers={d.timing.table.headers} rows={d.timing.table.rows} />
          <p className="library-note">
            <b>Note:</b> {d.timing.note}
          </p>
          {/* Image moved here to appear below the table */}
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

      {/* Monthly Usage — image below the table */}
      <section className="library-block">
        <div className="library-section">
          <h2 className="library-heading">{d.monthlyUsage.title}</h2>
          <Table
            headers={d.monthlyUsage.table.headers}
            rows={d.monthlyUsage.table.rows}
            rowClassName="conv-total-row"
          />
          {/* Image moved here to appear below the table */}
          <ImageCard card={d.monthlyUsage.imageCard} />
        </div>
      </section>

    </div>
  );
}

export default LibraryRules;
