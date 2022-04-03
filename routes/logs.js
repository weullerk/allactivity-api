var express = require('express');
var router = express.Router();

const logService = require('../database/log');

/* GET users listing. */
router.get('/list-logs', async function(req, res, next) {
  const logs = await logService.listLogs();
  res.send(logs);
});

module.exports = router;
