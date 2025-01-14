import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

// Update username to match the PostgreSQL username, case-sensitive
const client = new pg.Client({
    host: "localhost",
    port: "5432", // Default PostgreSQL port
    user: "postgres", // Ensure this matches the correct username in PostgreSQL
    password: "123456789", // Ensure this matches the correct password
    database: "db_prakhar", // Ensure this matches your database
});

client.connect()
    .then(() => {
        console.log("Connection is successful");
    })
    .catch((err) => {
        console.log("Connection error: ", err);
    });

const db = drizzle(client);
export default db;
