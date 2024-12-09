//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349073315641";
global.owner = process.env.OWNER_NUMBER || "2349073315641";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0J0K3A3dmRSMFV4Z25QbnFhUXVKaUdaM1lxaEZ3dE1mdW5reHhXOU1sZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHp3a2s5UVFzSlU2SXdLZkpCaTZ0L05Ndkt4Skc5OGE5OTdQYXUwR2czMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQnFlWmkyV2pFd2J2SDNzK2pHdFBoY2dNVWcwMnNNeXBKMkQzMVY0UEc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCRk9kYlBvdjZBdUJJZ1ZNOEVWMlVuTVJ5L1B0UnJHbjMwRTd0cjJTWkd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllOQ1praTVFemZTNXZmTkRZc2VmSmg1WThpV2ROM2M1RGVPZTdFTnNjSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt0cDZGNzhzNTdibnBqRS9hRDlISjkwVE9BSUtTOXJDSkhESTNtL0N1VkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dsOEc0R3BNaVdUeHM3NWNJK2xBUXlFemN5Zk5KbkJFU2JXS2NLNkdrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGxtSXllYWx5Wk82MUdoM2RYUk9HL1RicW81STJGZFVzVHd6TXVFcHgxaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxoakZ3WCtFNUNaalEvSExoWnlGdGpjZXc3cjJKdTJaT3o4QVJHZUErZFUrK3haUjQxbVpsZkRIcjg3VUw5MTNWUy9MMlhwUVpaZlRxRnpzdmNlWGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6InEwS21BODhVSDZzQ0NaWHVhbmtxRnovL3g4RjF0TE95UXV2NndHUEFPamc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikt3NXk3U2ZyU1ptUTNrRkc4aG5WeHciLCJwaG9uZUlkIjoiNGMwNWYxMzctN2Q5YS00MjgxLTgzMzctZGUwMmVkMzEyYzRjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRROHpyaFU0eWdLL1NnODc3TmVJaWlENVAzVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3eTZGTTdHd0JNeFBzTEpNSVg5MzBJMHY3bGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjVaMTE3R1EiLCJtZSI6eyJpZCI6IjIzNDkwNzMzMTU2NDE6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJOSUtLQSBWMyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSy84c0s0QkVJaXMycm9HR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM3l4elA3ZG14UjNJdnJqM2hrOHpIUWNRcm1GazhFSWdrdC9SZ1BjelR4QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU0t3blloSXZQZU9TVlZiYVFrTHRjUHpaUzhEQTNyRDFCeE5ZaW1rcWVyWVh4ZUdZZnh1ZFVib3kvL1MrSjFlWmw0ZlBRbk5aSWs5VXJiOGZ0SzQ2REE9PSIsImRldmljZVNpZ25hdHVyZSI6IllQNVdRUkJqMzFxeGc5bHhvNGdXaXdmdlFDc1BsUW1ybnVVNlFlbnZCSSt0MFpldTZ6YXdEQW9GYVI0bnVXUEFKcXVhN1c1V0Y2VmxkYVN1RGhBNmh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA3MzMxNTY0MTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ4c2N6KzNac1VkeUw2NDk0WlBNeDBIRUs1aFpQQkNJSkxmMFlEM00wOFEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM3Mjc3NjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFEvIn0==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "OLAMILEKAN MD",
  ownername: process.env.OWNER_NAME || "HAKI",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
