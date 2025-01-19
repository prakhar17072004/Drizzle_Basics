import { migrate } from "drizzle-orm/postgres-js/migrator";
import db from "./DB_Connect.js"

async function migrateData() {
    await migrate(db , {migrationFolder:'../drizzle'});
    process.exit(0);
}
migrateData().catch(err=>{
    console.log(err);
    process.exit(0);
})