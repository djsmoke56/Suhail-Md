const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233539958864";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_42_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDMyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLREVSVFZRWW1SRDk1aEtWd204bm9aR25RdHoxSDFtMkFraFZzd3ZDRFlBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGN1c3ZTBUelJIbWVhMVVva202WjFBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwZjRlOTYzLTFhNDItNDE4ZC04MGYzLTRlYzE1NTgwNjAxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDUsXG4gICAgICAxODQsXG4gICAgICA2NyxcbiAgICAgIDIxMCxcbiAgICAgIDQ3LFxuICAgICAgNzQsXG4gICAgICAxMjgsXG4gICAgICA3OCxcbiAgICAgIDE3OCxcbiAgICAgIDIzLFxuICAgICAgMTQsXG4gICAgICAxMDMsXG4gICAgICAxMzksXG4gICAgICAxNDMsXG4gICAgICAyNCxcbiAgICAgIDIzNCxcbiAgICAgIDEwNyxcbiAgICAgIDExNyxcbiAgICAgIDEzMSxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NSxcbiAgICAgIDEwNyxcbiAgICAgIDUyLFxuICAgICAgMTIzLFxuICAgICAgMTk2LFxuICAgICAgMjQxLFxuICAgICAgMjQ5LFxuICAgICAgMjI4LFxuICAgICAgMjE2LFxuICAgICAgMTU1LFxuICAgICAgMjUyLFxuICAgICAgODcsXG4gICAgICAxNDUsXG4gICAgICAyMjMsXG4gICAgICA4MSxcbiAgICAgIDEwNixcbiAgICAgIDMzLFxuICAgICAgNzQsXG4gICAgICAyNDcsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRWjlYVlBYVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM5OTU4ODY0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU01PS0UgQURTXCIsXG4gICAgXCJsaWRcIjogXCI4NDEzMDM1NjI4NTY3MjozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMT1d4aE1Rdy8yOXRBWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpNa1hZaTltZitsWEhSMHdzaGd1UnQ2VFFZNW1jcmd1ZDlBN2YvTHQzRWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ3VEYnY4OTM4YjFmQ2wyY3IybmFUM09KTFc0YXppU1hsOEF5TjIxOWw4YXJYMkZPWGw5elR4cis0d1FneERsY0RBQWxZV2J3eXRZZUxmZzVNVVBuQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWhaOERYVXJnK1RmeDNXSU4zUjJpTlpyakJrSmZERnJzVjRzd3FkUUUvK3llTHdUK0dlMDcyeWVtcmp5bW5vakpRWDRBRTdZZm04ODlDZkg3YzBRZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTM5OTU4ODY0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDY4MDEzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY4OVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjg5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVkVEWW5GaEU0RGZTK3AwMEU3Y2RqUURaUFhYNFdORk1aNkVqWVl3MWI5UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDk5NTYzNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwNTY4MDg3NDU2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
