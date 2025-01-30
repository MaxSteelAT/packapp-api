const { verifyToken } = require('../utils/jwtUtils');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
  }

  try {
    const decoded = verifyToken(token);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};

module.exports = authMiddleware;