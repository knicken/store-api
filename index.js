const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./swagger.json')
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

routes.setup(app);
app.listen(PORT)

console.log('Running on port: ' + PORT)



