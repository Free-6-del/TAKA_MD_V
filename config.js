//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "diorrebero84@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/TAKA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/237659079843 , https://wa.me/237690768603";
global.sudo = process.env.SUDO || "237659079843";
global.owner = process.env.OWNER_NUMBER || "PUT YOUR OWNER NUMBER";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZIcmdxMFRNNjRvd0V1Z0FOL0YxN2lKNVZ0bGt6cCtNSFhGdGpSQVdFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFdmOHJVM00vM1lJeTFHMlZLYUd4VEo1cVV5QnY0UjREaGRENzZqRURnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSHIvTGJhVGhkbTMzSFo0Q1F1WWJyM1pPU0wzVDl4WVhxejY2RllwakYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQU9uMjFVa3ZKbytZL2U0eGQ5ZEVISndwTEltRjVRQUc0dkE5d3F0SEdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLNEtqblJUMWVZNExqOHJrS1FmcENoQ0g4cVhzOUJrUkg1cm9SSEw5VTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit5SWhBbytBV0xCSVpmTjJrNE8xZGtZTmZjelBjamxHeHMxN1JkQ3hVbFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lCeUx6UWtwWXovTW9IKzNNOVYvdzVLbzMzZFdIT01TaWVzdStYQXNHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzlZS3NFeHovZlpjTGZLNnlKa1Z4RUQrUWNBV0wvenZNQzgwWEs0UlBoZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh6WjNBTE5EVUhmQkt3SFFobGdHaHU4UTlNUEpJSE9RZ04rODIrWUYvV3poakRMZk5CYVFGeU4wdjhnZlNCbGxGK0ozMEJMS25hMmZpdExzSktadkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdlNlY3JldEtleSI6IklYYkdoTEJwbUVTc0hDYkY1dHRGT2dRSG5sSlVjK2pyRDN3VnoyejkwUFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5Mzk5NTA4NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTc1M0ZGNjA0RTVFRjZDMTJENjZENTIxNUZGRUQwQzEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDk0NzY4Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMmJpaWZNdEdSa2lJazh0a2ZjcGVMUSIsInBob25lSWQiOiIyYWRjOTQwNy05ZDg1LTQ0MTItOWY0Mi0wN2NkM2IxYWVhYzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienEyMS9yN3RBenlPYVJISXJNWHJUUUJtdkNvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNEbzdydGtCcUFrMCsraHJyMUVhS2oyZUlBST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWUEY0Q0Q5WiIsIm1lIjp7ImlkIjoiNTA5Mzk5NTA4NjM6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2pOc3FFSEVOVFVzTGtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidSsvOHdSbnZyTVVMWnViMjQ3YmJ6K3hkcGt5R2Q4UUxYNEhKbnNKZDVYND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQnk5R1ZNNVB2TUg3T0hVT2ZrWGxTbXpXRUdTNkZiU0lkcjVqQWliQlBnVEYxdCt0OGp4Z2FDZjZGazE1bGRncE02eGZ4eFdxTDVLQnkxRmN6cXQ1Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlRLOGd0dDVVK0Ewa1lLOHQ2QTB6VGFLQm1MQy8xV1NNUUpIdHVvSFBqZDNCaGtXT0RJM2E1N1BidGpMSnJHUzduOTkzTld0MUVTVFJnK0tYa1Qwd0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5Mzk5NTA4NjM6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJidnYvTUVaNzZ6RkMyYm05dU8yMjgvc1hhWk1obmZFQzErQnlaN0NYZVYrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwOTQ3NjgxfQ==
  process.env.SESSION_ID ||
  "PUT YOUR SESSION HERE"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜TAKA_TECH⌝☜`",
  author: process.env.PACK_AUTHER || "John Rood ",
  packname: process.env.PACK_NAME || "TAKA MD",
  botname: process.env.BOT_NAME || "John Rood",
  ownername: process.env.OWNER_NAME || "john Rood",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TAKA").toUpperCase(),
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
