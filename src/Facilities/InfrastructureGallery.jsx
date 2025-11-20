import React, { useState } from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";

export default function InfrastructureGallery() {
  const galleryItems = [
    {
      alt: "Admin Office with desks and staff working.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD01D_NsdNNfkPXuOrPZEOGwLnwkXYmk2QQ8QfyPeEvh3ICCA_Dzn_UNq7TlgYPZE9eb4tDAqoxAmOi7kB6dqGfC-KE5RTuHygIiPsc8sYWvoYZ3hNtMvvG8CFzadbyDNYbhEoH5vx6B7gyRdlyMtwRZD9TqOwgylO7JWLr0R9VioyNmhLGW1RyD18W1Cy5JFFcpIZ1gyvZWJcuJLCfVBVKmTRKKwZxYylHoNL_0X1He7FIjUrfL24BMrv8LqbZZDZSzMeObd_-n_By",
      title: "Admin Office",
    },
    {
      alt: "Modern board room with a large central table and chairs.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD01D_NsdNNfkPXuOrPZEOGwLnwkXYmk2QQ8QfyPeEvh3ICCA_Dzn_UNq7TlgYPZE9eb4tDAqoxAmOi7kB6dqGfC-KE5RTuHygIiPsc8sYWvoYZ3hNtMvvG8CFzadbyDNYbhEoH5vx6B7gyRdlyMtwRZD9TqOwgylO7JWLr0R9VioyNmhLGW1RyD18W1Cy5JFFcpIZ1gyvZWJcuJLCfVBVKmTRKKwZxYylHoNL_0X1He7FIjUrfL24BMrv8LqbZZDZSzMeObd_-n_By",
      title: "Board Room",
    },
    {
      alt: "Spacious classroom with rows of desks and chairs.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa36D1VcAkE9Tqv8fPDoX5MLUCL7T9jXWF3Fh9QTwBlJ8WNf1WKZCKrN35ggl0FPsdEMK-v7E9yVtA_LxDQ-X4ho0vidi4ohRkYjpPMVvBMvHUpKK0pi5foBvWcEuC4S6Fiqu6km6h3zBDrYQf7BvX_-JhEqZJa81sQhNiBjaaHpsygqoXFbnvFDe2heCdAydqKbI4v28S3o418r9Mcche6-izewNxJLT1uF9eIRB5BXht4wtOe47UE1naBiEyvHriSQ47oF-zUSD-",
      title: "Classroom",
    },
    {
      alt: "Computer center with multiple rows of computers.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-yNIgZJuUwAKLmPK3E2GJQrnAnDX3Yq9EVHpbth6hRsbsEuRy9UU1n9S83S8KTawf92GjDmfrK_Hc4nqnghpcDjUW4swtc99TVRyj7Psi9rdac1Fhjodkjj_L60GU0Xn3gPJJmrlq7Fkd314vfIvU-ScD82lBjbLiHH3kxpkHeKHbLTWU7KnUCbjWNRbL8IZHcuklxr-QlOGjdfU-m-ZaB_p5QzpTZDx8TWLEiE38Z8evcZ9FKZiI7eXLYS-3zqO7PGws8vM3HoUL",
      title: "Computer Center",
    },
    {
      alt: "Library with students studying at tables.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkdTi7NSPKTnCDDrgDTIig2eq85wvcCLbFqJoHOY1CnGsnmVxIu4Tui_HO9s6Z-P3QfCxwuRhqkbYeUEqMKAhYadoBDpsXMOxyQat4tGPSIAQ1JmPD4MArkzTZ37JfRLPF-ymomhDMEQlpv81HSuaAArKtJpyxkBCF7eOjFCBpSnCZVlD-L-Z9flomoQVfFN0kSicYfWZVPAzj1rg1pkU4OKn5L1meKwKtDWTc51HZUS3rkfjCFlUsnQ9QzoQETQz2aMx-ssDXcQT0",
      title: "Library",
    },
    {
      alt: "Computer lab with rows of computer stations.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFAv4zAYEpBoFObbdHwArCkSN6N3EXYjux6_XN4uGxDCjv9zCNtAU-Na-oa5cnZUIjjFW5IWl4AUnvnTISvjdDu5FqrogzHpu8kEW5QcUeuTdryXT7X8pbpU3SM0dhXMwcX9v4UElDzjrLDTULVaGKUlqDlNINoLnhibZDW_d3ycDUgrX-aTkgNXxaavBRT0PAtvpiID_jL1hSwn2MlyTmEFjG8uTXTqTZi8IjYR3eq-VsWYWalImcwXN_suhIr1V5BF28ofjNlrr7",
      title: "Computer Lab",
    },
    {
      alt: "A well-lit room with a bed and medical equipment.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp6mSB4pNX4G974WGPL-I8DdHCmY7nrQGYjsuUG-oZoxTWil1O_XxVFHHEpnwaCVdN6MSe26rpaL4BIkYhMXdv6LnRQ-cvsCiIe3jB63tU52M_gioihsk35EunBLUM7p_ynjIjQk9cmF-uT7j5xPXccjZokd1nBRMTd52_dsGn5tOL9n8H7w5pKq7mTq3l0G_nYfk20ssteG_IGVnX_3T9KLh3LZLrj3GutR1srl1QORFM9h2XjzzxrTHwO60fGoCaVojw4mNzK7Vo",
      title: "Sick Room",
    },
    {
      alt: "Students eating and socializing in a canteen.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMxhwkFLoiWC_vrcgIXcrYF4rKxClySGEz1GxTc3RKwViMJU5uM8IgnG_0nsBwg7Jqv--hhTG_BnI-OctgyygwAdQkzVkaiQ4Lctnei6oQ3dr1PZJn7PtmmWxbTA52p_xgnBgLkRDbsLjQIepTmmaMGy44ou_MJrqWnsZdt7cepxr-g_1Rj-RimqT_9DrSHL-FoDTLX8Zro3X4VCrt7MwIwhP55ZSXxPwMK16A4Xw093WXjiKqr8EuTpDM5WILK5ovPmCcbi-TZ42D",
      title: "Canteen",
    },
    {
      alt: "Science laboratory with equipment and workstations.",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZmqz_ALaLRIYn7VkSLXbXkzc61ewu4EVGBiMV2oDhlTv8UAglZxQhYumlZdcuhzdrppiTI2rqf-_mRXgjRUeAstT-SHeAr06YHNfwN8XahksPP_GYwPrlPmLS6U0vBU_mFDVhjLlIN9dNipn8b6-AO1_nMb1tW465iPAoDCcooZFhFNsPSOWJH1NG__snlQt7wxQL34kN6simUU3rezD2thfZ6jB91Rq7syq5bO8KhZqXoEjFEkhzVqGV0Bz_iQP1PHIOIGHugKpi",
      title: "Laboratory",
    },
  ];
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
      <main className="gallery-main">
        <h1 className="header">INFRASTRUCTURE GALLERY</h1>
        <p className="gallery-intro">
          Explore our Infrastructure Gallery to see why TIMSCDR is considered
          one of the best colleges in Mumbai for MCA. Our state-of-the-art
          facilities provide students with the ideal environment for academic
          excellence and holistic development.
        </p>

        <div className="gallery-grid">
          {galleryItems.map(({ alt, src, title }, index) => (
            <div key={index} className="gallery-card">
              <img alt={alt} src={src} className="gallery-img" />
              <div className="gallery-caption">
                <h3 className="gallery-title">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
