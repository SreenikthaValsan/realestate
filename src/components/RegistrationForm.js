import React, { useEffect } from 'react';
import { useLocation , useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './RegisterationForm.css';
import backgroundImage from '../images/background.jpg'

const RegistrationForm = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
        // Use the selected language from the previous page
        const selectedLanguage = location.state?.language || 'en';
        i18n.changeLanguage(selectedLanguage);
    }, [location.state, i18n]);
    
const handleBackClick = () => {
        navigate('/'); // Assuming '/' is the path for LanguageSelector
    };
  
    return (
      <div className="booking-container" style={{ backgroundImage: `url(${backgroundImage})`}}>
        {/* <div className="title-section">
          <h1 className="main-title">
            {t('realEstate')}: <br />
            {t('noBroker')}
          </h1>
        </div> */}
        <div className="form-section">
          <div className="form-wrapper">
            <h2 className="form-title">{t('bookYourDay')}</h2>
            <form className="booking-form">
              <input type="text" placeholder={t('fullName')} />
              <input type="email" placeholder={t('email')} />
              <input type="tel" placeholder={t('phone')} />
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