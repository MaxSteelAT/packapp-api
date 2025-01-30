CREATE TABLE packapp.users (
  id INT AUTO_INCREMENT PRIMARY KEY,       -- Identificador único del usuario
  name VARCHAR(100) NOT NULL,              -- Nombre del usuario
  email VARCHAR(100) NOT NULL UNIQUE,      -- Correo electrónico (único)
  password VARCHAR(255) NOT NULL,          -- Contraseña (se almacenará hasheada)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Fecha de creación del registro
);
