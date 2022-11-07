import pg from 'pg';
import * as http from 'http';

const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_PORT } = process.env;
const pool = new pg.Pool({
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT,
});

console.log(pool);
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!!');
});

server.listen(3000, () => {
  console.log(`Server running at port 3000`);
});
