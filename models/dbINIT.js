const pool = require("../config/db");

const createTables = async () => {
  try {
  
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);

   
    await pool.query(`
      CREATE TABLE IF NOT EXISTS patients (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id) ON DELETE CASCADE,
        name VARCHAR(100) NOT NULL,
        age INT,
        disease VARCHAR(200)
      );
    `);

    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS doctors (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        specialization VARCHAR(200)
      );
    `);

    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS patient_doctor (
        id SERIAL PRIMARY KEY,
        patient_id INT REFERENCES patients(id) ON DELETE CASCADE,
        doctor_id INT REFERENCES doctors(id) ON DELETE CASCADE
      );
    `);

    console.log("✅ Tables created successfully (if not already present)");
  } catch (err) {
    console.error("❌ Error creating tables", err);
  }
};

module.exports = createTables;
