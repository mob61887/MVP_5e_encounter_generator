const { getCreatures, getFluff } = require('./index.js');

async function fetchData() {
  try {
    console.log(await getCreatures('name', 'Ancient Red Dragon'));
    // console.log(await getFluff('name', 'Ancient Red Dragon'));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


fetchData();
