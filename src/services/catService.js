const axios = require('axios');

const getCatFact = async () => {
  try {
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    return response.data.fact;
  } catch (err) {
    return "Could not fetch cat fact at the moment"; // graceful fallback
  }
};

module.exports = getCatFact;
