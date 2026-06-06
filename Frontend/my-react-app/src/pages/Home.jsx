import React, { useState } from 'react';
import LanguageDropdown from '../components/LanguageDropdown';

function Home() {
    const [text, setText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('');
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTranslate = async () => {
        if (!text || !targetLanguage) {
            alert("Please fill the text field and select a destination country!");
            return;
        }

        setLoading(true);
        try {
            // Hitting our custom Node.js backend endpoint
            const response = await fetch('http://localhost:5000/api/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text,
                    targetLanguage
                })
            });

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const data = await response.json();
            setResult(data.translatedText);
        } catch (error) {
            console.error("Translation Client Error", error);
            setResult("Error processing translation. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="theme-page">
            <div className="theme-frame">
                <main className="theme-hero">
                    <section className="theme-left">
                        <p className="theme-eyebrow">Languages</p>
                        <h1>Translation</h1>
                        <p className="theme-subtext">
                            Convert English text into global languages with a clean, quick, and reliable translator.
                        </p>

                        <div className="theme-controls">
                            <label className="theme-label" htmlFor="source-text">Your text</label>
                            <textarea
                                id="source-text"
                                rows="5"
                                className="theme-textarea"
                                placeholder="Type your English text here..."
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />

                            <label className="theme-label" htmlFor="language-select">Destination language</label>
                            <div id="language-select" className="theme-select-wrap">
                                <LanguageDropdown
                                    selectedLang={targetLanguage}
                                    onChangeLang={setTargetLanguage}
                                />
                            </div>

                            <button
                                type="button"
                                onClick={handleTranslate}
                                className="theme-button"
                                disabled={loading}
                            >
                                {loading ? "Translating..." : "Translate The Text"}
                            </button>
                        </div>

                        {result && (
                            <div className="theme-result" role="status" aria-live="polite">
                                <strong>Translated Result:</strong>
                                <p>{result}</p>
                            </div>
                        )}
                    </section>

                    <section className="theme-right" aria-hidden="true">
                        <div className="art-phone">
                            <div className="art-screen">Halo</div>
                        </div>
                        <div className="art-card art-a">A</div>
                        <div className="art-card art-char">文</div>
                        <div className="art-bubble art-bonjour">Bonjour</div>
                        <div className="art-bubble art-hello">Hello</div>
                        <div className="art-dot-grid"></div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Home;