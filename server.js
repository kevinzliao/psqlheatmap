const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3001;
const db = require('./queries')

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

//route for general map
app.get('/api', db.getMLS)
//route for each individual state's mls data
app.get('/api/:state', db.getState);
/*
app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
})
*/

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});