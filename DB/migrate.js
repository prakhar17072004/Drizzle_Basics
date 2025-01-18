import { migrate } from "drizzle-orm/pglite/migrator";
import {db} from "./DB_Connect"

async function migrateData() {
    await migrate(db,{migrationFolder:'/data'});
    process.exit(0);
}
migrateData().catch(err=>{
    console.log(err);
})
