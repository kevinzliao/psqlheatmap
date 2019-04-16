//Config postgres
//DO NOT PUSH REAL CREDENTIALS, USING ONLY DOCKER DEMO CREDENTIALS
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'demo',
    password: 'demo',
    host: 'localhost',
    database: 'api',
    port: 5432,
})

//pull aggregate data for US map
const getMLS = (req, res) => {
    pool.query('SELECT COUNT(*), MAX(last_updated) last_update, state FROM mls_items GROUP BY state', (err, results) => {
        if (err) {
            throw err
        }
    res.status(200).json(results.rows)
    })
}

//if specific state provided, pull state-specific info
const getState = (req, res) => {
    const state = req.params.state;
    console.log(state);
    pool.query('SELECT * FROM mls_items WHERE state = $1', [state], (err, results) => {
        if (err) {
            throw err
        }
    res.status(200).json(results.rows)
    })
}

module.exports = {
    getMLS,
    getState,
}