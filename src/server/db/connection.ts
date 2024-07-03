import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'bookstore_user',
    password: 'password123',
    database: 'practicebookstore_01'
})

export default pool;