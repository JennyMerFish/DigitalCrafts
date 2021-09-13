const Pool = require("pg").Pool;
const creds = new Pool({
    host: "localhost",
    port: 5432,
    database: "todolist3",
    user: "",
    password: "",
});
module.exports = creds;