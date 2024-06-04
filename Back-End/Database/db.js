import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

async function testConnection() {
    try {
        await db.getConnection();
        console.log("Terhubung ke database");
    } catch (error) {
        console.log("Gagal terhubung ke database", error);
    }
}

async function query(command, values) {
    try {
        const [value] = await db.query(command, values ?? []);
        return value;
    } catch (error) {
        console.log(error);
    }
}

export { query, testConnection };