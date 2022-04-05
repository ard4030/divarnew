const Application = require("./app/server");
const DB_URL = "mongodb://localhost:27017/DivarDb";
require("dotenv").config();
new Application(DB_URL,3900);