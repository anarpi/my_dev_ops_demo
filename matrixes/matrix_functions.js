exports.generateRandomMatrix = (size = 3) => {
  var matrix = []
  for (var i = 0; i < size; i++) {
    matrix[i] = []
    for (var j = 0; j < size; j++) {
      matrix[i][j] = Math.floor(Math.random() * 500)
    }
  }
  return matrix
}
