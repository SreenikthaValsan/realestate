import React, { useEffect, useState , useRef} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './RegisterationForm.css';
import backgroundImage from '../images/background.jpg';
import countries from '../translation/countries'

const RegistrationForm = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [budget, setBudget] = useState([100000, 500000]);
    const [propertyType, setPropertyType] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneInputRef = useRef(null);
    const [phoneInputFocused, setPhoneInputFocused] = useState(false);

    const handlePhoneChange = (event) => {
      const input = event.target.value;
      const countryCode = selectedCountry?.callingCode || '91';
      
      // Remove all non-digit characters except the leading '+' and space after country code
      const digitsOnly = input.replace(/^\+\d+\s?/, '').replace(/\D/g, '');
      
      if (input.startsWith(`+${countryCode} `)) {
          setPhoneNumber(`+${countryCode} ${digitsOnly}`);
      } else {
          setPhoneNumber(`+${countryCode} ${digitsOnly}`);
      }
  };

  const handlePhoneFocus = () => {
      setPhoneInputFocused(true);
      if (phoneNumber === '') {
          const countryCode = selectedCountry?.callingCode || '91';
          setPhoneNumber(`+${countryCode} `);
      }
  };

  const handlePhoneBlur = () => {
      setPhoneInputFocused(false);
      if (phoneNumber === `+${selectedCountry?.callingCode || '91'} `) {
          setPhoneNumber('');
      }
  };

  useEffect(() => {
      if (phoneInputFocused && phoneInputRef.current) {
          const countryCode = selectedCountry?.callingCode || '91';
          phoneInputRef.current.setSelectionRange(
              countryCode.length + 2,
              countryCode.length + 2
          );
      }
  }, [phoneInputFocused, selectedCountry]);

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

    const handleCountryChange = (event) => {
      const country = countries.find(c => c.code === event.target.value);
      setSelectedCountry(country);
      setPhoneNumber(''); // Reset phone number when country changes
  };


    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: selectedCountry?.currency || 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };
  
    return (
        <div className="booking-container" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className="form-section">
                <div className="form-wrapper">
                    <h2 className="form-title">{t('bookYourDay')}</h2>
                    <form className="booking-form">
                        <input type="text" placeholder={t('fullName')} />
                        <input type="email" placeholder={t('email')} />
                        <select 
                            value={selectedCountry?.code || ''} 
                            onChange={handleCountryChange}
                            className={!selectedCountry ? 'placeholder' : ''}
                        >
                            <option value="" disabled hidden>{t('selectCountry')}</option>
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.flag} {country.name}
                                </option>
                            ))}
                        </select>
                        <div className="phone-input-container">
                            <input 
                                ref={phoneInputRef}
                                type="tel" 
                                placeholder={`+${selectedCountry?.callingCode || '91'}`}
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                onFocus={handlePhoneFocus}
                                onBlur={handlePhoneBlur}
                                className="phone-input"
                            />
                        </div>
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
                            <label htmlFor="budget-min">
                                {t('budgetRange')}: {formatCurrency(budget[0])} - {formatCurrency(budget[1])}
                            </label>
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