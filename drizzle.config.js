import { defineConfig } from "drizzle-kit";
export default defineConfig( {
    dialect: "postgresql",
  schema: "./db/schema.js",
  out:"./drizzle",
  driver: "pglite",
  dbCredentials: {
    host: "localhost",
    port: "5432", // Default PostgreSQL port
    user: "postgres",
    password:"2110",// Ensure this matches the cor, // Ensure this matches the correct password
    database: "postgres",
  },
  
});