const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/controllers/user.controllers.js']

swaggerAutogen(outputFile, endpointsFiles)