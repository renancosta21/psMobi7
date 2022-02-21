const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = 3001;

const positionsController = require('./controllers/positionsController');
const poisController = require('./controllers/poisController');

app.get('/positions', positionsController.getAllPositions);
app.get('/pois', poisController.getAllPois);


app.listen(PORT, () => console.log(`API is alive on port ${PORT}`));
