const { generateRandomMatrix } = require('../matrix_functions')

exports.generateMatrix = (reqest, response) => {
  return response.status(200).send(generateRandomMatrix())
}
