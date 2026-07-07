-- Create Database if not exists (for local testing)
CREATE DATABASE IF NOT EXISTS foodshare_db;
USE foodshare_db;

-- Drop test_table if it exists
DROP TABLE IF EXISTS test_table;

-- Create test_table
CREATE TABLE test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    role VARCHAR(255)
);

-- Insert initial test data matching Group Balen members
INSERT INTO test_table (name, email, role) VALUES 
('Bitu Babu Yadav', 'bitubabuyadav2040@gmail.com', 'Developer / DevOps Lead'),
('Khagaraj Yadav', 'khagaraj.yadav@example.com', 'Developer / Backend'),
('Neha Thapa', 'neha.thapa@example.com', 'Developer / Frontend / Design'),
('Girendra Kumar Thakur', 'girendra.thakur@example.com', 'Developer / Database / QA');
