// const http = require('http')

// const hostname = process.env.HOSTNAME || '127.0.0.1'
const port = 3000

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const promClient = require('prom-client')

// const MatrixRouter = require('./matrixes/routes.config')

const collectDefaultMetrics = promClient.collectDefaultMetrics
collectDefaultMetrics({ timeout: 5000 })

const counter = new promClient.Counter({
  name: 'node_request_operations_total',
  help: 'The total number of processed requests'
})

const histogram = new promClient.Histogram({
  name: 'node_request_duration_seconds',
  help: 'Histogram for the duration in seconds.',
  buckets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
})

const generateRandomMatrix = (size = 3) => {
  var matrix = []
  for (var i = 0; i < size; i++) {
    matrix[i] = []
    for (var j = 0; j < size; j++) {
      matrix[i][j] = Math.floor(Math.random() * 500)
    }
  }
  return matrix
}

const avgOfMatrix = (matrix = [0]) => {
  var sum = 0
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      sum += matrix[i][j]
    }
  }
  return sum / (matrix.length * matrix.length)
}

app.use(
  function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
    res.header('Access-Control-Expose-Headers', 'Content-Length')
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range')
    if (req.method === 'OPTIONS') {
      return res.send(200)
    } else {
      return next()
    }
  })

app.use(bodyParser.json())

app.get('/api/v1/matrix', (request, response) => {

  var start = new Date()
  const generatedMatrix = generateRandomMatrix()
  var end = new Date() - start
  histogram.observe(end)

  counter.inc()

  esLogger.info('Random matrix: ', {generatedMatrix})
  logstashLogger.info({msg: 'Random matrix avg:', avg: avgOfMatrix(generatedMatrix)})

  return response.status(200).send(generatedMatrix)
})

app.get('/api/v1/metrics', (request, response) => {
  response.set('Content-Type', promClient.register.contentType)
  response.end(promClient.register.metrics())
})


app.listen(port, function() {
  console.log('app listening at port %s', port)
})

//

const winston = require('winston')
const Elasticsearch = require('winston-elasticsearch')
const Logstash = require('logstash-tcp-wins')

const esTransportsOpts = {
  level: 'info',
  clientOpts: {
    host: 'http://elk.apps.okd.codespring.ro/',
    log: 'info',
  },
  indexPrefix: 'anarpi',
}

const esLogger = winston.createLogger({
  transports: [new Elasticsearch(esTransportsOpts)],
})

const logstashLogger = winston.createLogger({
  transports: [new Logstash({level: 'info', port: 5000, host: 'localhost'})],
})

