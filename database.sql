
CREATE TABLE "person" (
    "id" serial PRIMARY KEY,
    "username" Varchar(40) NOT NULL,
    "password" Varchar(60) NOT NULL
);



CREATE TABLE "events" (
    "name" varchar(250) NOT NULL,
    "date" varchar(250) NOT NULL,
    "time" TIME NOT NULL,
    "id" serial PRIMARY KEY,
    "description" varchar(10000) NOT NULL,
    "Location" varchar(10000) NOT NULL
);



CREATE TABLE "Going_to_event" (
    "interested" varchar(60) NOT NULL,
    "id" serial PRIMARY KEY,
    "person_id" INT REFERENCES person,
    "event_id" INT REFERENCES events
);

