'docker-compose up' in same directory as readme to start postgres instance
Environment variables are set to demo in compose file
To run psql in docker: docker exec -it [container name] psql -U demo -W demo

Sql commands below to provide seed data (can make a .sql script to execute in docker):

CREATE DATABASE api;
\c api
CREATE TABLE mls_items (
    mls_id INTEGER PRIMARY KEY,
    state CHAR(2),
    last_updated DATE NOT NULL DEFAULT CURRENT_DATE
);
INSERT INTO mls_items 
VALUES
(1292709, 'MN', NOW()),
(12345678, 'NV', NOW());

INSERT INTO mls_items 
VALUES
(124123488, 'SC', NOW()),
(123534512, 'MA', NOW());


Todos:

Fix postgres database to hold timestamps properly

Add sql script to seed in docker
