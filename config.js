dcconst fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fm51UITS#OJEbol_JzdBRFHN8b-qzlFmnZMhrhqpt_ZXdzJLRN6k",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2a06381b260c3f096a612.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M SILENT-SOBX-MD WHATSAPP BOT 😊♻️",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "➺ѕเℓεɳƭ_ℓσѵε૨࿐",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
