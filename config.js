//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349040266436";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0Q2QmR2dlhYZFBvZTVUVWUwbUFiU1VKWFZQaEgxZWlsK1BnOThUaW0yZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnJhTlpNTStHd2IrVGNodXljUVhXTzNSVWNxK0dYbGRzUnRNM1A3elpoMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTWNBUG5OWGFpekZsV1Nsa29Qc212eDhUOWtPOXpDc25QWk5pOGpIMVVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyc2VrYVhsRGdWbnpSSGwxZVhwOUloL2Nhb0pEODV5SUdGUlpqbk51TFJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMeXBQYzFmUi94RkhLVGxDUmN4Q3lKUCtLZFFXcnpOVzRlQTBZTkJYM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9WVjZWTzNjU2xldE5WdWdZaVd1b0FaRW14RWNjZmRKWkR6WUNiTXZ0U3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJ5MW5mcUFJUk15NHZrMUUvcE5pK3pEL2RIa1RERGJ6UldUTTAzdHlHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tWWnpMU09XWlVKNzdZUlVLMDFNKzIrRDl4YkkxVlpWZERGMlFzY2YwWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImREOHh3QXpZVXFvODNzNis0Qm5xV3dQSzlWKzFHV0diZ0REM25URmtEd0JqbG1yTmRkMDB0ZDY0dklsVDJiNk1wOVpOdFJQVUE4SVFudmJrTDZiQkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJTN0ZoNjFpWnB1Z3RsMGhKZk5VWHM4cG56c2xjVGdkenR6b1lmUlpJYTlNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqUEJnbjlvWlN5dW1zOFdTSkpoUWJBIiwicGhvbmVJZCI6IjVlOWZmMjAzLTY1NWItNDIyOC1hYzBhLTczYTdkM2FmNWE3YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXeTNnUTkvUUQrSkIxcmF5S1dPajZMQUlYRU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHBVVHZXTXBPWlB0dVNSS3g1cDNZQ0QxUHZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRYN1pNNjVKIiwibWUiOnsiaWQiOiIyMzQ5MDQwMjY2NDM2OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1yIERhdmlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTGhqcmtHRU0yWmdyWUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIc2hZbWErd05aNnJOeWozaVo1SGNKL285c1pDMHZVU1NkS3c2Ui9VOVc4PSIsImFjY291bnRTaWduYXR1cmUiOiJWeW9HK1lNTDRMa1RQWXZZL1BORUVHVHc2cno4V2MzMlY1clh1bm5mMVNxa1BMK2hMUVhnK202K1RMNXc3NVVMNE1GM3phQmR5Yzhid2x0Zk1WSzVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTFRVOG1DaDAvTGY4amRYRnhDbmdYN0tJMFdlV3NCVWdpSkVKQ0M4cGFQVjc1Wkg2T25sTms0TXFnNDJqdGZaUUJqU1F2Qld6MWhrZ3VtcFlhSC85Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQwMjY2NDM2OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlI3SVdKbXZzRFdlcXpjbzk0bWVSM0NmNlBiR1F0TDFFa25Tc09rZjFQVnYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM4OTUwMDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUw2In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
