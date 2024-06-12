import mysql from 'mysql2/promise';
import 'dotenv/config';

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

const testConnection = async () => {
    try {
        await db.getConnection();
        console.log('Connection to database successful!');
    } catch (e) {
        console.log('Failed connect to database:', e.message);
    }
};

const query = async (query, values) => {
    try {
        const [result] = await db.query(query, values ?? []);
        return result;
    } catch (e) {
        console.log('Failed to execute query:', e.message);
        return null;
    }
};

export { testConnection, query };
