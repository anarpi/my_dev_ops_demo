const MatrixesController = require('./controller/matrixes.controller')

exports.routesConfig = function(app) {
  app.get('/api/v1/matrix', MatrixesController.generateMatrix)
}
