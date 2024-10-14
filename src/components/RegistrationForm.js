import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './RegisterationForm.css';
import backgroundImage from '../images/background.jpg';

const RegistrationForm = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [budget, setBudget] = useState([100000, 500000]); // Default min and max budget
    const [propertyType, setPropertyType] = useState('');

    useEffect(() => {
        const selectedLanguage = location.state?.language || 'en';
        i18n.changeLanguage(selectedLanguage);
    }, [location.state, i18n]);
    
    const handleBackClick = () => {
        navigate('/');
    };

    const handleBudgetChange = (event, index) => {
        const newBudget = [...budget];
        newBudget[index] = parseInt(event.target.value);
        setBudget(newBudget);
    };

    const handlePropertyTypeChange = (event) => {
        setPropertyType(event.target.value);
    };
  
    return (
      <div className="booking-container" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <div className="form-section">
          <div className="form-wrapper">
            <h2 className="form-title">{t('bookYourDay')}</h2>
            <form className="booking-form">
              <input type="text" placeholder={t('fullName')} />
              <input type="email" placeholder={t('email')} />
              <input type="tel" placeholder={t('phone')} />
              <select 
                value={propertyType} 
                onChange={handlePropertyTypeChange}
                className={propertyType === '' ? 'placeholder' : ''}
              >
                <option value="" disabled hidden>{t('propertyType')}</option>
                <option value="apartment">{t('apartment')}</option>
                <option value="house">{t('house')}</option>
                <option value="condo">{t('condo')}</option>
                <option value="townhouse">{t('townhouse')}</option>
              </select>
              <div className="slider-container">
                <label htmlFor="budget-min">{t('budgetRange')}: ${budget[0].toLocaleString()} - ${budget[1].toLocaleString()}</label>
                <input 
                  type="range" 
                  id="budget-min" 
                  min="100000" 
                  max="1000000" 
                  step="10000" 
                  value={budget[0]} 
                  onChange={(e) => handleBudgetChange(e, 0)}
                />
                <input 
                  type="range" 
                  id="budget-max" 
                  min="100000" 
                  max="1000000" 
                  step="10000" 
                  value={budget[1]} 
                  onChange={(e) => handleBudgetChange(e, 1)}
                />
              </div>
              <div className="date-time-container">
                <input type="date" placeholder={t('date')} />
                <input type="time" placeholder={t('time')} />
              </div>
              <button type="submit">{t('bookNow')}</button>
            </form>
            <button onClick={handleBackClick} className="back-button">
              {t('back')}
            </button>
          </div>
        </div>
      </div>
    );
};

export default RegistrationForm;