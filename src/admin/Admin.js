import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Admin = () => {
  const [selectedTable, setSelectedTable] = useState('');
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  // Celebration Gallery specific states
  const [celebrationPhotos, setCelebrationPhotos] = useState(['', '', '', '']);

  // Yuvostav states
  const [yuvostav, setYuvostav] = useState([]);
  const [yuvostavForm, setYuvostavForm] = useState({
    title: '',
    text: '',
    selected_date: '',
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    feature_image: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null
  });

  // Bulk Upload states for Result Analysis
  const [bulkUploadMode, setBulkUploadMode] = useState(false);
  const [csvFile, setCsvFile] = useState(null);
  const [csvPreview, setCsvPreview] = useState([]);
  const [bulkUploadStatus, setBulkUploadStatus] = useState('');

  // Login check
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin-login-timscdr');
    }
  }, [navigate]);

  // Fetch Yuvostav entries
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${API_URL}/admin/yuvostav`, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => setYuvostav(Array.isArray(data) ? data : []))
      .catch(error => console.error('Error fetching yuvostav:', error));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setFormData({});
    setSelectedTable('');
    setStatusMessage('');
    navigate('/admin-login-timscdr');
  };

  const handleBrochureCSVDownload = async () => {
    try {
      setStatusMessage('Preparing Brochure CSV download...');
      const response = await fetch(`${API_URL}/fetch-brochure-entries/download-csv`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'brochure_entries.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setStatusMessage('Brochure CSV download started successfully!');
        setTimeout(() => setStatusMessage(''), 3000);
      } else {
        setStatusMessage('Error: No brochure entries found to download.');
      }
    } catch (error) {
      setStatusMessage('Error: Cannot connect to server for brochure data.');
    }
  };

  const handleEnquiryCSVDownload = async () => {
    try {
      setStatusMessage('Preparing Enquiry CSV download...');
      const response = await fetch(`${API_URL}/fetch-enquiry-entries/download-csv`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'enquiry_entries.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setStatusMessage('Enquiry CSV download started successfully!');
        setTimeout(() => setStatusMessage(''), 3000);
      } else {
        setStatusMessage('Error: No enquiry entries found to download.');
      }
    } catch (error) {
      setStatusMessage('Error: Cannot connect to server for enquiry data.');
    }
  };

  // CSV file handling for bulk upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setCsvFile(file);

    // Preview CSV content
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split('\n');
      const headers = lines[0].split(',');
      const preview = lines.slice(1, 6).map(line => {
        const values = line.split(',');
        return headers.reduce((obj, header, index) => {
          obj[header.trim()] = values[index] ? values[index].trim() : '';
          return obj;
        }, {});
      });
      setCsvPreview(preview);
    };
    reader.readAsText(file);
  };

  // Bulk upload submission
  const handleBulkUpload = async () => {
    if (!csvFile) {
      setBulkUploadStatus('Please select a CSV file');
      return;
    }

    setLoading(true);
    setBulkUploadStatus('Processing bulk upload...');
    const formDataUpload = new FormData();
    formDataUpload.append('csv_file', csvFile);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/admin/result-analysis/bulk-upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataUpload,
      });

      const result = await response.json();

      if (response.ok) {
        setBulkUploadStatus(`✅ Success! ${result.processed} entries added, ${result.failed} failed.`);
        setCsvFile(null);
        setCsvPreview([]);
        setTimeout(() => {
          setBulkUploadMode(false);
          setBulkUploadStatus('');
        }, 3000);
      } else {
        setBulkUploadStatus(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setBulkUploadStatus(`❌ Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Download sample CSV template
  const handleDownloadSampleCSV = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/admin/result-analysis/sample-csv`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'result_analysis_sample.csv';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setStatusMessage('Sample CSV downloaded successfully!');
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch (error) {
      setBulkUploadStatus('Error downloading sample CSV');
    }
  };

  const handleTableChange = (e) => {
    setSelectedTable(e.target.value);
    setFormData({});
    setStatusMessage('');
    setBulkUploadMode(false);
    setCsvFile(null);
    setCsvPreview([]);
    setBulkUploadStatus('');
    if (e.target.value === 'celebration_events') {
      setCelebrationPhotos(['', '', '', '']);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePhotoChange = (index, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      let b64 = reader.result;
      const comma = b64.indexOf(',');
      if (comma !== -1) b64 = b64.substring(comma + 1);
      setCelebrationPhotos(ps => {
        const copy = [...ps];
        copy[index] = b64;
        return copy;
      });
    };
    reader.readAsDataURL(file);
  };

  // Yuvostav submit handler
  const handleYuvostavSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!formData.title?.trim()) {
        setStatusMessage('Title is required');
        return;
      }
      const response = await fetch(`${API_URL}/admin/yuvostav`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatusMessage('Yuvostav entry created successfully!');
        setFormData({});
        // Refresh the list
        fetch(`${API_URL}/admin/yuvostav`, {
          headers: { 
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => setYuvostav(Array.isArray(data) ? data : []))
        .catch(error => console.error('Error refreshing yuvostav:', error));
      } else {
        setStatusMessage('Error: ' + (result.error || 'Failed to create yuvostav entry'));
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Error creating yuvostav entry');
    } finally {
      setLoading(false);
    }
  };

  // Yuvostav delete handler
  const handleYuvostavDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this yuvostav entry?')) {
      try {
        const response = await fetch(`${API_URL}/admin/yuvostav/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          setStatusMessage('Yuvostav entry deleted successfully!');
          setYuvostav(yuvostav.filter(item => item.id !== id));
        } else {
          setStatusMessage('Error deleting yuvostav entry');
        }
      } catch (error) {
        console.error('Error:', error);
        setStatusMessage('Error deleting yuvostav entry');
      }
    }
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(',')[1];
        setFormData(prevData => ({
          ...prevData,
          [name]: base64Data
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Yuvostav image upload handler
  const handleImageUpload = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(',')[1];
        setFormData(prevData => ({
          ...prevData,
          [name]: base64Data
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Render bulk upload form
  const renderBulkUploadForm = () => (
    <div className="bulk-upload-container">
      <h3>📊 Bulk Upload Result Analysis Data</h3>
      <div className="csv-format-info">
        <p><strong>CSV Format Required:</strong></p>
        <p>student_name,designation,specialisation,academic_year,topic,selected_date</p>
        <p><strong>Example:</strong></p>
        <p>John Doe,"Software Engineer at Google",Computer Science,2024-2025,Placement,2024-10-06</p>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <button
          type="button"
          onClick={handleDownloadSampleCSV}
          className="admin-button secondary"
          style={{ marginRight: '10px' }}
        >
          📥 Download Sample CSV
        </button>
      </div>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="admin-input"
      />

      {csvPreview.length > 0 && (
        <div className="csv-preview">
          <h4>Preview (First 5 rows):</h4>
          <table className="preview-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Designation</th>
                <th>Specialisation</th>
                <th>Academic Year</th>
                <th>Topic</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {csvPreview.map((row, index) => (
                <tr key={index}>
                  <td>{row.student_name}</td>
                  <td>{row.designation}</td>
                  <td>{row.specialisation}</td>
                  <td>{row.academic_year}</td>
                  <td>{row.topic}</td>
                  <td>{row.selected_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        type="button"
        onClick={handleBulkUpload}
        disabled={!csvFile || loading}
        className="admin-button"
      >
        {loading ? 'Uploading...' : '📤 Upload CSV Data'}
      </button>

      <button
        type="button"
        onClick={() => setBulkUploadMode(false)}
        className="admin-button secondary"
      >
        ← Back to Single Entry
      </button>

      {bulkUploadStatus && (
        <div className="upload-status">
          {bulkUploadStatus}
        </div>
      )}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    // Handle celebration events first
    if (selectedTable === 'celebration_events') {
      const validPhotos = celebrationPhotos.filter(p => p && p.length > 100);
      if (!formData.event_name) {
        setStatusMessage('Event name is required');
        setLoading(false);
        return;
      }
      if (!formData.academic_year) {
        setStatusMessage('Academic year is required');
        setLoading(false);
        return;
      }
      if (validPhotos.length === 0) {
        setStatusMessage('At least one photo is required');
        setLoading(false);
        return;
      }
      const payload = {
        event_name: formData.event_name,
        academic_year: formData.academic_year,
        photos: validPhotos
      };
      const res = await fetch(`${API_URL}/admin/celebration-events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payload)
      });
      if (res.status === 422) {
        const err = await res.json();
        setStatusMessage(err.error);
      } else if (res.ok) {
        setStatusMessage('Event created successfully');
        setFormData({});
        setCelebrationPhotos(['', '', '', '']);
      } else {
        setStatusMessage('Server error');
      }
      setLoading(false);
      return;
    }

    // Handle all other tables
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setStatusMessage('No authentication token found. Please login again.');
        navigate('/admin-login-timscdr');
        setLoading(false);
        return;
      }

      const response = await fetch(`${API_URL}/admin/${selectedTable}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 401) {
        setStatusMessage('Authentication failed. Please login again.');
        localStorage.removeItem('token');
        navigate('/admin-login-timscdr');
        setLoading(false);
        return;
      } else if (response.status === 409) {
        setStatusMessage('Duplicate entry detected. Please check the data.');
      } else if (response.ok) {
        const result = await response.json();
        setStatusMessage(result.message || 'Data successfully updated!');
        setFormData({});
        e.target.reset();
      } else {
        const errorData = await response.json();
        setStatusMessage(errorData.error || 'Failed to update data. Please try again.');
      }
    } catch (error) {
      setStatusMessage('Error occurred. Please check if backend is running on port 5000.');
      console.error('Error:', error);
    }
    setLoading(false);
  };

  const renderFormFields = () => {
    switch (selectedTable) {
      case 'celebration_events':
        return (
          <>
            <input className='admin-input' type="text" name="title" placeholder="Page Title" value={formData.title || ''} onChange={handleInputChange} required />
            <input className='admin-input' type="text" name="event_name" placeholder="Event Name" value={formData.event_name || ''} onChange={handleInputChange} required />
            <input className='admin-input' type="date" name="event_date" value={formData.event_date || ''} onChange={handleInputChange} required />
            <input className='admin-input' type="text" name="academic_year" placeholder="Academic Year (e.g., 2024-2025)" value={formData.academic_year || ''} onChange={handleInputChange} required />
            <textarea className='admin-textarea' name="text" placeholder="Page Content" value={formData.text || ''} onChange={handleInputChange}></textarea>
            <textarea className='admin-textarea' name="description" placeholder="Event Description" value={formData.description || ''} onChange={handleInputChange}></textarea>
            <input className='admin-input' type="text" name="location" placeholder="Location" value={formData.location || ''} onChange={handleInputChange} />
            <input className='admin-input' type="text" name="organizer" placeholder="Organizer" value={formData.organizer || ''} onChange={handleInputChange} />
            <input className='admin-input' type="number" name="participants_count" placeholder="Number of Participants" value={formData.participants_count || ''} onChange={handleInputChange} min="0" />
            <input className='admin-input' type="date" name="selected_date" value={formData.selected_date || ''} onChange={handleInputChange} />

            <label>Feature Image:</label>
            <input className='admin-input' type="file" name="feature_image" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="feature_image_alt" placeholder="Feature Image Alt Text" value={formData.feature_image_alt || ''} onChange={handleInputChange} />

            <label>Image 1:</label>
            <input className='admin-input' type="file" name="image1" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image1_alt" placeholder="Image 1 Alt Text" value={formData.image1_alt || ''} onChange={handleInputChange} />

            <label>Image 2:</label>
            <input className='admin-input' type="file" name="image2" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image2_alt" placeholder="Image 2 Alt Text" value={formData.image2_alt || ''} onChange={handleInputChange} />

            <label>Image 3:</label>
            <input className='admin-input' type="file" name="image3" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image3_alt" placeholder="Image 3 Alt Text" value={formData.image3_alt || ''} onChange={handleInputChange} />

            <label>Image 4:</label>
            <input className='admin-input' type="file" name="image4" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image4_alt" placeholder="Image 4 Alt Text" value={formData.image4_alt || ''} onChange={handleInputChange} />

            <input className='admin-input' type="text" name="meta_title" placeholder="Meta Title" value={formData.meta_title || ''} onChange={handleInputChange} />
            <textarea className='admin-textarea' name="meta_description" placeholder="Meta Description" value={formData.meta_description || ''} onChange={handleInputChange}></textarea>
            <textarea className='admin-textarea' name="meta_keywords" placeholder="Meta Keywords (comma separated)" value={formData.meta_keywords || ''} onChange={handleInputChange}></textarea>
          </>
        );

      case 'ecell':
      case 'synapse':
      case 'dlle':
      case 'vista':
      case 'visits':
      case 'green_club':
      case 'social_events':
      case 'yuvostav':
      case 'hackathon':
      case 'trekking':
      case 'clean_india_campaign':
      case 'health_hygiene':
      case 'cultural_day':
      case 'freshers_farewell':
      case 'sports_day':
      case 'bharat_abhiyan':
      case 'self_defence':
      case 'women_entrepreneurs':
      case 'women_health':
        return (
          <>
            <input className='admin-input' type="text" name="title" placeholder="Title" value={formData.title || ''} onChange={handleInputChange} required />
            <textarea className='admin-textarea' name="text" placeholder="Text" value={formData.text || ''} onChange={handleInputChange}></textarea>
            <input className='admin-input' type="date" name="selected_date" value={formData.selected_date || ''} onChange={handleInputChange} required />
            <label>Feature Image:</label>
            <input className='admin-input' type="file" name="feature_image" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="feature_image_alt" placeholder="Feature Image Alt Text" value={formData.feature_image_alt || ''} onChange={handleInputChange} />
            <label>Image 1:</label>
            <input className='admin-input' type="file" name="image1" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image1_alt" placeholder="Image 1 Alt Text" value={formData.image1_alt || ''} onChange={handleInputChange} />
            <label>Image 2:</label>
            <input className='admin-input' type="file" name="image2" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image2_alt" placeholder="Image 2 Alt Text" value={formData.image2_alt || ''} onChange={handleInputChange} />
            <label>Image 3:</label>
            <input className='admin-input' type="file" name="image3" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image3_alt" placeholder="Image 3 Alt Text" value={formData.image3_alt || ''} onChange={handleInputChange} />
            <label>Image 4:</label>
            <input className='admin-input' type="file" name="image4" onChange={handleFileChange} accept="image/*" />
            <input className='admin-input' type="text" name="image4_alt" placeholder="Image 4 Alt Text" value={formData.image4_alt || ''} onChange={handleInputChange} />
            <input className='admin-input' type="text" name="meta_title" placeholder="Meta Title" value={formData.meta_title || ''} onChange={handleInputChange} />
            <textarea className='admin-textarea' name="meta_description" placeholder="Meta Description" value={formData.meta_description || ''} onChange={handleInputChange}></textarea>
            <textarea className='admin-textarea' name="meta_keywords" placeholder="Meta Keywords (comma separated)" value={formData.meta_keywords || ''} onChange={handleInputChange}></textarea>
          </>
        );

    

      case 'result_analysis':
        return (
          <div>
            <div className="upload-mode-toggle">
              <button
                type="button"
                onClick={() => setBulkUploadMode(!bulkUploadMode)}
                className="toggle-button"
              >
                {bulkUploadMode ? '📝 Single Entry Mode' : '📤 Bulk Upload Mode'}
              </button>
            </div>

            {bulkUploadMode ? renderBulkUploadForm() : (
              <>
                 <input
                  className='admin-input'
                  type="date"
                  name="selected_date"
                  value={formData.selected_date || ''}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className='admin-input'
                  type="number"
                  name="semester"
                  placeholder="semester"
                  value={formData.semester || ''}
                  onChange={handleInputChange}
                  min="1"
                  required
                />
                <input
                  className='admin-input'
                  type="text"
                  name="student_name"
                  placeholder="Student Name"
                  value={formData.student_name || ''}
                  onChange={handleInputChange}
                  required
                />
                
                <input
                  className='admin-input'
                  type="text"
                  name="academic_year"
                  placeholder="Academic Year (e.g., 2024-2025)"
                  value={formData.academic_year || ''}
                  onChange={handleInputChange}
                  required
                />
          
                <input
                  className='admin-input'
                  type="number" step="0.01"
                  name="sgpi"
                  placeholder="SGPI"
                  value={formData.sgpi || ''}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className='admin-input'
                  type="number"
                  name="university_rank"
                  placeholder="University Rank"
                  value={formData.university_rank || ''}
                  onChange={handleInputChange}
                  min="1"
                  required
                />
                <input
                  className='admin-input'
                  type="number"
                  name="institute_rank"
                  placeholder="Institute Rank"
                  value={formData.institute_rank || ''}
                  onChange={handleInputChange}
                  min="1"
                  required
                />
              </>
            )}
          </div>
        );

      // case 'blog':
      //   return (
      //     <>
      //       <input className='admin-input' type="text" name="title" placeholder="Title" value={formData.title || ''} onChange={handleInputChange} required />
      //       <textarea className='admin-textarea' name="text" placeholder="Text" value={formData.text || ''} onChange={handleInputChange}></textarea>
      //       <input className='admin-input' type="date" name="selected_date" value={formData.selected_date || ''} onChange={handleInputChange} required />
      //       <input className='admin-input' type="text" name="future_title" placeholder="Future Title" value={formData.future_title || ''} onChange={handleInputChange} />
      //       <label>Image 1:</label>
      //       <input className='admin-input' type="file" name="image1" onChange={handleFileChange} accept="image/*" />
      //       <input className='admin-input' type="text" name="image1_alt" placeholder="Image 1 Alt Text" value={formData.image1_alt || ''} onChange={handleInputChange} />
      //       <input className='admin-input' type="text" name="meta_title" placeholder="Meta Title" value={formData.meta_title || ''} onChange={handleInputChange} />
      //       <textarea className='admin-textarea' name="meta_description" placeholder="Meta Description" value={formData.meta_description || ''} onChange={handleInputChange}></textarea>
      //       <textarea className='admin-textarea' name="meta_keywords" placeholder="Meta Keywords (comma separated)" value={formData.meta_keywords || ''} onChange={handleInputChange}></textarea>
      //     </>
      //   );

      default:
        return null;
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span>Admin Dashboard</span>
        <div className="adminCsvSection_unique">
          <div className="adminCsvButtons_unique">
            <button
              onClick={handleBrochureCSVDownload}
              className="adminCsvBtn_unique adminGreenBtn_unique"
            >
              Brochure Data
            </button>
            <button
              onClick={handleEnquiryCSVDownload}
              className="adminCsvBtn_unique adminRedBtn_unique"
            >
              Enquiry Data
            </button>
          </div>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      {/* Table Selection */}
      <label>Select Table:</label>
      <select
        className="admin-input"
        value={selectedTable}
        onChange={handleTableChange}
      >
        <option value="">Choose a table...</option>
        <optgroup label="Celebration Gallery">
          <option value="celebration_events">🎉 Celebration Events</option>
        </optgroup>
        <optgroup label="Academic Activities">
          <option value="ecell">E-CELL Activities</option>
          <option value="synapse">Synapse Activities</option>
          <option value="dlle">DLLE Activities</option>
          
          <option value="vista">Vista Activities</option>
          <option value="visits">Industrial Visits</option>
          <option value="green_club">Green Club</option>
        </optgroup>
        <optgroup label="Events">
          <option value="social_events">Social Events</option>
          <option value="hackathon">Hackathon</option>
          <option value="trekking">Trekking</option>
          <option value="clean_india_campaign">Clean India Campaign</option>
          <option value="health_hygiene">Health & Hygiene</option>
          <option value="cultural_day">Cultural Day</option>
          <option value="freshers_farewell">Freshers Farewell</option>
          <option value="sports_day">Sports Day</option>
        </optgroup>
         <optgroup label="Yuvostav">
       <option value="yuvostav">Yuvostav</option>
        </optgroup>
        <optgroup label="Women Cell">
          <option value="self_defence">Self Defence</option>
          <option value="women_entrepreneurs">Women Entrepreneurs</option>
          <option value="women_health">Women Health</option>
        </optgroup>
        <optgroup label="UNA Activities">
          <option value="bharat_abhiyan">Bharat Abhiyan</option>
        </optgroup>
        <optgroup label="Result Analysis">
          <option value="result_analysis">📊 Result Analysis</option>
        </optgroup>
       
      </select>

      {selectedTable && !bulkUploadMode && (
        <form onSubmit={selectedTable === 'yuvostav' ? handleYuvostavSubmit : handleSubmit}>
          {renderFormFields()}

          <button
            type="submit"
            className="admin-button"
            disabled={loading}
          >
            {loading ? 'Saving...' : selectedTable === 'celebration_events' ? 'Create Celebration Event' : selectedTable === 'yuvostav' ? 'Create Yuvostav Entry' : 'Save Data'}
          </button>
        </form>
      )}

      {selectedTable && bulkUploadMode && renderFormFields()}

      {statusMessage && (
        <div className={`status-message ${statusMessage.includes('successfully') || statusMessage.includes('download started') ? 'success' : 'error'}`}>
          {statusMessage}
        </div>
      )}

      Yuvostav Data Display
      {selectedTable === 'yuvostav' && (
        <div className="data-section">
          <h3>Existing Yuvostav Entries</h3>
          {yuvostav.length === 0 ? (
            <p>No yuvostav entries found.</p>
          ) : (
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Date</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {yuvostav.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.text ? item.text.substring(0, 50) + '...' : 'N/A'}</td>
                      <td>{item.selected_date}</td>
                      <td>{item.created_at}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => handleYuvostavDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
