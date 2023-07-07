--Here we are wiping the database and creating a new one.

DROP DATABASE life_tracker;


CREATE DATABASE life_tracker;

\connect life_tracker;

\i life-tracker-schema.sql;