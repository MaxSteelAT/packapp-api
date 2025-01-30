const userService = require('../services/userService');
// Se reparo un Bug.
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

const testing = (req, res) => {
  res.status(200).json({ name: "Hola Cirus" });
}

module.exports = {
 getAllUsers,
 testing
};