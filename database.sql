
CREATE TABLE "Users" (
	"id" serial NOT NULL,
	"username" Varchar(40) NOT NULL,
	"password" Varchar(60) NOT NULL,
	"Admin" BOOLEAN NOT NULL,
	CONSTRAINT Users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "events" (
	"name" varchar(250) NOT NULL,
	"date" varchar(250) NOT NULL,
	"time" TIME NOT NULL,
	"id" serial NOT NULL,
	"description" varchar(10000) NOT NULL,
	"Location" varchar(10000) NOT NULL,
	CONSTRAINT events_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Going_to_event" (
	"interested" varchar(60) NOT NULL,
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"event_id" varchar(60) NOT NULL,
	CONSTRAINT Going_to_event_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
