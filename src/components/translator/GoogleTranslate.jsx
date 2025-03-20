import React, { useEffect } from 'react';
// import { GlobeAltIcon } from '@heroicons/react/solid'; // Importing a global icon from heroicons

const GoogleTranslate = () => {
  useEffect(() => {
    // Initialize Google Translate script after component mounts
    const addGoogleTranslateScript = document.createElement('script');
    addGoogleTranslateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addGoogleTranslateScript);

    // Define the Google Translate callback function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,zh-CN', // You can adjust this to include specific languages
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className='fixed bottom-5 left-5 z-50'>
      {/* Global icon and dropdown container */}
      <div className="relative group">
        <button className="p-2 bg-[#003B6C] rounded-full shadow-lg hover:bg-blue-700 focus:outline-none">
          <div className="w-10 h-10 text-white flex flex-custom-center text-2xl" >🌐</div>
        </button>

        {/* Dropdown container for language selection */}
        <div
          id="google_translate_element"
          className='absolute hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-md p-3'
          style={{ width: '8rem', bottom: '50px',height:'5rem',overflow:'hidden' }} // Adjusting positioning to show above the icon
        ></div>
      </div>
    </div>
  );
};

export default GoogleTranslate;
