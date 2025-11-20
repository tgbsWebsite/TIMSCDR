import React,{useState} from "react";
import Footer from "../components/Footer";
import BrochureForm from "../components/EnquiryForm";
import CTAButtons from "../components/sticky-button";
import Navbar from "../components/navbar";


const VirtualReadingResource = () => {
      const [showForm, setShowForm] = useState(false);
    
  return (
     <>
      <Navbar setShowForm={setShowForm} />
      {showForm && <BrochureForm setShowForm={setShowForm} />}
      <CTAButtons />
    <section className="library-container-rules">
      <h1 className="heading">Virtual Reading Resource</h1>

      {/* E-Resources: Subscribed Databases */}
      <h2>E-Resources</h2>
      <h3>Hyperlinks of the Subscribed Databases:</h3>
      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>Sr.</th>
              <th scope="col" style={{ width: "35%" }}>Name</th>
              <th scope="col" style={{ width: "35%" }}>Hyperlink</th>
              <th scope="col" style={{ width: "20%" }}>E-journal / E-books</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>IEEE- ASPP</td>
              <td>
                <a href="http://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer">
                  http://ieeexplore.ieee.org
                </a>
              </td>
              <td>190 e-journal</td>
            </tr>
            <tr>
              <td>02</td>
              <td>EBSCOhost-e-Book ITCore Collection</td>
              <td>
                <a href="http://search.ebscohost.com/" target="_blank" rel="noopener noreferrer">
                  http://search.ebscohost.com
                </a>
              </td>
              <td>9046 e-Books</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Online resources */}
      <h3>Hyperlinks of Online resources</h3>
      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>Sr.</th>
              <th scope="col" style={{ width: "45%" }}>Name</th>
              <th scope="col" style={{ width: "45%" }}>Hyperlink</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>NPTEL</td>
              <td>
                <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer">
                  https://nptel.ac.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>SWAYAM</td>
              <td>
                <a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer">
                  https://swayam.gov.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>National Digital Library</td>
              <td>
                <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">
                  https://ndl.iitkgp.ac.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Shodh Ganga</td>
              <td>
                <a href="https://shodhganga.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer">
                  https://shodhganga.inflibnet.ac.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Shodh Sindhu</td>
              <td>
                <a href="https://ess.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer">
                  https://ess.inflibnet.ac.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>ePathshala</td>
              <td>
                <a href="https://ess.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer">
                  https://ess.inflibnet.ac.in/
                </a>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>MOOC</td>
              <td>
                <a href="https://www.mooc.org/" target="_blank" rel="noopener noreferrer">
                  https://www.mooc.org/
                </a>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>National Archives of India (NAI)</td>
              <td>
                <a href="https://www.abhilekh-patal.in/jspui/" target="_blank" rel="noopener noreferrer">
                  https://www.abhilekh-patal.in/jspui/
                </a>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Directory of Open Access journals</td>
              <td>
                <a href="https://doaj.org/" target="_blank" rel="noopener noreferrer">
                  https://doaj.org/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Newspapers */}
      <h3>Newspaper</h3>
      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>Sr.</th>
              <th scope="col" style={{ width: "45%" }}>Name</th>
              <th scope="col" style={{ width: "45%" }}>Hyperlink</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "The Times of India", "http://www.timesofindia.com/"],
              ["2", "The Indian Express", "http://www.expressindia.com/"],
              ["3", "Maharashtra Times", "http://www.maharashtratimes.com/"],
              ["4", "Loksatta", "http://www.loksatta.com/"],
              ["5", "Lokmat", "http://www.lokmat.com/"],
              ["6", "The Economic Times", "http://www.economictimes.com/"],
              ["7", "The Financial Express", "http://www.financialexpress.com/"],
              ["8", "The Hindu", "http://www.thehindu.com/"],
              ["9", "The Employment news", "http://www.employmentnews.gov.in/"],
            ].map(([sr, name, url]) => (
              <tr key={sr}>
                <td>{sr}</td>
                <td>{name}</td>
                <td>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Encyclopedia */}
      <h3>Encyclopedia</h3>
      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>Sr.</th>
              <th scope="col" style={{ width: "45%" }}>Name</th>
              <th scope="col" style={{ width: "45%" }}>Hyperlink</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Britannica Concise</td>
              <td>
                <a href="http://www.britannica.com/" target="_blank" rel="noopener noreferrer">
                  http://www.britannica.com/
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Wikipedia</td>
              <td>
                <a href="http://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">
                  http://www.wikipedia.org/
                </a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Columbia Encyclopedia</td>
              <td>
                <a href="https://www.infoplease.com/encyclopedia" target="_blank" rel="noopener noreferrer">
                  https://www.infoplease.com/encyclopedia
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Dictionaries */}
      <h3>Dictionaries</h3>
      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>Sr.</th>
              <th scope="col" style={{ width: "45%" }}>Name</th>
              <th scope="col" style={{ width: "45%" }}>Hyperlink</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Dictionary", "http://dictionary.reference.com/"],
              ["2", "Dictionary of phrase & fable", "http://www.bartleby.com/81/"],
              ["3", "Dictionary of Philosophical terms", "http://www.philosophypages.com/dy/"],
              ["4", "Cambridge International dictionary of Idioms", "http://dictionary.cambridge.org/"],
              ["5", "The Free Dictionary", "http://www.thefreedictionary.com/"],
            ].map(([sr, name, url]) => (
              <tr key={sr}>
                <td>{sr}</td>
                <td>{name}</td>
                <td>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Free e-Books */}
      <h3>Free e-Books</h3>
      <div className="conv-table-wrapper">
        <table className="conv-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "10%" }}>Sr.</th>
              <th scope="col" style={{ width: "45%" }}>Name</th>
              <th scope="col" style={{ width: "45%" }}>Hyperlink</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Free e-books</td>
              <td>
                <a href="http://www.free-ebooks.net/" target="_blank" rel="noopener noreferrer">
                  http://www.free-ebooks.net/
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rare Books</td>
              <td>
                <a href="https://www.rarebooksocietyofindia.org/" target="_blank" rel="noopener noreferrer">
                  https://www.rarebooksocietyofindia.org/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default VirtualReadingResource;
