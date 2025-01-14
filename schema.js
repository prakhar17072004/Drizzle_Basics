import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

// Define a "users" table
export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    bio: text('bio'),
});
