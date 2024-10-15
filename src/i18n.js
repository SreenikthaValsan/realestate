import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Real estate: No Broker",
      scheduleAppointment: "Schedule your appointment!",
      email: "Email",
      bookYourDay: "BOOK YOUR DAY",
      fullName: "Full Name",
      phone: "Phone",
      date: "Date",
      time: "Time",
      propertyType: "Property Type",
      apartment: "Apartment",
      house: "House",
      condo: "Condo",
      townhouse: "Townhouse",
      budgetRange: "Budget Range",
      bookNow: "Book Now",
      back: "Back"
    }
  },
  fr: {
    translation: {
      title: "Immobilier : Sans intermédiaire",
      scheduleAppointment: "Prenez rendez-vous !",
      email: "E-mail",
      bookYourDay: "RÉSERVEZ VOTRE JOURNÉE",
      fullName: "Nom complet",
      phone: "Téléphone",
      date: "Date",
      time: "Heure",
      propertyType: "Type de propriété",
      apartment: "Appartement",
      house: "Maison",
      condo: "Condominium",
      townhouse: "Maison de ville",
      budgetRange: "Gamme de budget",
      bookNow: "Réserver maintenant",
      back: "Retour"
    }
  },
  de: {
    translation: {
      title: "Immobilien: Ohne Makler",
      scheduleAppointment: "Termin vereinbaren!",
      email: "E-Mail",
      bookYourDay: "BUCHEN SIE IHREN TAG",
      fullName: "Vollständiger Name",
      phone: "Telefon",
      date: "Datum",
      time: "Uhrzeit",
      propertyType: "Immobilientyp",
      apartment: "Wohnung",
      house: "Haus",
      condo: "Eigentumswohnung",
      townhouse: "Reihenhaus",
      budgetRange: "Budgetbereich",
      bookNow: "Jetzt buchen",
      back: "Zurück"
    }
  },
  es: {
    translation: {
      title: "Bienes raíces: Sin intermediarios",
      scheduleAppointment: "¡Programa tu cita!",
      email: "Correo electrónico",
      bookYourDay: "RESERVA TU DÍA",
      fullName: "Nombre completo",
      phone: "Teléfono",
      date: "Fecha",
      time: "Hora",
      propertyType: "Tipo de propiedad",
      apartment: "Apartamento",
      house: "Casa",
      condo: "Condominio",
      townhouse: "Casa adosada",
      budgetRange: "Rango de presupuesto",
      bookNow: "Reservar ahora",
      back: "Regresar"
    }
  },
  pt: {
    translation: {
      title: "Imóveis: Sem Corretor",
      scheduleAppointment: "Agende sua consulta!",
      email: "E-mail",
      bookYourDay: "RESERVE SEU DIA",
      fullName: "Nome Completo",
      phone: "Telefone",
      date: "Data",
      time: "Hora",
      propertyType: "Tipo de propriedade",
      apartment: "Apartamento",
      house: "Casa",
      condo: "Condomínio",
      townhouse: "Casa geminada",
      budgetRange: "Faixa de orçamento",
      bookNow: "Reserve agora",
      back: "Voltar"
    }
  },
  ar: {
    translation: {
      title: "العقارات: بدون وسيط",
      scheduleAppointment: "حدد موعدك!",
      email: "البريد الإلكتروني",
      bookYourDay: "احجز يومك",
      fullName: "الاسم الكامل",
      phone: "الهاتف",
      date: "التاريخ",
      time: "الوقت",
      propertyType: "نوع العقار",
      apartment: "شقة",
      house: "منزل",
      condo: "شقة سكنية",
      townhouse: "بيت مستقل",
      budgetRange: "نطاق الميزانية",
      bookNow: "احجز الآن",
      back: "رجوع"
    }
  }
  
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
