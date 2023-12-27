import { useState } from "react";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Default language is English

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "bn" : "en"; // Toggle between English and Bengali (you can adjust as needed)
    setCurrentLanguage(newLanguage);

    // Here you can implement logic to update your application's language globally
    // You might use a library like i18next or your own language management system.
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn border border-light text-light ms-4 py-1 px-3"
    >
      {currentLanguage}
    </button>
  );
};

export default LanguageSwitcher;
