const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors()); // use { origin: to config cors}
app.use(express.json());
app.use(routes);

app.listen(3333);
