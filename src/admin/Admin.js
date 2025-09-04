import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [selectedTable, setSelectedTable] = useState('');
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin-login-timscdr');// Redirect to login if not authenticated
        }
    }, [navigate]);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('token');
        setFormData({});
        setSelectedTable('');
        setStatusMessage('');
        navigate('/admin-login-timscdr');
    };

    const handleTableChange = (e) => {
        setSelectedTable(e.target.value);
        setFormData({});
        setStatusMessage('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        try {
            const response = await fetch(`/api/admin/${selectedTable}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 409) {
                setStatusMessage('Duplicate entry detected. Please check the data.');
            } else if (response.ok) {
                setStatusMessage('Data successfully updated!');
                setFormData({});
                const form = e.target;
                form.reset();
            } else {
                setStatusMessage('Failed to update data. Please try again.');
            }
        } catch (error) {
            setStatusMessage('Error occurred. Please check the console.');
            console.error('Error:', error);
        }

        setLoading(false);
    };

    const renderFormFields = () => {
        switch (selectedTable) {
            case 'events':
            case 'masterclass':
            case 'certificate':
            case 'samvedna':
            case 'visits':
            case 'tcei':
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

            case 'alumni-sim':
                return (
                    <>
                        <input className='admin-input' type="date" name="date" value={formData.date || ''} onChange={handleInputChange} required />
                        <input className='admin-input' type="text" name="name" placeholder="Name" value={formData.name || ''} onChange={handleInputChange} required />
                        <input className='admin-input' type="text" name="designation" placeholder="Designation" value={formData.designation || ''} onChange={handleInputChange} />
                        <input className='admin-input' type="text" name="specialisation" placeholder="Specialisation" value={formData.specialisation || ''} onChange={handleInputChange} />

                        <input className='admin-input' type="text" name="meta_title" placeholder="Meta Title" value={formData.meta_title || ''} onChange={handleInputChange} />
                        <textarea className='admin-textarea' name="meta_description" placeholder="Meta Description" value={formData.meta_description || ''} onChange={handleInputChange}></textarea>
                        <textarea className='admin-textarea' name="meta_keywords" placeholder="Meta Keywords (comma separated)" value={formData.meta_keywords || ''} onChange={handleInputChange}></textarea>
                    </>
                );

            case 'alumni-talk':
            case 'guest-session':
                return (
                    <>
                        <input className='admin-input' type="date" name="date" value={formData.date || ''} onChange={handleInputChange} required />
                        <input className='admin-input' type="text" name="name" placeholder="Name" value={formData.name || ''} onChange={handleInputChange} required />
                        <input className='admin-input' type="text" name="designation" placeholder="Designation" value={formData.designation || ''} onChange={handleInputChange} />
                        <textarea className='admin-textarea' name="topic" placeholder="Topic" value={formData.topic || ''} onChange={handleInputChange}></textarea>

                        <input className='admin-input' type="text" name="meta_title" placeholder="Meta Title" value={formData.meta_title || ''} onChange={handleInputChange} />
                        <textarea className='admin-textarea' name="meta_description" placeholder="Meta Description" value={formData.meta_description || ''} onChange={handleInputChange}></textarea>
                        <textarea className='admin-textarea' name="meta_keywords" placeholder="Meta Keywords (comma separated)" value={formData.meta_keywords || ''} onChange={handleInputChange}></textarea>
                    </>
                );

            case 'blog':
                return (
                    <>
                        <input className='admin-input' type="text" name="title" placeholder="Title" value={formData.title || ''} onChange={handleInputChange} required />
                        <textarea className='admin-textarea' name="text" placeholder="Text" value={formData.text || ''} onChange={handleInputChange}></textarea>
                        <input className='admin-input' type="date" name="selected_date" value={formData.selected_date || ''} onChange={handleInputChange} required />
                        <input className='admin-input' type="text" name="future_title" placeholder="Future Title" value={formData.future_title || ''} onChange={handleInputChange} />

                        <label>Image 1:</label>
                        <input className='admin-input' type="file" name="image1" onChange={handleFileChange} accept="image/*" />
                        <input className='admin-input' type="text" name="image1_alt" placeholder="Image 1 Alt Text" value={formData.image1_alt || ''} onChange={handleInputChange} />

                        <input className='admin-input' type="text" name="meta_title" placeholder="Meta Title" value={formData.meta_title || ''} onChange={handleInputChange} />
                        <textarea className='admin-textarea' name="meta_description" placeholder="Meta Description" value={formData.meta_description || ''} onChange={handleInputChange}></textarea>
                        <textarea className='admin-textarea' name="meta_keywords" placeholder="Meta Keywords (comma separated)" value={formData.meta_keywords || ''} onChange={handleInputChange}></textarea>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="admin-page">
            <div className='admin-header'>
                <span>Admin Panel</span>
                <button 
                    onClick={handleLogout} 
                    className="logout-button"
                    title="Logout"
                >
                    Logout
                </button>
            </div>

            <label>Select Table:</label>
            <select className='admin-input' value={selectedTable} onChange={handleTableChange} required>
                <option value="">--Select--</option>
                <option value="events">Events</option>
                <option value="masterclass">Masterclass</option>
                <option value="guest-session">Guest Session</option>
                <option value="certificate">Certificate</option>
                <option value="samvedna">Samvedna</option>
                <option value="visits">Industrial Visits</option>
                <option value="tcei">TCEI</option>
                <option value="blog">Blog</option>
                <option value="alumni-sim">Alumni SIM</option>
                <option value="alumni-talk">Alumni Talk</option>
            </select>

            {selectedTable && (
                <form onSubmit={handleSubmit}>
                    {renderFormFields()}
                    <button type="submit" className="admin-button" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            )}

            {statusMessage && (
                <div className={`status-message ${statusMessage.includes('success') ? 'success' : 'error'}`}>
                    {statusMessage}
                </div>
            )}
        </div>
    );
};

export default Admin;