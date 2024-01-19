const db = require("../db/db.js");
require("dotenv").config();

const createUserAccount = async () => {
    const dropTtable = "DROP TABLE IF EXISTS users";

    const userQuery = `
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            created_at TIMESTAMP,
            updated_at TIMESTAMP
    );`;

    const insertUserQuery = `
        INSERT INTO users (first_name, last_name, created_at) VALUES ($1, $2, $3);
    `;

    const userData = {
        first_name : "Abisola",
        last_name : "Majeed"
    }

    const values = [userData.first_name, userData.last_name, new Date()];

    try {
        // Drop if table exists
        await db.query(dropTtable);
        console.log("Users table dropped");

        // Create the users table
        await db.query(userQuery);
        console.log("Users table created");

        // Insert dummy user data
        await db.query(insertUserQuery, values);
        console.log("Dummy user data created");
    } catch (e) {
        console.error("Error during table creation and data insertion:", e.message);
    }
};

module.exports = { createUserAccount };