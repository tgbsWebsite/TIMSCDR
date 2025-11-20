import React, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";
import "./table-styles.css"; // your existing conv-table css

const growthTable1 = {
    headers: [
        "Year",
        "2001-2002",
        "2002-2003",
        "2003-2004",
        "2004-2005",
        "2005-2006",
        "2006-2007",
        "2007-2008",
        "2008-2009",
        "2009-2010",
        "2010-2011",
    ],
    rows: [
        ["No. of Volumes", 615, 1905, 2160, 2396, 2663, 3003, 3115, 3257, 3773, 5571],
    ],
};

const growthTable2 = {
    headers: [
        "Year",
        "2011-2012",
        "2012-2013",
        "2013-2014",
        "2014-2015",
        "2015-2016",
        "2016-2017",
        "2017-2018",
        "2018-2019",
        "2019-2020",
        "2020-2021",
    ],
    rows: [
        ["No. of Volumes", 7067, 8079, 9153, 10155, 11082, 12082, 12583, 12834, 12960, 13233],
    ],
};

const growthTable3 = {
    headers: ["Year", "2021-2022", "2022-2023", "2023-2024"],
    rows: [["No. of Volumes", 13349, 13461, 13483]],
};

// Titles Added Year Wise
const titlesTable = {
    headers: ["Year", "Titles", "Volumes"],
    rows: [
        ["Jun-2013 – May-2014", 312, 1074],
        ["Jun-2014 – May-2015", 139, 1002],
        ["Jun-2015 – May-2016", 74, 927],
        ["Jun-2016 – May-2017", 151, 1000],
        ["Jun-2017 – May-2018", 111, 501],
        ["Jun-2018 – May-2019", 81, 251],
        ["Jun-2019 – May-2020", 125, 126],
        ["Jul-2020 – Jun-2021", 93, 273],
        ["Jul-2021 – Jun-2022", 25, 116],
        ["Jul-2022 – Jun-2023", 41, 112],
        ["Jul-2023 – Jun-2024", 12, 22],
    ],
};

// Journals Added Year Wise
const journalsTable = {
    headers: ["Year", "Journals", "Magazines"],
    rows: [
        ["2015", "24 (National Printed) + 161 IEEE ASPP & DLINE Online", "3"],
        ["2016", "24 (National Printed) + 169 IEEE ASPP & DLINE Online", "3"],
        ["2017", "24 (National Printed) + 169 IEEE ASPP & DLINE Online", "3"],
        ["2018", "24 (National Printed) + 179 IEEE ASPP & DLINE Online", "3"],
        ["2019", "12 (National Printed) + 12 (International Printed) + 183 IEEE ASPP e-journal Online", "3"],
        ["2020", "12 (National Printed) + 12 (International Printed) + 190 IEEE ASPP e-journal Online", "3"],
        ["2021", "18 (National Printed) + 18 (International Printed) + 190 IEEE ASPP e-journal Online", "3"],
        ["2022", "18 (National Printed) + 18 (International Printed) + 190 IEEE ASPP e-journal Online", "3"],
        ["2023", "18 (National Printed) + 18 (International Printed) + 190 IEEE ASPP e-journal Online", "3"],
        ["2024", "6 (National/International Printed) + 190 IEEE ASPP e-journal Online", "3"],
    ],
};

// List of National / International Journals 2024
const journalList2024 = {
    headers: ["Sr. No.", "Journal Name", "Frequency"],
    rows: [
        [1, "Computer Science and Information Systems", "Q"],
        [2, "IAENG International Journal of Computer Science", "Q"],
        [3, "International Journal of Applied Mathematics and Computer Science", "Q"],
        [4, "International Journal of Computer Info Systems & Industrial Management Apps", "Q"],
        [5, "Journal of Information and Communication Technology (JICT)", "Q"],
        [6, "ICTACT Journal on Soft Computing (IJSC)", "Q"],
    ],
};

