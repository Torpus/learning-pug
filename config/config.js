const {
  MONGODB_URL,
  MONGODB_PORT,
  // MONGODB_USER,
  // MONGODB_PASSWD,
  PORT,
} = process.env;

module.exports = {
  port: PORT || 3000,
  mongoUrl: MONGODB_URL || "localhost",
  mongoPort: MONGODB_PORT || 27017,
};