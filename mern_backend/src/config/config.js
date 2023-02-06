require("dotenv").config();

const config = {
  port: process.env.PORT,
  secret: process.env.JWT_SECRET || "Your secret key",
  mongo: process.env.MONGO,
};

export default config;
