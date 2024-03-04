import React, { useState } from 'react';

const TareaFormMas = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [validationErrors, setValidationErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setValidationErrors((prevErrors) => {
            const errors = { ...prevErrors };

            switch (name) {
                case 'firstName':
                case 'lastName':
                    errors[name] = value.length < 2 ? `${name} must be at least 2 characters.` : '';
                    break;
                case 'email':
                    errors[name] = value.length < 5 ? `${name} must be at least 5 characters.` : '';
                    break;
                case 'password':
                    errors[name] = value.length < 8 ? `${name} must be at least 8 characters.` : '';
                    break;
                case 'confirmPassword':
                    errors[name] = value !== formData.password ? 'muts match.' : '';
                    break;
                default:
                    break;
            }

            return errors;
        });
    };

    return (
        <div className="container mt-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    
                </div>
                <p className="text-danger">{validationErrors.firstName}</p>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    
                </div>
                <p className="text-danger">{validationErrors.lastName}</p>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    
                </div>
                <p className="text-danger">{validationErrors.email}</p>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    
                </div>
                <p className="text-danger">{validationErrors.password}</p>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    
                </div>
                <p className="text-danger">{validationErrors.confirmPassword}</p>
            </form>


        </div>
    );
};

export default TareaFormMas;
