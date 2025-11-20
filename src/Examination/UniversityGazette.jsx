import React, { useEffect, useMemo, useRef, useState } from "react";
import './UniversityGazette.css'
import PageHeader from "../about/PageHeader";
import CTAButton from "../components/sticky-button";
import BrochureForm from "../components/EnquiryForm";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function GazettePage() {
  const [view, setView] = useState("list"); // 'list' | 'timeline'
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState({ year: "", type: "" });
  const searchRef = useRef(null);
  const [showForm, setShowForm] = useState(false);


  const yearOptions = useMemo(() => ["2025","2024","2023", "2022", "2021", "2020", "2019", "2017"], []);
  const typeOptions = useMemo(() => ["Regular", "ATKT"], []);

  // timeline view data: compact labels (no URLs)
  const entriesTimeline = useMemo(
    () => [
      // First Half 2025
      {
        year: "2025",
        type: "Regular",
        title: "First Half 2025 - Regular",
        items: [
          "MCA (SEM-II) Exam - May 2025 (FH-2025)",
          "MCA (SEM-I) Exam - May 2025 (FH-2025)",
          "MCA (SEM-III) Exam - June 2025 (FH-2025)",
          "MCA (SEM-IV) Degree Exam - July 2025 (FH-2025)"
        ]
      },

      // Second Half 2024
      {
        year: "2024",
        type: "Regular",
        title: "Second Half 2024 - Regular",
        items: [
          "MCA (SEM-III) Exam - Jan 2025 (SH-2024)",
          "MCA (SEM-III) Exam - Dec 2024 (SH-2024)"
        ]
      },
      {
        year: "2024",
        type: "KT",
        title: "Second Half 2024 - KT",
        items: [
          "MCA (SEM-II) Exam - Dec 2024 (SH-2024)",
          "MCA (SEM-II) Exam - Dec 2024 (SH-2024) (Alt)"
        ]
      },

      // First Half 2024
      {
        year: "2024",
        type: "Regular",
        title: "First Half 2024 - Regular",
        items: [
          "MCA (SEM-IV)",
          "MCA (SEM-II)",
          "SEM-I Revaluation (FH-2024)",
          "SEM-II Revaluation (FH-2024)",
          "SEM-III Revaluation (FH-2024)"
        ]
      },
      {
        year: "2024",
        type: "KT",
        title: "First Half 2024 - KT",
        items: ["MCA (SEM-I) KT Exam (FH-2024)"]
      },

      // Second Half 2023
      {
        year: "2023",
        type: "Regular",
        title: "Second Half 2023 - Regular",
        items: ["MCA (SEM-I)", "MCA (SEM-II)", "MCA (SEM-III)"]
      },

      // First Half 2023
      {
        year: "2023",
        type: "Regular",
        title: "First Half 2023 - Regular",
        items: ["MCA (SEM I)", "MCA (SEM II)", "MCA (SEM III)", "MCA (SEM IV)"]
      },

      // Second Half 2022
      {
        year: "2022",
        type: "Regular",
        title: "Second Half 2022 - Regular",
        items: [
          "MCA (SEM-III) - Dec 2022",
          "MCA (SEM-I) - Feb 2023",
          "MCA (SEM-II) KT - Feb 2023",
          "MCA (SEM-IV) KT - Dec 2022"
        ]
      },

      // First Half 2022
      {
        year: "2022",
        type: "Regular",
        title: "First Half 2022 - Regular",
        items: [
          "MCA (SEM-II) - Aug 2022",
          "MCA (SEM-VI, 3 Years) - July 2022",
          "MCA (SEM-IV) - July 2022"
        ]
      },
      {
        year: "2022",
        type: "KT",
        title: "First Half 2022 - KT",
        items: ["MCA (SEM-III) KT", "MCA (SEM-I) KT"]
      },

      // Jan–Apr 2022 (SH-2021)
      {
        year: "2021",
        type: "Regular",
        title: "Jan–Apr 2022 (SH-2021) - Regular",
        items: [
          "January 2022 Examination (SH-2021)",
          "SEM-III (SH-2021) (Updated) - Jan 2022",
          "SEM-V (SH-2021) - Dec 2021"
        ]
      },

      // Jun–Sep 2021
      {
        year: "2021",
        type: "Regular",
        title: "Jun–Sep 2021 - Regular",
        items: [
          "SEM-II (FH-2021) (Updated) - Jan 2022",
          "SEM-VI (3 Years) - June 2021",
          "SEM-IV (3 Years) - June 2021"
        ]
      },
      {
        year: "2021",
        type: "KT",
        title: "Jun–Sep 2021 - KT",
        items: [
          "SEM-III - June 2021",
          "SEM-I (2 Years) - June 2021"
        ]
      },

      // Jan–Apr 2021
      {
        year: "2021",
        type: "Regular",
        title: "Jan–Apr 2021 - Regular",
        items: [
          "Bridge Course (SH-2020) - Jan 2021",
          "SEM-I (2 Years) - Apr 2021",
          "SEM-III (Choice Base) - Jan 2021",
          "SEM-V (Choice Base) - Jan 2021"
        ]
      },
      {
        year: "2021",
        type: "KT",
        title: "Jan–Apr 2021 - KT",
        items: ["SEM-I KT CBGS to Choice", "SEM-I KT - Jan 2021", "SEM-II KT - Jan 2021"]
      },

      // Oct 2020
      {
        year: "2020",
        type: "Regular",
        title: "October 2020 - Regular",
        items: [
          "SEM-IV (Choice) (Updated)",
          "SEM-II (Choice Base) (Updated)",
          "SEM-VI (Choice Based)"
        ]
      },
      {
        year: "2020",
        type: "Special KT",
        title: "September 2020 - Special KT",
        items: [
          "SEM-I Choice Base - Special KT",
          "SEM-III Choice Base - Final Backlog"
        ]
      },

      // Nov/Dec 2019
      {
        year: "2019",
        type: "Regular",
        title: "Nov/Dec 2019",
        items: [
          "SEM-I (Choice Base) Revaluation - Dec 2019",
          "SEM-I (Choice Base) (Updated) - Dec 2019",
          "SEM-II (Choice Base) Revaluation - Dec 2019",
          "SEM-II (Choice Base) - Nov 2019",
          "SEM-III (Choice Base) Revaluation - Dec 2019",
          "M.C.A. (SEM-III) CBGS to Choice - Dec 2019",
          "SEM-IV (Choice) - Nov 2019",
          "SEM-V (Choice) Revaluation - Dec 2019",
          "SEM-V (Choice) - Dec 2019"
        ]
      },

      // May/June 2019
      {
        year: "2019",
        type: "Regular",
        title: "May/June 2019",
        items: [
          "SEM-I (Choice) - May 2019",
          "SEM-II (Choice) - May 2019",
          "SEM-III (Choice) - May 2019",
          "SEM-IV (Choice) - May 2019",
          "SEM-V (Choice) - May 2019",
          "SEM-VI (Choice Based) - July 2019",
          "SEM-I (Grade) - May 2019",
          "SEM-III (Grade) - May 2019",
          "SEM-V (Grade) - May 2019",
          "Revaluation sets (SEM I–IV)"
        ]
      },

      // Nov/Dec 2018
      {
        year: "2018",
        type: "Regular",
        title: "Nov/Dec 2018 - Revaluation",
        items: [
          "SEM-I (Choice Base) Re-Updated - Dec 2018",
          "SEM-II (Choice) Revaluation - Nov 2018",
          "SEM-III (Choice) Revaluation - Nov 2018",
          "SEM-V (Choice) Revaluation - Nov 2018",
          "SEM-I (Grade) Revaluation - Nov 2018"
        ]
      },

      // May/July 2018
      {
        year: "2018",
        type: "Regular",
        title: "May/July 2018",
        items: [
          "SEM-IV (Grade) Revaluation - May 2018",
          "SEM-IV (Choice Base) Revaluation - May 2018",
          "SEM-IV (Choice) Revaluation Result - May 2018",
          "SEM-I (Choice Base) Re-Updated Revaluation - May 2018",
          "SEM-II (Choice Base) Revaluation - May 2018",
          "SEM-III (Grade) Revaluation - May 2018",
          "SEM-V (Grade) Revaluation - May 2018",
          "SEM-I (Choice Base) Re-Updated - May 2018",
          "SEM-IV (Choice) - May 2018",
          "SEM-III (Choice Base) (Updated) - May 2018",
          "Sem. III, IV & V (Revised) Gazette - May 2018",
          "SEM-II (Choice Base) - May 2018",
          "SEM-VI (CBGS) - July 2018",
          "SEM-I (Grade) - May 2018",
          "SEM-II (Grade) - May 2018",
          "SEM-III (Grade) - May 2018",
          "SEM-IV (Grade) - May 2018",
          "SEM-V (Grade) - May 2018"
        ]
      },

      // Nov/Dec 2017
      {
        year: "2017",
        type: "Regular",
        title: "Nov/Dec 2017 - Regular/Revaluation",
        items: [
          "SEM-I (Choice Base) Re-Updated - Dec 2017 (Revaluation)",
          "SEM-III (Choice Base) - Nov 2017 (Revaluation)",
          "SEM-V (Grade) - Nov 2017 (Revaluation)",
          "SEM-IV (Grade) - Nov 2017 (Revaluation)",
          "SEM-III (Grade) - Nov 2017 (Revaluation)",
          "SEM-II (Grade) - Nov 2017 (Revaluation)",
          "SEM-I (Grade) - Nov 2017 (Revaluation)",
          "SEM-III (Choice Base) (Updated) - Nov 2017",
          "SEM-II (Choice Base) - Nov 2017",
          "SEM-I (Choice Base) (Updated) - Dec 2017",
          "SEM-V (Grade) - Nov 2017",
          "SEM-IV (Grade) - Nov 2017",
          "SEM-III (Grade) - Nov 2017",
          "SEM-II (Grade) - Nov 2017",
          "SEM-I (Grade) - Nov 2017"
        ]
      },

      // May 2017
      {
        year: "2017",
        type: "Regular",
        title: "May 2017 - Regular/Revaluation",
        items: [
          "SEM-II (Choice Base) Revaluation - May 2017",
          "SEM-I (Choice Base) Revaluation - May 2017",
          "SEM-V (Grade) Revaluation - May 2017",
          "SEM-IV (Grade) Revaluation - May 2017",
          "SEM-III (Grade) Revaluation - May 2017",
          "SEM-II (Grade) Revaluation - May 2017",
          "SEM-I (Grade) Revaluation - May 2017",
          "SEM-II (Choice Base) - May 2017",
          "SEM-I (Choice Base) - May 2017",
          "SEM-VI (Grade) - May 2017",
          "SEM-V (Grade) - May 2017",
          "SEM-IV (Grade) - May 2017",
          "SEM-III (Grade) - May 2017",
          "SEM-II (Grade) - May 2017",
          "SEM-I (Grade) - May 2017"
        ]
      },

      // Nov/Dec 2016
      {
        year: "2016",
        type: "Regular",
        title: "Nov/Dec 2016",
        items: [
          "SEM-II (Grade)",
          "SEM-III (Grade)",
          "SEM-I (Grade)",
          "SEM-I (Choice Base)",
          "SEM-IV (Grade)",
          "SEM-V (Grade)"
        ]
      }
    ],
    []
  );

  // list view data: full text with URLs
  const entriesList = useMemo(
    () => [
      // First Half 2025 - Regular
      {
        year: "2025",
        type: "Regular",
        title: "First Half 2025 - Regular",
        items: [
          { text: "Gazette Copy of  MASTER OF COMPUTER APPLICATIONS (SEM-II)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN MAY 2025 (FH-2025)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/08/COL715-7.pdf" },
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-I)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN MAY 2025 (FH-2025)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/08/COL715-4.pdf" },
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-III)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN JUNE 2025 (FH-2025)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/08/COL715-5.pdf" },
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM.IV)(CHOICE BASED)(TWO YEARS) DEGREE EXAMINATION HELD IN JULY 2025 (F.H.2025)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/08/COLLB715.pdf" }
        ]
      },

      // Second Half 2024 - Regular
      {
        year: "2024",
        type: "Regular",
        title: "Second Half 2024 - Regular",
        items: [
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-III)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN JANUARY 2025 (SH-2024)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/COL715-2.pdf" },
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-III)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN DECEMBER 2024 (SH-2024)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/COLL715.pdf" }
        ]
      },
      // Second Half 2024 - KT
      {
        year: "2024",
        type: "KT",
        title: "Second Half 2024 - KT",
        items: [
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-II)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN DECEMBER 2024 (SH-2024)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/COL715-3.pdf" },
          { text: "Gazette Copy of THE MASTER OF COMPUTER APPLICATIONS (SEM-II)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN DECEMBER 2024 (SH-2024)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2025/03/COL715.pdf" }
        ]
      },

      // First Half 2024 - Regular
      {
        year: "2024",
        type: "Regular",
        title: "First Half 2024 - Regular",
        items: [
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-IV)(CHOICE BASED)(2 YEARS COURSE)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/SEM-IV-THAKUR-715-FH-2024.pdf" },
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-II)(CHOICE BASED)(2 YEARS COURSE)", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/MASTER-OF-COMPUTER-APPLICATIONS-SEM-IICHOICE-BASED2-YEARS-COURSE-EXAMINATION-HELD-IN-JUNE-2024-FH-2024.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.I Revaluation (CHOICE BASE) (2 Years) EXAM", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/Sem.-I-Revaluation-result-of-1st-half-2024.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.II Revaluation (CHOICE BASE) (2 Years) EXAM", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/Sem.-II-Revaluation-result-of-1st-half-2024.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.III Revaluation (CHOICE BASE) (2 Years) EXAM", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/Sem.-III-Revaluation-result-of-1st-half-2024.pdf" }
        ]
      },
      // First Half 2024 - KT
      {
        year: "2024",
        type: "KT",
        title: "First Half 2024 - KT",
        items: [
          { text: "Gazette Copy of MASTER OF COMPUTER APPLICATIONS (SEM-I) KT Exam", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/12/SEM-I-KT-FH-2024-UPDATED.pdf" }
        ]
      },

      // Second Half 2023 - Regular
      {
        year: "2023",
        type: "Regular",
        title: "Second Half 2023 - Regular",
        items: [
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.I)(CHOICE BASE) (2 Years) EXAM", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/06/CA715.COL_.docx-2.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.II)(CHOICE BASE) (2 Years) EXAM", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/06/CA715.COL_.docx.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.III)(CHOICE BASE) (2 Years) EXAM", url: "https://www.timscdrmumbai.in/wp-content/uploads/2024/06/CA715.COL_.docx-1.pdf" }
        ]
      },

      // First Half 2023 - Regular
      {
        year: "2023",
        type: "Regular",
        title: "First Half 2023 - Regular",
        items: [
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.I)(CHOICE BASE) (2 Years) EXAM", url: "https://timscdrmumbai.in/wp-content/uploads/2024/03/SEM-I-FH-2023.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.II)(CHOICE BASE) (2 Years) EXAM", url: "https://timscdrmumbai.in/wp-content/uploads/2024/03/SEM-II-FH-2023.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.III)(CHOICE BASE) (2 Years) EXAM", url: "https://timscdrmumbai.in/wp-content/uploads/2024/03/SEM-III-FH-2023.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.IV)(CHOICE BASE) (2 Years) EXAM", url: "https://timscdrmumbai.in/wp-content/uploads/2024/03/SEM-IV.pdf" }
        ]
      },

      // Second Half 2022 - Regular
      {
        year: "2022",
        type: "Regular",
        title: "Second Half 2022 - Regular",
        items: [
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.III(CHOICE BASE) (2 Years) EXAM-Dec 2022", url: "https://timscdrmumbai.in/wp-content/uploads/2023/05/CAC715.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.I)(CHOICE BASE) (2 Years) EXAM Feb – 2023", url: "https://timscdrmumbai.in/wp-content/uploads/2023/11/SEM-I.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.II)(CHOICE BASE) (2 Years) KT EXAM Feb – 2023", url: "https://timscdrmumbai.in/wp-content/uploads/2023/11/SEM-II-KT.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.IV)(CHOICE BASE) (2 Years) KT EXAM Dec – 2022", url: "https://timscdrmumbai.in/wp-content/uploads/2023/11/SEM-IV-KT.pdf" }
        ]
      },

      // First Half 2022 - Regular
      {
        year: "2022",
        type: "Regular",
        title: "First Half 2022 - Regular",
        items: [
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.II)(CHOICE BASE) (2 Years) EXAM-Aug 2022", url: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem.-II-Updated.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.VI)(CHOICE BASE) (3 Years) EXAM – July 2022", url: "https://timscdrmumbai.in/wp-content/uploads/2022/12/SEM-VI.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.IV)(CHOICE BASE) (2 Years) EXAM – July 2022", url: "https://timscdrmumbai.in/wp-content/uploads/2022/12/SEM-IV.pdf" }
        ]
      },
      // First Half 2022 - KT
      {
        year: "2022",
        type: "KT",
        title: "First Half 2022 - KT",
        items: [
          { text: "Sem – III KT MCA (2 Years)", url: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem-3-KT-Exam.pdf" },
          { text: "Sem – I KT MCA (2 Years)", url: "https://timscdrmumbai.in/wp-content/uploads/2023/03/Sem-1-KT-Exam.pdf" }
        ]
      },

      // Jan 2022 – Apr 2022 (SH-2021) - Regular
      {
        year: "2021",
        type: "Regular",
        title: "January 2022 – April 2022 (SH-2021) - Regular",
        items: [
          { text: "Gazette Copy of January 2022 Examination (Second half 2021)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/06/CA715.docx.pdf" },
          { text: "(UPDATED) Gazette Copy FOR THE MASTER OF COMPUTER APPLICATIONS (SEM-III)(CHOICE BASED)(2 YEARS COURSE)(UPDATED) EXAMINATION HELD IN JANUARY 2022 (SH-2021)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/04/CA715.COL_.docx-1.pdf" },
          { text: "Gazette Copy FOR THE MASTER IN COMPUTER APPLICATION (SEM.V) (CHOICE)(S.H.2021) EXAMINATION – DECEMBER 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2022/03/CACB715.COL_.docx-3.pdf" }
        ]
      },

      // Jun 2021 – Sep 2021 - Regular
      {
        year: "2021",
        type: "Regular",
        title: "June 2021 – September 2021 - Regular",
        items: [
          { text: "Gazette Copy FOR THE MASTER OF COMPUTER APPLICATIONS (SEM-II)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN JANUARY 2022 (FH-2021)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/11/Sem.-II-Updated.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.VI)(CHOICE BASE) (3 Years) EXAMINATION – June 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/10/M.C.A.-Sem.-VI-Choice-base-gazette-of-June-2021-examination.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.IV)(CHOICE BASE) (3 Years) EXAMINATION – June 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/10/CACB715.COL_.docx.pdf" }
        ]
      },
      // Jun 2021 – Sep 2021 - KT
      {
        year: "2021",
        type: "KT",
        title: "June 2021 – September 2021 - KT",
        items: [
          { text: "Gazette Copy of THE MASTER OF COMPUTER APPLICATIONS (SEM-III)(CHOICE BASED)EXAMINATION -JUNE 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/11/CACB715.COL_.docx-2.pdf" },
          { text: "Gazette Copy of THE MASTER OF COMPUTER APPLICATIONS (SEM-I)(CHOICE BASED)(2 YEARS COURSE) EXAMINATION HELD IN JUNE 2021 (FH-2021)", url: "https://timscdrmumbai.in/wp-content/uploads/2021/11/CA715.COL_.docx.pdf" }
        ]
      },

      // Jan 2021 – Apr 2021 - Regular
      {
        year: "2021",
        type: "Regular",
        title: "January 2021 – April 2021 - Regular",
        items: [
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (BRIDGE COURSE)(S.H.2020) EXAMINATION – JANUARY 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/11/CAC715.COL_.docx.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.I) (2 Years) EXAMINATION – April 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/09/Sem-I-2yr-SH2020.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE BASE) EXAMINATION – JANUARY 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/05/Gazette-Copy-of-THE-MASTER-IN-COMPUTER-APPLICATION-SEM.III-CHOICE-BASE-EXAMINATION-JANUARY-2021.pdf" },
          { text: "Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.V) (CHOICE BASE) EXAMINATION – JANUARY 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/06/SEM-V-Regular-JAN-2021.pdf" }
        ]
      },
      // Jan 2021 – Apr 2021 - KT
      {
        year: "2021",
        type: "KT",
        title: "January 2021 – April 2021 - KT",
        items: [
          { text: "SEM I KT CBGS TO CHOICE", url: "https://timscdrmumbai.in/wp-content/uploads/2021/06/SEM-I-KT-CBGS-TO-CHOICE.pdf" },
          { text: "SEM I KT – JANUARY 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/06/SEM-I-KT.pdf" },
          { text: "SEM II KT – JANUARY 2021", url: "https://timscdrmumbai.in/wp-content/uploads/2021/06/SEM-II-KT.pdf" }
        ]
      },

      // Oct 2020 - Regular
      {
        year: "2020",
        type: "Regular",
        title: "October 2020 - Regular",
        items: [
          { text: "(UPDATED) Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.IV) (CHOICE) EXAMINATION – OCTOBER 2020", url: "https://timscdrmumbai.in/wp-content/uploads/2021/01/UPDATED-Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.IV-CHOICE-EXAMINATION-OCTOBER-2020.pdf" },
          { text: "(UPDATED) Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE BASE) EXAMINATION – OCTOBER 2020.", url: "https://timscdrmumbai.in/wp-content/uploads/2021/01/UPDATED-Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.II-CHOICE-BASE-EXAMINATION-OCTOBER-2020.pdf" },
          { text: "Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.VI) (CHOICE BASED) EXAMINATION – OCTOBER 2020", url: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.VI-CHOICE-BASED-EXAMINATION-OCTOBER-2020.pdf" }
        ]
      },
      // Sep 2020 - Special KT
      {
        year: "2020",
        type: "Special KT",
        title: "September 2020 - Special KT",
        items: [
          { text: "Gazette Copy of MCA (SEM.I) (CHOICE BASE)EXAMINATION – Special KT", url: "https://timscdrmumbai.in/wp-content/uploads/2021/01/Gazette-Copy-of-MCA-SEM.I-CHOICE-BASEEXAMINATION-Special-KT.pdf" },
          { text: "Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE BASE)  EXAMINATION – SEPTEMBER 2020 Final Backlock", url: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.III-CHOICE-BASE-EXAMINATION-SEPTEMBER-2020.pdf" }
        ]
      },

      // Nov/Dec 2019
      {
        year: "2019",
        type: "Regular",
        title: "November/December 2019",
        items: [
          { text: "Gazette Copy of OFFICE REGISTER FOR THE MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE) (REVALUATION) EXAMINATION – DECEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/11/Gazette-Copy-of-OFFICE-REGISTER-FOR-THE-MASTER-IN-COMPUTER-APPLICATION-SEM.I-CHOICE-BASE-REVALUATION-EXAMINATION-DECEMBER-2019.pdf" },
          { text: "(UPDATED) Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE)(UPDATED) EXAMINATION – DECEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/UPDATED-Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.I-CHOICE-BASEUPDATED-EXAMINATION-DECEMBER-2019.pdf" },
          { text: "REVALUATION Gazette Copy of OFFICE REGISTER FOR THE MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE BASE) (REVALUATION) EXAMINATION – DECEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/11/REVALUATION-Gazette-Copy-of-OFFICE-REGISTER-FOR-THE-MASTER-IN-COMPUTER-APPLICATION-SEM.II-CHOICE-BASE-REVALUATION-EXAMINATION-DECEMBER-2019.pdf" },
          { text: "Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE BASE) EXAMINATION – NOVEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.II-CHOICE-BASE-EXAMINATION-NOVEMBER-2019.pdf" },
          { text: "REVALUATION Gazette Copy of OFFICE REGISTER FOR THE MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE BASE) (REVALUATION) EXAMINATION – DECEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/11/REVALUATION-Gazette-Copy-of-OFFICE-REGISTER-FOR-THE-MASTER-IN-COMPUTER-APPLICATION-SEM.III-CHOICE-BASE-REVALUATION-EXAMINATION-DECEMBER-2019.pdf" },
          { text: "Gazette Copy of M.C.A. (SEM-III)(CBGS TO CHOICE) EXAMINATION – DECEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/Gazette-Copy-of-M.C.A.-SEM-IIICBGS-TO-CHOICE-EXAMINATION-DECEMBER-2019.pdf" },
          { text: "Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.IV) (CHOICE) EXAMINATION – NOVEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.IV-CHOICE-EXAMINATION-NOVEMBER-2019.pdf" },
          { text: "REVALUATION Gazette Copy of OFFICE REGISTER FOR THE MASTER IN COMPUTER APPLICATION (SEM.V) (CHOICE BASE) (REVALUATION) EXAMINATION – DECEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/11/REVALUATION-Gazette-Copy-of-OFFICE-REGISTER-FOR-THE-MASTER-IN-COMPUTER-APPLICATION-SEM.V-CHOICE-BASE-REVALUATION-EXAMINATION-DECEMBER-2019.pdf" },
          { text: "Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.V) (CHOICE) EXAMINATION – DECEMBER 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/Gazette-Copy-of-MASTER-IN-COMPUTER-APPLICATION-SEM.V-CHOICE-EXAMINATION-DECEMBER-2019.pdf" }
        ]
      },

      // May/June 2019
      {
        year: "2019",
        type: "Regular",
        title: "May / June 2019",
        items: [
          { text: "REVALUATION EXAMINATION – THE MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE) (REVALUATION) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/REVALUATION-EXAMINATION-THE-MASTER-IN-COMPUTER-APPLICATION-SEM.I-CHOICE-REVALUATION-EXAMINATION-MAY-2019.pdf" },
          { text: "REVALUATION EXAMINATION – THE MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE) (REVALUATION) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/REVALUATION-EXAMINATION-THE-MASTER-IN-COMPUTER-APPLICATION-SEM.II-CHOICE-REVALUATION-EXAMINATION-MAY-2019.pdf" },
          { text: "REVALUATION EXAMINATION – THE MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE) (REVALUATION) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/THE-MASTER-IN-COMPUTER-APPLICATION-SEM.III-CHOICE-REVALUATION-EXAMINATION-MAY-2019.pdf" },
          { text: "REVALUATION EXAMINATION – THE MASTER IN COMPUTER APPLICATION (SEM.IV) (CHOICE) (REVALUATION) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/THE-MASTER-IN-COMPUTER-APPLICATION-SEM.IV-CHOICE-REVALUATION-EXAMINATION-MAY-2019.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/MASTER-IN-COMPUTER-APPLICATION-SEM.I-CHOICE-BASE-EXAMINATION-MAY-2019.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE BASE) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/MASTER-IN-COMPUTER-APPLICATION-SEM.II-CHOICE-BASE-EXAMINATION-MAY-2019.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE BASE) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/MASTER-IN-COMPUTER-APPLICATION-SEM.III-CHOICE-BASE-EXAMINATION-MAY-2019-.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.IV) (CHOICE) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/MASTER-IN-COMPUTER-APPLICATION-SEM.IV-CHOICE-EXAMINATION-MAY-2019.pdf" },
          { text: "Gazette Copy of The MASTER IN COMPUTER APPLICATION (SEM.V) (CHOICE) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/Gazette-Copy-Result-Copy-of-The-MASTER-IN-COMPUTER-APPLICATION-SEM.V-CHOICE-EXAMINATION-MAY-2019.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.VI) (CHOICE BASED) EXAMINATION – JULY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/MASTER-IN-COMPUTER-APPLICATION-SEM.VI-CHOICE-BASED-EXAMINATION-JULY-2019.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (GRADE) EXAMINATION – MAY 2019.pdf", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/THE-MASTER-IN-COMPUTER-APPLICATION-SEM.I-GRADE-EXAMINATION-MAY-2019.pdf" },
          { text: "Gazette Copy of The MASTER IN COMPUTER APPLICATION (SEM.III) (GRADE) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/Gazette-Copy-of-The-MASTER-IN-COMPUTER-APPLICATION-SEM.III-GRADE-EXAMINATION-MAY-2019.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.V) (GRADE) EXAMINATION – MAY 2019", url: "https://timscdrmumbai.in/wp-content/uploads/2020/10/MASTER-IN-COMPUTER-APPLICATION-SEM.V-GRADE-EXAMINATION-MAY-2019.pdf" }
        ]
      },

      // Nov/Dec 2018
      {
        year: "2018",
        type: "Regular",
        title: "November/December 2018 - Revaluation",
        items: [
          { text: "REVALUATION Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE) (RE-UPDATED) EXAMINATION – DECEMBER 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/REVALUATION%20Gazette%20Copy%20of%20THE%20MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.I)%20(CHOICE%20BASE)%20(RE-UPDATED)%20EXAMINATION%20-%20DECEMBER%202018.PDF" },
          { text: "REVALUATION Gazette Copy of MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE) EXAMINATION – NOVEMBER 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/REVALUATION%20Gazette%20Copy%20of%20MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.II)%20(CHOICE)%20EXAMINATION%20-%20NOVEMBER%202018.PDF" },
          { text: "REVALUATION Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE) (REVALUATION) EXAMINATION – NOVEMBER 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/REVALUATION%20Gazette%20Copy%20of%20THE%20MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.III)%20(CHOICE)%20(REVALUATION)%20EXAMINATION%20-%20NOVEMBER%202018.PDF" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.V) (CHOICE) (REVALUATION) EXAMINATION – NOVEMBER 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.V)%20(CHOICE)%20(REVALUATION)%20EXAMINATION%20-%20NOVEMBER%202018.PDF" },
          { text: "REVALUATION Gazette Copy of THE MASTER IN COMPUTER APPLICATION (SEM.I) (GRADE) EXAMINATION – NOVEMBER 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/REVALUATION%20Gazette%20Copy%20of%20THE%20MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.I)%20(GRADE)%20EXAMINATION%20-%20NOVEMBER%202018.pdf" }
        ]
      },

      // May/July 2018
      {
        year: "2018",
        type: "Regular",
        title: "May / July 2018",
        items: [
          { text: "REVALUATION Gazette Copy for MASTER IN COMPUTER APPLICATION (SEM.IV) (GRADE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/REVALUATION%20Gazette%20Copy%20for%20MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.IV)%20(GRADE)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "REVALUATION Gazette Copy FOR MASTER IN COMPUTER APPLICATION (SEM.IV) (CHOICE BASE)(REVALUATION)EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/REVALUATION%20Gazette%20Copy%20FOR%20MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.IV)%20(CHOICE%20BASE)(REVALUATION)EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.IV) (CHOICE) EXAMINATION (Revaluation Result) – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.IV)%20(CHOICE)%20EXAMINATION%20%20(Revaluation%20Result)%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE) (RE-UPDATED) EXAMINATION (Revaluation Result) – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.I)%20(CHOICE%20BASE)%20(RE-UPDATED)%20EXAMINATION%20%20(Revaluation%20Result)%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE BASE) EXAMINATION (Revaluation Result) – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.II)%20(CHOICE%20BASE)%20EXAMINATION%20(Revaluation%20Result)%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (GRADE) EXAMINATION REVALUATION  COPY – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.III)%20(GRADE)%20EXAMINATION%20REVALUATION%20%20COPY%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.V) (GRADE) EXAMINATION REVALUATION  COPY – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.V)%20(GRADE)%20EXAMINATION%20REVALUATION%20%20COPY%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE) (RE-UPDATED) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.I)%20(CHOICE%20BASE)%20(RE-UPDATED)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.IV) (CHOICE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/OFFICE%20REGISTER%20FOR%20MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.IV)%20(CHOICE)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE BASE)(UPDATED) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.III)%20(CHOICE%20BASE)(UPDATED)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "Sem. III. IV & V (Revised) Gazzate of May 2018 Examination", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/Sem.%20III.%20IV%20&%20V%20(Revised)%20gazzate%20of%20May%202018%20examination.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE BASE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.II)%20(CHOICE%20BASE)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.VI) (CBGS) EXAMINATION – JULY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.VI)%20(CBGS)%20EXAMINATION%20-%20JULY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (GRADE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.I)%20(GRADE)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.II) (GRADE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.II)%20(GRADE)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (GRADE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.III)%20(GRADE)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.IV) (GRADE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.IV)%20(GRADE)%20EXAMINATION%20-%20MAY%202018.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.V) (GRADE) EXAMINATION – MAY 2018", url: "https://www.timscdrmumbai.in/images/exam/result/University%20Gazette/MASTER%20IN%20COMPUTER%20APPLICATION%20(SEM.V)%20(GRADE)%20EXAMINATION%20-%20MAY%202018.pdf" }
        ]
      },

      // Nov/Dec 2017 - Regular/Revaluation
      {
        year: "2017",
        type: "Regular",
        title: "November/December 2017 - Regular/Revaluation",
        items: [
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE) (RE-UPDATED) EXAMINATION – DECEMBER 2017 – Revaluation", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Reval-Sem-1-Choice-Base.docx.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE BASE) EXAMINATION – NOVEMBER 2017-Revaluation", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Reval-Sem-3-Choice-Base-Dec-17.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.V) (GRADE) EXAMINATION -(Revaluation Result)- NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/MCA-SEM.V-CBSGSRevaluation-Result-NOV-2017.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.IV) (GRADE) EXAMINATION -(Revaluation Result)- NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/MCA-SEM.IV-CBSGSRevaluation-Result-NOV-2017.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (GRADE) EXAMINATION – NOVEMBER 2017(Revaluation Result)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/MCA-SEM.III-CBSGSRevaluation-Result-NOV-2017.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.II) (GRADE) EXAMINATION – NOVEMBER 2017(Revaluation Result)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/MCA-SEM.II-CBSGSRevaluation-Result-NOV-2017.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (GRADE) EXAMINATION – NOVEMBER 2017(Revaluation Result)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/MCA-SEM.I-CBSGSRevaluation-Result-NOV-2017.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (CHOICE BASE)(UPDATED) EXAMINATION – NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-3-Choice-Base-Dec-17.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.II) (CHOICE BASE) EXAMINATION – NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-2-Kt-Choice-Base-Dec-17.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (CHOICE BASE) (UPDATED) EXAMINATION – DECEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-1-Choice-Base.docx.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.V) (GRADE) EXAMINATION – NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-5-CBSGS-CA5C715.docx-1.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.IV) (GRADE) EXAMINATION – NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-4-CBSGS-CA4C715.docx-1.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.III) (GRADE) EXAMINATION – NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-3-CBSGS-CA3C715.docx-1.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.II) (GRADE) EXAMINATION – NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-2-CBSGS-CA2C715.docx-1.pdf" },
          { text: "MASTER IN COMPUTER APPLICATION (SEM.I) (GRADE) EXAMINATION – NOVEMBER 2017", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-1-CBSGS-CA1C715.docx-1.pdf" }
        ]
      },

      // Nov/Dec 2016
      {
        year: "2016",
        type: "Regular",
        title: "Nov / Dec 2nd Half 2016",
        items: [
          { text: "SEM.II (GRADE)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-II-Graded.pdf" },
          { text: "SEM.III (GRADE)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-III-Graded.pdf" },
          { text: "SEM.I (GRADE)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-I-Graded.pdf" },
          { text: "SEM.I (CHOICE BASE)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-I-Dec-16-Choice.pdf" },
          { text: "SEM.IV (GRADE)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-IV-Graded.pdf" },
          { text: "SEM.V (GRADE)", url: "https://timscdrmumbai.in/wp-content/uploads/2022/10/Sem-V-Graded.pdf" }
        ]
      }
    ],
    []

  );


  const handleFilterClick = (kind, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [kind]: prev[kind] === value ? "" : value
    }));
  };

  const matchesSearchAndFilters = (text, year, type) => {
    const s = search.trim().toLowerCase();
    const textOk = !s || text.toLowerCase().includes(s);
    const yearOk = !activeFilters.year || activeFilters.year === year;
    const typeOk = !activeFilters.type || activeFilters.type === type;
    return textOk && yearOk && typeOk;
  };

  useEffect(() => {
    // Ensure input width focus animation similar to original
    const el = searchRef.current;
    if (!el) return;
    const onFocus = () => el.classList.add("ugz-search-focused");
    const onBlur = () => el.classList.remove("ugz-search-focused");
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
    return () => {
      el.removeEventListener("focus", onFocus);
      el.removeEventListener("blur", onBlur);
    };
  }, []);

  const visibleList = entriesList.filter((sec) =>
    matchesSearchAndFilters([sec.title, ...sec.items].join(" "), sec.year, sec.type)
  );
  const visibleTimeline = entriesTimeline.filter((sec) =>
    matchesSearchAndFilters([sec.title, ...sec.items].join(" "), sec.year, sec.type)
  );
  const noResults = (view === "list" ? visibleList.length : visibleTimeline.length) === 0;

  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButton />
      <div className="ugz-root ugz-bg">


        <main className="vision-mission-container">
          <PageHeader
            title="University Gazette"
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'University Gazette' }, // current page (no href)
            ]}
          />
          <div className="ugz-container ugz-main-grid">
              
            <aside className="ugz-aside">
              <div className="ugz-card ugz-elev">
                {/* <h2 className="ugz-h2">Year</h2> */}

                <div className="ugz-filters-group">
                  <div>
                    <h3 className="ugz-h3">Year</h3>
                    <div className="ugz-chip-row">
                      {yearOptions.map((y) => {
                        const active = activeFilters.year === y;
                        return (
                          <button
                            key={y}
                            className={`ugz-chip ${active ? "ugz-chip--active" : ""}`}
                            onClick={() => handleFilterClick("year", y)}
                            aria-pressed={active}
                          >
                            {y}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    {/* <h3 className="ugz-h3">Type</h3>
                  <div className="ugz-chip-row">
                    {typeOptions.map((t) => {
                      const active = activeFilters.type === t;
                      return (
                        <button
                          key={t}
                          className={`ugz-chip ${active ? "ugz-chip--active" : ""}`}
                          onClick={() => handleFilterClick("type", t)}
                          aria-pressed={active}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div> */}
                  </div>
                </div>
              </div>
            </aside>

            <section className="ugz-content">
              <div className="ugz-toolbar">


                <div className="ugz-view-toggle">
                  {/* <label className="ugz-muted">View:</label>
                <button
                  className={`ugz-toggle ${view === "list" ? "ugz-toggle--active" : ""}`}
                  onClick={() => setView("list")}
                >
                  List
                </button> */}
                  {/* <button
                  className={`ugz-toggle ${view === "timeline" ? "ugz-toggle--active" : ""}`}
                  onClick={() => setView("timeline")}
                >
                  Timeline
                </button> */}
                </div>
              </div>

              {view === "timeline" && (
                <div className="ugz-timeline-wrap">
                  <ul className="ugz-timeline">
                    {visibleTimeline.map((sec, idx) => (
                      <li className="ugz-timeline-item" key={`${sec.title}-${idx}`}>
                        <div className="ugz-timeline-content ugz-elev">
                          <h3 className="ugz-section-title">{sec.title}</h3>
                          <ul className="ugz-list">
                            {sec.items.map((it, i) => (
                              <li key={`${sec.title}-i-${i}`} className="ugz-list-item">
                                {it}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {view === "list" && (
                <div>
                  <div className="ugz-sections">
                    {visibleList.map((sec, idx) => (
                      <section className="ugz-card ugz-elev" key={`${sec.title}-${idx}`}>
                        <h2 className="ugz-section-heading">{sec.title}</h2>
                        <ul className="ugz-list ugz-list-lg">
                          {sec.items.map((it, i) => {
                            const key = `${sec.title}-li-${i}`;
                            if (it && typeof it === "object" && "text" in it) {
                              const { text, url } = it;
                              return (
                                <li key={key} className="ugz-list-item-lg">
                                  {url ? (
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                      {text}
                                    </a>
                                  ) : (
                                    text
                                  )}
                                </li>
                              );
                            }
                            // string fallback
                            return (
                              <li key={key} className="ugz-list-item-lg">
                                {it}
                              </li>
                            );
                          })}
                        </ul>

                      </section>
                    ))}
                  </div>
                  {noResults && (
                    <div className="ugz-no-results">No gazette entries found matching your criteria.</div>
                  )}
                </div>
              )}

              {view === "timeline" && noResults && (
                <div className="ugz-no-results">No gazette entries found matching your criteria.</div>
              )}
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
