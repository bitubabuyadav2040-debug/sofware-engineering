-- Create Database if not exists (for local testing)
CREATE DATABASE IF NOT EXISTS game_db;
USE game_db;

-- Drop test_table if it exists
DROP TABLE IF EXISTS test_table;

-- Create test_table for Leaderboard
CREATE TABLE test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    score INT NOT NULL, -- Number of attempts taken to guess correctly
    role VARCHAR(255) DEFAULT 'Challenger' -- Rank/Title achieved
);

-- Insert initial leaderboard test data
INSERT INTO test_table (name, score, role) VALUES 
('Bitu Babu Yadav', 3, 'Grandmaster (Top Score)'),
('Khagaraj Yadav', 5, 'Master Rank'),
('Neha Thapa', 6, 'Challenger Rank'),
('Girendra Kumar Thakur', 8, 'Apprentice Rank');
