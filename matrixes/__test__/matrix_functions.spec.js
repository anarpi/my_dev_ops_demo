const MatrixFunctions = require('../matrix_functions')

describe('matrixfunctions', () => {
  it('length of matrix is 1 if given size is 1', () => {
    const randomMatrix = MatrixFunctions.generateRandomMatrix(1)

    expect(randomMatrix.length).toEqual(1)
  })

  it('default length of matrix is 3', () => {
    const randomMatrix = MatrixFunctions.generateRandomMatrix()

    expect(randomMatrix.length).toEqual(3)
  })
})
