import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

// Define a "users" table
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 25 }).notNull(),
    email: varchar('email', { length: 25 }).notNull(),
    bio: text('bio'),
});
export const authers = pgTable('auther', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 25 }).notNull(),
    email: varchar('email', { length: 25 }).notNull(),
    bio: text('bio'),
});
export const books = pgTable('books', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 25 }).notNull(),
    
});