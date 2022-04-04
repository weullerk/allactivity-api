var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const db = require('../db');
const logs = require('../database/log');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

/* GET list logs data */
router.get('/list-logs', async function(req, res, next) {

  var allLogs = await logs.findAll();

  res.send(allLogs);

});

/* POST create log. */
router.post('/create-log', urlencodedParser, async function(req, res) {

  const data = req.body;

  try {

    const newLog = await logs.create({
      start: data.start,
      end: data.end,
      description: data.description
    });

    res.status(200).send(newLog);

  } catch (err) {

    res.status(500).send('Error when creating log.');

  }

});

module.exports = router;
