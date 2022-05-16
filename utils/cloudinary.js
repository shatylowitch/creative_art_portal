require("dotenv/config");
const cloudinary = require("cloudinary");

cloudinary.config({ 
  cloud_name: 'drahvb8yp', 
  api_key: '891886137845687', 
  api_secret: 'jbXXsLTlNzM2e6ouiRmc0PDFZNM' 
});

module.exports = { cloudinary };