// List of National Journals (A.Y. 2023)
const nationalJournals2023 = {
    headers: ["Sr. No.", "National Journal Title", "Frequency"],
    rows: [
        [1, "Current Development in Artificial Intelligence", "Bi-A"],
        [2, "Journal of Advance Research in Computer Engineering", "Q"],
        [3, "Journal of Analysis and Computation UGC approved", "Q"],
        [4, "Journal of Computer Science and Applications", "Bi-A"],
        [5, "Journal of Intelligent Computing & Application", "Bi-A"],
        [6, "Journal of Neural Computing Systems", "Bi-A"],
        [7, "Journal of Software Engineering & Technology", "Bi-A"],
        [8, "Journal of the Business Strategy", "Q"],
        [9, "Journal of Software Project Mgt & Quality Assurance", "Bi-A"],
        [10, "Indian Journal of Advances in Wireless & Mobile Communication (GRP)", "Bi-A"],
        [11, "Indian Journal of Computers & Applications (GRP)", "Q"],
        [12, "Indian Journal of Software Engineering (GRP)", "Q"],
        [13, "Journal of Network Security Computer Networks", "Q"],
        [14, "Journal of Data Mining and Management", "Bi-A"],
        [15, "Journal of Information Technology and Sciences", "Q"],
        [16, "Global Journal of Networks and Applications", "Bi-A"],
        [17, "Journal of Advances in Computational Sciences & IT", "Bi-A"],
        [18, "Journal of Information Technology and Education System", "Bi-A"],
    ],
};

// List of International Journals (A.Y. 2023)
const internationalJournals2023 = {
    headers: ["Sr. No.", "International Journal Title", "Frequency"],
    rows: [
        [1, "Intl Journal of Advance Computational Engineering & Networking", "Q"],
        [2, "Intl Journal of Advanced Computer Engineering", "Bi-A"],
        [3, "Intl Journal of Advances in Comp. Science & Cloud Computing", "Q"],
        [4, "Intl Journal of Business Management & IT", "Q"],
        [5, "Intl Journal of Cloud Computing and DB Management", "Bi-A"],
        [6, "Intl Journal of Comp. Engineering & Software Technology", "Bi-A"],
        [7, "Intl Journal of Data Analysis & Information System", "Bi-A"],
        [8, "Intl Journal of Data Warehousing", "Bi-A"],
        [9, "Intl Journal of Engineering in Computer Science", "Bi-A"],
        [10, "Intl Journal of Future Generation Communication & Networking", "Q"],
        [11, "Intl Journal of Knowledge Mgt & E-Learning", "Bi-A"],
        [12, "Intl Journal of Neural Networks & Applications", "Bi-A"],
        [13, "Intl Journal of Recent Technology and Engineering – Scopus", "Q"],
        [14, "Intl Journal of Research in IT, Management & Engineering", "Q"],
        [15, "Intl Journal of Soft Computing and AI", "Q"],
        [16, "Intl Journal of Software Engineering & Systems", "Q"],
        [17, "Intl Journal of Web Application (IJWA) DLINE", "Bi-A"],
        [18, "Intl Journal of Wireless Communications & Networking", "Bi-A"],
    ],
};

// ========================
// Reusable Table Component
// ========================
const DataTable = ({ data }) => (
    <div className="conv-table-wrapper">
        <table className="conv-table">
            <thead>
                <tr>
                    {data.headers.map((h, idx) => (
                        <th key={idx}>{h}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// ========================
// Main Component
// ========================
export default function LibraryHolding() {
    const [showForm, setShowForm] = useState(false);
    return (

        <>
            <Navbar setShowForm={setShowForm} />
            {showForm && <BrochureForm setShowForm={setShowForm} />}
            <CTAButtons />
            <div className="infra-main">
                <h1 className="heading">TIMSCDR Library Holding</h1>
                <main className="lib-main">
                    <section>
                        <h2 className="infra-heading">Yearwise Growth of Books</h2>
                        <DataTable data={growthTable1} />
                        <DataTable data={growthTable2} />
                        <DataTable data={growthTable3} />
                    </section>

                    <section>
                        <h2 className="infra-heading">Titles Added Year Wise</h2>
                        <DataTable data={titlesTable} />
                    </section>

                    <section>
                        <h2 className="infra-heading">Journals Added Year Wise</h2>
                        <DataTable data={journalsTable} />
                    </section>

                    <section>
                        <h2 className="infra-heading">List of National/International Journals 2024</h2>
                        <DataTable data={journalList2024} />
                    </section>

                    <section>
                        <h2 className="infra-heading">List of National Journals (A.Y. 2023)</h2>
                        <DataTable data={nationalJournals2023} />
                    </section>

                    <section>
                        <h2 className="infra-heading">List of International Journals (A.Y. 2023)</h2>
                        <DataTable data={internationalJournals2023} />
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
