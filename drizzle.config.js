
export default {
    dialect: "postgresql",
  schema: "./schema.js",
  out:"drizzle",
  driver: "pg",
  dbCredentials: {
    host: "localhost",
    port: "5432", // Default PostgreSQL port
    user: "postgres",
    password:"2110",// Ensure this matches the cor, // Ensure this matches the correct password
    database: "postgres",
  },
  
};