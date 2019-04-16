'docker-compose up' in same directory as readme to start postgres instance
Environment variables are set to demo in compose file
To run psql in docker: docker exec -it [container name] psql -U demo -W demo

Todos:

Express server that pulls data from db

Db should be seeded with last updated

Express server does a get and then uses that data to create heatmap

Heatmap based on data with last updated market (i.e market that has been last updated over  48 hours ago) with list of last update

Postgres that autoupdates every second with random state for testing (i.e. docker file to test)

probably sql such as SELECT COUNT(*), MAX(TIME), State from table group by State
