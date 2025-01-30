const bcrypt = require('bcryptjs');
const { findByEmail, createUser } = require('../services/usersService');
const { generateToken } = require('../utils/jwtUtils');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findByEmail(email);

    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta.' });
    }

    const token = generateToken(user.id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser({ name, email, password: hashedPassword });

    const token = generateToken(userId);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' });
  }
};

module.exports = { login, register };