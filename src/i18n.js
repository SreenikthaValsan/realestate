import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Real estate: No Broker",
      scheduleAppointment: "Schedule your appointment!",
      welcome: "Welcome to our real estate website!",
      register: "Register Now",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      submit: "Submit",
      realEstate: "Real Estate",
      noBroker: "No Broker",
      bookYourDay: "BOOK YOUR DAY",
      fullName: "Full Name",
      phone: "Phone",
      date: "Date",
      time: "Time",
      bookNow: "Book Now",
      back: "Back"
    }
  },
  fr: {
    translation: {
      title: "Immobilier : Sans intermédiaire",
      scheduleAppointment: "Prenez rendez-vous !",
      welcome: "Bienvenue sur notre site immobilier !",
      register: "S'inscrire maintenant",
      firstName: "Prénom",
      lastName: "Nom",
      email: "E-mail",
      submit: "Soumettre",
      realEstate: "Immobilier",
      noBroker: "Sans intermédiaire",
      bookYourDay: "RÉSERVEZ VOTRE JOURNÉE",
      fullName: "Nom complet",
      phone: "Téléphone",
      date: "Date",
      time: "Heure",
      bookNow: "Réserver maintenant",
      back: "Retour"
    }
  },
  de: {
    translation: {
      title: "Immobilien: Ohne Makler",
      scheduleAppointment: "Termin vereinbaren!",
      welcome: "Willkommen auf unserer Immobilien-Website!",
      register: "Jetzt registrieren",
      firstName: "Vorname",
      lastName: "Nachname",
      email: "E-Mail",
      submit: "Einreichen",
      realEstate: "Immobilien",
      noBroker: "Ohne Makler",
      bookYourDay: "BUCHEN SIE IHREN TAG",
      fullName: "Vollständiger Name",
      phone: "Telefon",
      date: "Datum",
      time: "Uhrzeit",
      bookNow: "Jetzt buchen",
      back: "Zurück"
    }
  },
  es: {
    translation: {
      title: "Bienes raíces: Sin intermediarios",
      scheduleAppointment: "¡Programa tu cita!",
      welcome: "¡Bienvenido a nuestro sitio web de bienes raíces!",
      register: "Regístrate ahora",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      submit: "Enviar",
      realEstate: "Bienes raíces",
      noBroker: "Sin intermediarios",
      bookYourDay: "RESERVA TU DÍA",
      fullName: "Nombre completo",
      phone: "Teléfono",
      date: "Fecha",
      time: "Hora",
      bookNow: "Reservar ahora",
      back: "Regresar"
    }
  },
  pt: {
    translation: {
      title: "Imóveis: Sem Corretor",
      scheduleAppointment: "Agende sua consulta!",
      welcome: "Bem-vindo ao nosso site imobiliário!",
      register: "Registrar agora",
      firstName: "Primeiro Nome",
      lastName: "Sobrenome",
      email: "E-mail",
      submit: "Enviar",
      realEstate: "Imóveis",
      noBroker: "Sem Corretor",
      bookYourDay: "RESERVE SEU DIA",
      fullName: "Nome Completo",
      phone: "Telefone",
      date: "Data",
      time: "Hora",
      bookNow: "Reserve agora",
      back: "Voltar"
    }
  },
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
