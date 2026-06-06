import React from 'react';

const languages = [
    { code: 'es', name: 'Spain (Spanish)' },
    { code: 'fr', name: 'France (French)' },
    { code: 'de', name: 'Germany (German)' },
    { code: 'zh', name: 'China (Chinese)' },
    { code: 'ur', name: 'Pakistan (Urdu)' },
    { code: 'ar', name: 'Saudi Arabia (Arabic)' },
    { code: 'it', name: 'Italy (Italian)' }
];

function LanguageDropdown({ selectedLang, onChangeLang }) {
    return (
        <select 
            className="theme-select"
            value={selectedLang} 
            onChange={(e) => onChangeLang(e.target.value)}
        >
            <option value="">Select Country/Language</option>
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    );
}

export default LanguageDropdown;