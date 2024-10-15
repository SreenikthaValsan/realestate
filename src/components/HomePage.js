import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomePage.css';
import backgroundImage from '../images/background.jpg';

const timezoneToLanguageMap = {
  "America/New_York": "en",
  "Europe/Paris": "fr",
  "Europe/Berlin": "de",
  "Europe/Madrid": "es",
  "America/Sao_Paulo": "pt",
  "Asia/Dubai": "ar", 
  "Asia/Riyadh": "ar"
};

const HomePage = () => {
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Detect user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("time",Intl.DateTimeFormat().resolvedOptions().timeZone)
    
    // Map the timezone to a language
    const detectedLanguage = timezoneToLanguageMap[userTimezone] || 'en';
    
    // Set the language and change in i18n
    setLanguage(detectedLanguage);
    i18n.changeLanguage(detectedLanguage);
  }, [i18n]);

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
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
        <option value="pt">PT (Portuguese)</option>
        <option value="ar">AR (Arabic)</option>
      </select>
    </div>
  );
};

export default HomePage;
