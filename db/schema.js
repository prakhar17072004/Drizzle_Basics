import { foreignKey, ForeignKey, int } from 'drizzle-orm/mysql-core';
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';


export const authers = pgTable('auther', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 25 }).notNull(),
    email: varchar('email', { length: 25 }).notNull().unique(),
    
});
export const books = pgTable('books', {
    id: serial('id').primaryKey(),
    title: varchar('name', { length: 25 }).notNull(),
    genre: varchar('genre',{length:100}),
    authers_id:int().foreignKey(),
    
    
});