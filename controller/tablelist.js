const { execute } = require('../Db_setup/querywrapper');

async function tablelist(req, res) {
  try {
    const query = `SELECT * FROM emp_details `;
    const result = await execute(query, []);

    if (!result.length) {
      return res.status(200).send({ data: [] });
    } else {
      return res.status(200).send({ data: result });
    }
  } catch (error) {
    console.error('Error executing query:', error);
    return res.status(500).send({ error: 'Internal Server Error' });
  }
}

module.exports = { tablelist };
