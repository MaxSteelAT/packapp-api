const db = require('../config/db');

const getCompanies = async () => {
  const [rows] = await db.query('SELECT name, address FROM companies');
  return rows;
};

const getCount = async () => {
  const result = await db.query('SELECT count(name) AS count FROM companies')
  return result[0][0]?.count || 0;
}

module.exports = {
  getCompanies,
  getCount,
};
