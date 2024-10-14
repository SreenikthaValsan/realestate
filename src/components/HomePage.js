import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomePage.css';
import backgroundImage from '../images/background.jpg'

const HomePage = () => {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handleScheduleClick = () => {
    navigate('/register', { state: { language } });
  };

  return (
    <div className="language-selector" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{t('title')}</h1>
      <button onClick={handleScheduleClick} className="schedule-btn">
        {t('scheduleAppointment')} &raquo;
      </button>
      <select 
        value={language} 
        onChange={handleChangeLanguage}
        className="language-dropdown"
      >
        <option value="en">EN (English)</option>
        <option value="fr">FR (French)</option>
        <option value="de">DE (German)</option>
        <option value="es">ES (Spanish)</option>
        <option value="pt">PT (Portugese)</option>
      </select>
    </div>
  );
};

export default HomePage;