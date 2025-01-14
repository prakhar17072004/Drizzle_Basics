// Make sure to install the 'pg' package 
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const client = new pg.Client({
    host : "localhost",
    port:"5232",
    user:"postgres",
    password:"PRank@2004",
    database:"postgres",
})
client.connect().then(()=>{
    console.log("Connection is successful")
}).catch((err)=>{
    console.log(err)
});
const db = drizzle( client);
 
export default db;
