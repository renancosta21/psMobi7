const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3001;

const positionsController = require('./controllers/positionsController');
const poisController = require('./controllers/poisController');

app.get('/positions', positionsController.getAllPositions);
app.get('/pois', poisController.getAllPois);


app.listen(PORT, () => console.log(`API is alive on port ${PORT}`));
