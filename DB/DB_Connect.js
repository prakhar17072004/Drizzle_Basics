import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as dotenv from 'dotenv';

dotenv.config(); // Load the .env file

const client = new pg.Client({
    // connectionString: process.env.DATABASE_URL, // Use the DATABASE_URL from the .env file
    host: "localhost",
    port: "5432", // Default PostgreSQL port
    user: "postgres",
    password:"2110",// Ensure this matches the cor, // Ensure this matches the correct password
    database: "postgres", 
});
console.log(process.env.DATABASE_URL); // Verify the connection string

client.connect()
    .then(() => {
        console.log("Connection is successful");
    })
    .catch((err) => {
        console.log("Connection error: ", err);
    });

const db = drizzle(client);
export default db;
