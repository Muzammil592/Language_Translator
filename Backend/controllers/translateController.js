const axios = require('axios');

const translateText = async (req, res) => {
    const { text, targetLanguage } = req.body;

    if (!text || !targetLanguage) {
        return res.status(400).json({ error: "Text and target language are required!" });
    }

    const options = {
        method: 'POST',
        url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/json',
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            from: 'auto',
            to: targetLanguage,
            protected_paths: [],
            common_protected_paths: [],
            json: {
                text: text // Custom key passed here
            }
        }
    };

    try {
        const response = await axios.request(options);
        
        // Exact mapping based on your test response tree
        // response.data -> trans -> text
        const translatedText = response.data?.trans?.text || "Translation processing error";
        
        res.status(200).json({ originalText: text, translatedText });
    } catch (error) {
        console.error("RapidAPI Engine Error:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Translation engine failed to process request." });
    }
};

module.exports = { translateText };