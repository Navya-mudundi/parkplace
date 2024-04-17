import React, { useState } from 'react';


const Register= () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    postalCode: '',
    isAgent: '',
    referralSource: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit your form data here
      console.log('Form submitted:', formData);
      // Clear form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        postalCode: '',
        isAgent: '',
        referralSource: '',
        comments: ''
      });
    }
  };

  return (
    <div className="register-form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name *</label><br/>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label>Last Name *</label><br/>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label>Email *</label><br/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Phone No *</label><br/>
          <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} />
          {errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
        </div>
        <div className="form-group">
          <label>Postal Code *</label><br/>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}
        </div>
        <div className="form-group">
          <label>Are you an agent? *</label><br/>
          <select name="isAgent" value={formData.isAgent} onChange={handleChange}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.isAgent && <p className="error">{errors.isAgent}</p>}
        </div>
        <div className="form-group"><br/>
          <label>How did you hear about us? *</label><br/>
          <select name="referralSource" value={formData.referralSource} onChange={handleChange}>
            <option value="">Select</option>
            <option value="friend">Friend</option>
            <option value="website">Website</option>
            <option value="advertisement">Advertisement</option>
            <option value="other">Other</option>
          </select>
          {errors.referralSource && <p className="error">{errors.referralSource}</p>}
        </div>
        <div className="form-group">
          <label>Comments</label><br/>
          <textarea name="comments" placeholder='Additional Comments or Questions' value={formData.comments} onChange={handleChange} />
        </div>
        <button style={{backgroundColor:"black",padding:"15px 50px 15px 50px",color:"white"}}type="submit">Submit</button>
      </form>
      <br/>
      <br/>
      <p classname='register-p'>If you wish to stop receiving this information at any time simply contact Compass RE Texas LLC at 2215 Westlake Drive or email and indicate that you do not wish to receive further information.</p>
    </div>
  );
};

export default Register;
