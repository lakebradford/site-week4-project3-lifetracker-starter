-- Here we setup the user table, we will need the following information for each user:
-- - userID
-- - username
-- - Email
-- - First name
-- - Last name
-- - Password

CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    TEXT NOT NULL,
    -- We are checking to make sure there is an @ symbol in our email 
    email       TEXT NOT NULL UNIQUE CHECK (POSITION( '@' IN email) > 1),
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    password    TEXT NOT NULL
);