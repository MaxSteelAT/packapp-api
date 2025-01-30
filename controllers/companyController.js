const companyService = require('../services/companyService');

const getAll = async (req, res) => {
  try {
    const companies = await companyService.getCompanies();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching companies' });
  }
};

const testing = (req, res) => {
  res.status(200).json({ name: "Hola Cirus" });
}

const getCount = async (req, res) => {
  try{
    const companies = await companyService.getCompanies();
    const length = companies.length;
    res.status(200).json(length);
  } catch(error){

  }
}

const getCountv2 = async (req, res) => {
  try{
    const count = await companyService.getCount();
    res.status(200).json(count);
  } catch(error){

  }
}

module.exports = {
 getAll,
 testing,
 getCount,
 getCountv2,
};