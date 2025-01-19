CREATE TABLE "auther" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(25) NOT NULL,
	"email" varchar(25) NOT NULL,
	"bio" text
);
--> statement-breakpoint
CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(25) NOT NULL
);
