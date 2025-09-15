-- PostgreSQL schema for Urwatul Wuthqa (minimal)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  role TEXT DEFAULT 'student',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  level TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  progress INT DEFAULT 0,
  enrolled_at TIMESTAMP DEFAULT now()
);

-- Sample insert statements
INSERT INTO courses (title, level, description) VALUES
('مقدمہ الفقہ','بنیادی','پہلا تعارفی کورس'),
('تفسیرِ بنیادی','درمیانہ','قرآنی تفسیر کا بنیادی کورس');
